#!/usr/bin/env node
/**
 * validate-questions.js — Run BEFORE merging new questions into the app.
 *
 * Usage:
 *   node validate-questions.js <file.js>
 *   node validate-questions.js ergonomic-questions.js
 *   node validate-questions.js   (validates all *-questions.js files)
 *
 * Checks:
 *   1. Every option follows "English text (Thai text)" format for splitOpt()
 *   2. Answers are distributed across A/B/C/D (not all the same)
 *   3. Every question has: topic, q (English), th (Thai), 4 options, answer 0-3
 *   4. q field is mostly English, th field has Thai characters
 *   5. No duplicate questions
 */

const fs = require('fs');
const path = require('path');

function splitOpt(text) {
  const m = text.match(/^(.*)\s*\(([^\)]*[\u0E00-\u0E7F][^\)]*)\)\s*$/);
  if (m) return { en: m[1].trim(), th: m[2].trim() };
  return { en: text, th: text };
}

function validate(file) {
  const content = fs.readFileSync(file, 'utf8');
  const start = content.indexOf('[');
  const end = content.lastIndexOf('];');
  if (start === -1 || end === -1) {
    console.log(`  ERROR: Cannot find question array in ${file}`);
    return false;
  }

  let qs;
  try {
    qs = new Function('const qs=' + content.substring(start, end + 1) + ';return qs;')();
  } catch (e) {
    console.log(`  ERROR: JavaScript parse error in ${file}: ${e.message}`);
    return false;
  }

  let errors = 0;
  const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };

  qs.forEach((q, i) => {
    const qNum = i + 1;

    // Check required fields
    if (!q.topic) { console.log(`  Q${qNum}: Missing 'topic' field`); errors++; }
    if (!q.q) { console.log(`  Q${qNum}: Missing 'q' (English question) field`); errors++; }
    if (!q.th) { console.log(`  Q${qNum}: Missing 'th' (Thai question) field`); errors++; }
    if (!q.options || q.options.length !== 4) {
      console.log(`  Q${qNum}: Must have exactly 4 options (has ${q.options ? q.options.length : 0})`);
      errors++;
    }
    if (q.answer === undefined || q.answer < 0 || q.answer > 3) {
      console.log(`  Q${qNum}: Invalid answer index: ${q.answer} (must be 0-3)`);
      errors++;
    }

    // Check q is mostly English
    const engInQ = (q.q.match(/[a-zA-Z]/g) || []).length;
    const thaiInQ = (q.q.match(/[\u0E00-\u0E7F]/g) || []).length;
    if (engInQ === 0 || thaiInQ > engInQ) {
      console.log(`  Q${qNum}: 'q' field should be English but appears Thai: "${q.q.substring(0, 60)}"`);
      errors++;
    }

    // Check th has Thai
    if (!/[\u0E00-\u0E7F]/.test(q.th)) {
      console.log(`  Q${qNum}: 'th' field has no Thai characters: "${q.th.substring(0, 60)}"`);
      errors++;
    }

    // Check each option passes splitOpt
    if (q.options) {
      q.options.forEach((opt, j) => {
        const r = splitOpt(opt);
        if (r.en === r.th) {
          if (/[\u0E00-\u0E7F]/.test(opt)) {
            console.log(`  Q${qNum} opt${j}: splitOpt FAILS — Thai not in final parens: "${opt.substring(0, 80)}"`);
            errors++;
          } else {
            console.log(`  Q${qNum} opt${j}: No Thai translation — needs "(Thai text)" at end: "${opt.substring(0, 80)}"`);
            errors++;
          }
        }
      });
    }

    // Track answer distribution
    if (q.answer >= 0 && q.answer <= 3) dist[q.answer]++;
  });

  // Check answer distribution
  const total = qs.length;
  const maxPct = Math.max(...Object.values(dist)) / total;
  if (maxPct > 0.5) {
    console.log(`  WARNING: Answer distribution is skewed — A:${dist[0]} B:${dist[1]} C:${dist[2]} D:${dist[3]}`);
    console.log(`           More than 50% of answers are the same letter. Shuffle with shuffle-answers.js`);
    errors++;
  }

  // Check for duplicate questions
  const seen = new Set();
  qs.forEach((q, i) => {
    const key = q.q.toLowerCase().trim();
    if (seen.has(key)) {
      console.log(`  Q${i + 1}: Duplicate question text: "${q.q.substring(0, 60)}"`);
      errors++;
    }
    seen.add(key);
  });

  return { questions: qs.length, errors, dist };
}

// Main
const args = process.argv.slice(2);
let files;
if (args.length > 0) {
  files = args;
} else {
  files = fs.readdirSync('.').filter(f => f.endsWith('-questions.js') && !f.startsWith('validate') && !f.startsWith('shuffle')).sort();
}

if (files.length === 0) {
  console.log('No question files found. Usage: node validate-questions.js <file.js>');
  process.exit(1);
}

let totalErrors = 0;
let totalQuestions = 0;

for (const file of files) {
  console.log(`\n=== ${file} ===`);
  const result = validate(file);
  if (result === false) {
    totalErrors++;
  } else {
    totalQuestions += result.questions;
    totalErrors += result.errors;
    console.log(`  ${result.questions} questions, ${result.errors} errors`);
    console.log(`  Answers: A=${result.dist[0]} B=${result.dist[1]} C=${result.dist[2]} D=${result.dist[3]}`);
  }
}

console.log(`\n=== SUMMARY ===`);
console.log(`Files: ${files.length}, Questions: ${totalQuestions}, Errors: ${totalErrors}`);

if (totalErrors > 0) {
  console.log('\nFIX ALL ERRORS before merging into the app.');
  console.log('Required format for options: "English text (Thai translation)"');
  console.log('Run: node shuffle-answers.js   to fix answer distribution');
  console.log('Run: node remerge.js           to merge into HTML files');
  process.exit(1);
} else {
  console.log('\nAll checks passed. Safe to merge.');
  console.log('Run: node remerge.js           to merge into HTML files');
  process.exit(0);
}

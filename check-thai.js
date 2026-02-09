const fs = require('fs');
const html = fs.readFileSync('index.html','utf8');
const qStart = html.indexOf('const questions = [');
const stateMarker = html.indexOf('// ─── STATE ───');
const qSection = html.substring(qStart, stateMarker);
const qEnd = qSection.lastIndexOf('];');
const qCode = qSection.substring(0, qEnd + 2);
const fn = new Function(qCode + '; return questions;');
const qs = fn();

// Check for options that have no English/Latin characters
const issues = [];
qs.forEach((q, qi) => {
  q.options.forEach((opt, oi) => {
    const hasEnglish = /[a-zA-Z]/.test(opt);
    if (!hasEnglish) {
      issues.push({qi: qi+1, oi, topic: q.topic, q: q.q.substring(0,70), opt: opt.substring(0,80)});
    }
  });
});

console.log('Options with NO English text: ' + issues.length);
issues.forEach(i => {
  console.log('  Q' + i.qi + ' opt' + i.oi + ' [' + i.topic + ']');
  console.log('    Q: ' + i.q);
  console.log('    Opt: ' + i.opt);
  console.log();
});

// Also check: questions where q (English) field contains mostly Thai
const thaiQs = [];
qs.forEach((q, qi) => {
  const engChars = (q.q.match(/[a-zA-Z]/g) || []).length;
  const total = q.q.length;
  if (engChars / total < 0.3) {
    thaiQs.push({qi: qi+1, topic: q.topic, q: q.q.substring(0,80)});
  }
});
console.log('\nQuestions where English q field is mostly Thai: ' + thaiQs.length);
thaiQs.forEach(i => {
  console.log('  Q' + i.qi + ' [' + i.topic + '] ' + i.q);
});

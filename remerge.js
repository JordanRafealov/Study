const fs = require('fs');
const path = require('path');

function extractQuestions(file) {
  const content = fs.readFileSync(file, 'utf8');
  const start = content.indexOf('[');
  const end = content.lastIndexOf('];');
  return content.substring(start + 1, end).trim();
}

const ergo = extractQuestions('ergonomic-questions.js');
const lift = extractQuestions('lifting-questions.js');
const pos1 = extractQuestions('positioning1-questions.js');
const pos2 = extractQuestions('positioning2-questions.js');

const countQ = (s) => (s.match(/\{[\s\n]*topic:/g) || []).length;
console.log(`Ergonomic: ${countQ(ergo)}, Lifting: ${countQ(lift)}, Pos1: ${countQ(pos1)}, Pos2: ${countQ(pos2)}`);
console.log(`Total: ${countQ(ergo) + countQ(lift) + countQ(pos1) + countQ(pos2)}`);

const newQuestions = [ergo, lift, pos1, pos2].join(',\n');

for (const file of ['index.html', 'quiz.html']) {
  let html = fs.readFileSync(file, 'utf8');

  const qStart = html.indexOf('const questions = [');
  const stateMarker = html.indexOf('// ─── STATE ───');
  const section = html.substring(qStart, stateMarker);
  const closingBracket = section.lastIndexOf('];');
  const qEnd = qStart + closingBracket + 2;

  const replacement = 'const questions = [\n' + newQuestions + '\n];';
  html = html.substring(0, qStart) + replacement + html.substring(qEnd);

  fs.writeFileSync(file, html, 'utf8');

  // Verify
  const verify = fs.readFileSync(file, 'utf8');
  const vStart = verify.indexOf('const questions = [');
  const vState = verify.indexOf('// ─── STATE ───');
  const vSection = verify.substring(vStart, vState);
  const count = (vSection.match(/\{[\s\n]*topic:/g) || []).length;
  console.log(`${file}: ${count} questions, ${(verify.length/1024).toFixed(0)} KB`);
}

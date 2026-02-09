const fs = require('fs');

// Seeded random for reproducibility
function seededRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 1664525 + 1013904223) & 0xFFFFFFFF;
    return (s >>> 0) / 0xFFFFFFFF;
  };
}

// Fisher-Yates shuffle with seeded random
function shuffleWithIndex(arr, rand) {
  const indices = arr.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
}

const files = [
  'ergonomic-questions.js',
  'lifting-questions.js',
  'positioning1-questions.js',
  'positioning2-questions.js'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const start = content.indexOf('[');
  const end = content.lastIndexOf('];');
  const qs = new Function('const qs=' + content.substring(start, end + 1) + ';return qs;')();

  const rand = seededRandom(42 + file.length); // deterministic per file

  // Before
  const beforeDist = {0:0,1:0,2:0,3:0};
  qs.forEach(q => beforeDist[q.answer]++);

  // Shuffle each question's options
  qs.forEach((q, qi) => {
    if (q.options.length !== 4) return; // skip non-4-option questions

    const newOrder = shuffleWithIndex(q.options, rand);
    const newOptions = newOrder.map(i => q.options[i]);
    const newAnswer = newOrder.indexOf(q.answer);

    q.options = newOptions;
    q.answer = newAnswer;
  });

  // After
  const afterDist = {0:0,1:0,2:0,3:0};
  qs.forEach(q => afterDist[q.answer]++);

  console.log(file.replace('-questions.js', '') + ':');
  console.log('  Before: A=' + beforeDist[0] + ' B=' + beforeDist[1] + ' C=' + beforeDist[2] + ' D=' + beforeDist[3]);
  console.log('  After:  A=' + afterDist[0] + ' B=' + afterDist[1] + ' C=' + afterDist[2] + ' D=' + afterDist[3]);

  // Now write back - rebuild the file content
  // Read the file header (everything before the array)
  const header = content.substring(0, start);

  // Serialize questions back
  const qStrings = qs.map(q => {
    const optStr = q.options.map(o => JSON.stringify(o)).join(',');
    let s = '{\n';
    s += '  topic:' + JSON.stringify(q.topic) + ',diff:' + q.diff + ',\n';
    s += '  q:' + JSON.stringify(q.q) + ',\n';
    s += '  th:' + JSON.stringify(q.th) + ',\n';
    s += '  options:[' + optStr + '],\n';
    s += '  answer:' + q.answer + ',\n';
    if (q.hint) s += '  hint:' + JSON.stringify(q.hint) + ',\n';
    if (q.explain) s += '  explain:' + JSON.stringify(q.explain) + ',\n';
    if (q.explainTh) s += '  explainTh:' + JSON.stringify(q.explainTh);
    s += '\n}';
    return s;
  });

  const newContent = header + '[\n' + qStrings.join(',\n') + '\n];\n';
  fs.writeFileSync(file, newContent, 'utf8');
}

// Verify the shuffled files parse correctly
console.log('\nValidation:');
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const start = content.indexOf('[');
  const end = content.lastIndexOf('];');
  try {
    const qs = new Function('const qs=' + content.substring(start, end + 1) + ';return qs;')();
    console.log('  ' + file + ': ' + qs.length + ' questions, valid JS');
  } catch(e) {
    console.log('  ' + file + ': PARSE ERROR: ' + e.message);
  }
}

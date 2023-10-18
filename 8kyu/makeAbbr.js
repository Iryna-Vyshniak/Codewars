function makeAbbr(words) {
  return words
    .split(' ')
    .map((w) => w.charAt(0))
    .join('')
    .toUpperCase();
}

console.log(makeAbbr('simplified text with spaces'));

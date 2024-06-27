// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str) {
  return str
    .trim()
    .split(/\s+/)
    .map((item, idx) => (idx % 2 ? item.split('').reverse().join('') : item))
    .join(' ');
}

function reverse1(str) {
  return str
    .split(' ')
    .map((item, idx) => (idx % 2 ? item.split('').reverse().join('') : item))
    .join(' ')
    .trim();
}

reverse('Reverse this string, please!'); // "Reverse siht string, !esaelp"
console.log('reverse', reverse1('Reverse this string, please!'));

/* Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1 */

// The match() method of String values retrieves the result of matching this string against a regular expression.

function sameCase(a, b) {
  if (a.match(/[a-z]/) && b.match(/[a-z]/)) {
    return 1;
  }
  if (a.match(/[A-Z]/) && b.match(/[A-Z]/)) {
    return 1;
  }
  if (b.match(/[a-z]/) && a.match(/[A-Z]/)) {
    return 0;
  }
  if (a.match(/[a-z]/) && b.match(/[A-Z]/)) {
    return 0;
  }
  return -1;
}

// .match
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found); // Array ["T", "I"]

// .matchAll

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

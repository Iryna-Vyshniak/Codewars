/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s) {
  const words = s.split(' ');
  let shortestWord = words[0];

  for (const word of words) {
    if (word.length < shortestWord.length) shortestWord = word;
  }

  return shortestWord.length;
}

function findShorts(s) {
  return Math.min(...s.split(' ').map((s) => s.length));
}

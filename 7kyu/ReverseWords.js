/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"  */

function reverseWords(str) {
  return str
    .split(' ')
    .map((n) => n.split('').reverse().join(''))
    .join(' ');
}

reverseWords('This is an example!');
console.log("reverseWords('This is an example!'): ", reverseWords('This is an example!')); // sihT si na !elpmaxe

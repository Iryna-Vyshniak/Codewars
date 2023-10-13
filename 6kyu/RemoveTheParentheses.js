/* Remove the parentheses
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested. */

/*
 \(: Відповідає лівій круглій дузі.
([^)]+): Відповідає будь-якому символу, крім закритої круглої дужки (тобто, буде відповідність до будь-якого символу, крім )), і повторюється один або більше разів (за допомогою +), зберігаючи цей вміст у групу.
\): Відповідає закритій круглій дузі. */ // /\(([^)]+)\)/gi => видаляє вкладеність всередині дужок - не працює

function removeParentheses(s) {
  let count = 0;
  let str = '';

  for (let i = 0; i < s.length - 1; i += 1) {
    if (s[i] === '(') {
      count += 1;
    } else if (s[i] === ')' && count > 0) {
      count -= 1;
    } else if (count === 0) {
      str += s[i];
    }
  }
  return str;
}

removeParentheses('example(unwanted thing)example');
console.log(
  "removeParentheses('example(unwanted thing)example'): ",
  removeParentheses('example(unwanted thing)example')
);
console.log(
  "removeParentheses('(first group) (second group) (third group)'): ",
  removeParentheses('(first group) (second group) (third group)')
);

// another variant
function removeParenthesesX(s) {
  let count = 0;

  return s
    .split('')
    .map((char) => {
      if (char === '(') {
        count += 1;
      } else if (char === ')') {
        count -= 1;
      } else if (count === 0) {
        return char;
      }
    })
    .join('');
}

removeParenthesesX('example(unwanted thing)example');
console.log(
  "removeParentheses('example(unwanted thing)example'): ",
  removeParenthesesX('example(unwanted thing)example')
);
console.log(
  "removeParentheses('(first group) (second group) (third group)'): ",
  removeParenthesesX('(first group) (second group) (third group)')
);

// another variant
function removeParenthesesXX(s) {
  let count = 0;

  return [...s]
    .map((char) => {
      if (char === '(') {
        count += 1;
      } else if (char === ')') {
        count -= 1;
      } else if (count === 0) {
        return char;
      }
    })
    .join('');
}

removeParenthesesXX('example(unwanted thing)example');
console.log(
  "removeParenthesesXX('example(unwanted thing)example'): ",
  removeParenthesesXX('example(unwanted thing)example')
);
console.log(
  "removeParenthesesXX('(first group) (second group) (third group)'): ",
  removeParenthesesXX('(first group) (second group) (third group)')
);

// another variant
function removeParenthesesXXX(s) {
  let count = 0;

  return s
    .split('')
    .filter((char) => {
      if (char === '(') {
        count += 1;
      } else if (char === ')') {
        count -= 1;
      } else if (count === 0) {
        return char;
      }
    })
    .join('');
}

removeParenthesesXXX('example(unwanted thing)example');
console.log(
  "removeParenthesesXXX('example(unwanted thing)example'): ",
  removeParenthesesXXX('example(unwanted thing)example')
);
console.log(
  "removeParenthesesXXX('(first group) (second group) (third group)'): ",
  removeParenthesesXXX('(first group) (second group) (third group)')
);

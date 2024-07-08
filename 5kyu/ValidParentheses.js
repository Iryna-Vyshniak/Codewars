// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
  let stack = [];

  for (let char of parens) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (!stack.length) {
        return false;
      }
      stack.pop(char);
    }
  }
  return !stack.length;
}

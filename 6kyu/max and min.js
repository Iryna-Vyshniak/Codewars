/* Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.

Example
max(1,2,3,4) //returns 4
max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
max(1,2,[3,4]) //returns 4
max(1,2,[3,[4]]) //returns 4
max(1,2,[3,['4r']]) //returns NaN
max([[],[-4]]) // returns -4
max() or max([]) //returns 0
And so goes for min

Further Instructions
functions will take any number of arguments
Arrays of numbers can be to any depth
You can't use Math.max, Math.min, and require
If one of the arguments can not be evaluated to a number, return NaN */

function max(...args) {
  const numbers = args.flat(Infinity).map((num) => Number(num));

  if (!numbers.length) return 0;
  if (numbers.includes(NaN)) return NaN;

  const max = numbers.reduce((num1, num2) => (num1 > num2 ? num1 : num2));
  console.log(max);
  return max;
}

function min(...args) {
  const numbers = args.flat(Infinity).map((num) => Number(num));

  if (!numbers.length) return 0;
  if (numbers.includes(NaN)) return NaN;

  const min = numbers.reduce((num1, num2) => (num1 < num2 ? num1 : num2));
  console.log(min);
  return min;
}

max(1, 2, 3, 4); //returns 4
max(1, 2, 3, ['4']); //returns 4; note it returned 4 not '4'
max(1, 2, [3, 4]); //returns 4
max(1, 2, [3, [4]]); //returns 4
max(1, 2, [3, ['4r']]); //returns NaN
max([[], [-4]]); // returns -4
max(); // returns 0
max([]); //returns 0

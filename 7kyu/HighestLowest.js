// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    const arr = numbers.split(" ");
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    console.log(`${max} ${min}`);
    return `${max} ${min}`
  }

  highAndLow("1 2 -3 4 5");

  function highAndLow1(numbers){
    const arr = numbers.split(" ").sort((a, b) => a - b);
    console.log(`${arr.at(-1)} ${arr[0]}`);
    return `${arr.at(-1)} ${arr[0]}`
  }

  highAndLow1("1 2 3 4 -5");
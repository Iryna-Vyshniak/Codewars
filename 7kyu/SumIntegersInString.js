// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

function sumOfIntegersInString(s) {
  const re = /[^0-9]/g;
  return s.split(re).reduce((acc, currentValue) => acc + Number(currentValue), 0);
}

function sumOfIntegersInString1(s) {
  const re = /[0-9]+/g;
  console.log(s.match(re));
  return (s.match(re) || []).reduce((acc, currentValue) => acc + Number(currentValue), 0);
}

sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the10.2l4zy dog');
console.log(
  "sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog');: ",
  sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the10.2l4zy dog')
);
console.log(
  "sumOfIntegersInString1('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog');: ",
  sumOfIntegersInString1('The30quick20brown10f0x1203jumps914ov3r1349the10.2l4zy dog')
);

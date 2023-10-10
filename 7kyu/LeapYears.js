/* In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
Examples can be found in the test fixture. */

function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

isLeapYear(2020); // true;
console.log('isLeapYear(2020);: ', isLeapYear(2020));
isLeapYear(2000); // true;
console.log('isLeapYear(2000): ', isLeapYear(2000));
isLeapYear(2015); // false;
console.log('isLeapYear(2015): ', isLeapYear(2015));
isLeapYear(2100); // false;
console.log('isLeapYear(2100): ', isLeapYear(2100));

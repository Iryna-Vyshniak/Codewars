/* Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway */

function noBoringZeros(n) {
  return Number(n.toString().replace(/0+$/, ''));
}

noBoringZeros(1450);
noBoringZeros(960000);
console.log('noBoringZeros(1450): ', noBoringZeros(1450));
console.log('noBoringZeros(960000): ', noBoringZeros(960000));

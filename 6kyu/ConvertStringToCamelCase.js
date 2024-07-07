// DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  let camelCaseStr = '';

  function checkStr(str) {
    const delimiter = str.includes('-') ? '-' : '_';
    camelCaseStr = str
      .split(delimiter)
      .map((s, idx) => (idx === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)))
      .join('');
    const newDelimiter = camelCaseStr.includes('-') ? '-' : '_';
    if (camelCaseStr.includes(newDelimiter)) {
      checkStr(camelCaseStr);
    }
    return camelCaseStr;
  }

  checkStr(str);

  return camelCaseStr;
}

function toCamelCase1(str) {
  return str
    .split(/[_-]/g)
    .map((s, idx) => (idx === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)))
    .join('');
}

/* Write a function that given an array of numbers >= 0, will arrange them such that they form the biggest number.

For example:

[1, 2, 3] --> "321" (3-2-1)
[3, 30, 34, 5, 9] --> "9534330" (9-5-34-3-30)
The results will be large so make sure to return a string. */

const biggest = (nums) => {
  return nums.every((num) => num !== 0)
    ? nums
        .map((num) => num.toString())
        .sort((a, b) => (b + a).localeCompare(a + b))
        .join('')
    : '0';
};

console.log(biggest([0, 0, 0]));
console.log(biggest([3, 30, 34, 5, 9]));
biggest([3, 30, 34, 5, 9]);
biggest([1, 2, 3]);

/* Додавання + у функції порівняння в методі sort змінює порядок сортування таким чином, що ми отримуємо найбільше можливе число у вказаному порядку.

У JavaScript метод sort використовує порівняння між стрічками для сортування масиву. Додавання + перед порівнянням дозволяє отримати правильний порядок сортування чисел, який спричиняє те, що найбільші числа з'єднуються разом у вірному порядку.

Наприклад, якщо ми маємо числа 30 та 3, то в порівнянні '30' + '3' та '3' + '30' результат буде таким:

'30' + '3' дає '303'
'3' + '30' дає '330'
Порівняння '330' з '303' під час сортування дає правильний результат у відповідності до наших вимог. */
//TODO ********Task-1**********
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
// const styles = ["Jazz", "Blues"];
// styles.push("Rock-n-roll");
// console.log(styles);
// const idx = styles.indexOf("Blues");
// styles[idx] = "Classic";
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) console.log(`${i + 1} - ${array[i]}`);
// }
// logItems(styles);
//TODO ********Task-2**********
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//   const name = prompt("Name?");
//   if (array.includes(name)) {
//     alert(`Welcome, ${name}!`);
//   } else {
//     alert("User not found");
//   }
// }
// checkLogin(logins);
//TODO ********Task-3**********
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
// function caclculateAverage(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     if (isNaN(args[i]) || typeof args[i] === "string") {
//       return "is NaN";
//     } else {
//       sum += args[i];
//     }
//   }
//   return sum / args.length;
// }
// console.log(caclculateAverage(1, 3, 676, 767, 54));
// console.log(caclculateAverage(1, 3, 676, "767", 54));
//TODO ********Task-4**********
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.
// function sumArray(someArr) {
//   //   const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
//   const newArray = [];
//   for (let i = 0; i < someArr.length - 1; i++) {
//     const sum = someArr[i] + someArr[i + 1];
//     newArray.push(sum);
//   }
// }

// console.log(sumArray([22, 11, 34, 5, 12, 13, 14, 15]));
// // [33, 45, 39, 17, 25, 27, 29]

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
//TODO ********Task-5**********
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// function findSmallestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return "Sorry, it is not an array!";
//   }
//   const min = Math.min(...numbers);
//   return min;
// }
// console.log(findSmallestNumber(numbers));
//TODO ********Task-6**********
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
// function findLongestWord(string) {
//   const words = string.split(" ");
//   let longerWord = "";
//   for (const item of words) {
//     if (item.length > longerWord.length) {
//       longerWord = item;
//     }
//   }
//   return longerWord;
// }
// console.log(findLongestWord("London is the capital of Great Britain"));
//TODO ********Task-7**********
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// console.log(user);
// const keys = Object.keys(user);
// console.log(keys);
// for (const item of keys) {
//   console.log(`${item}: ${user[item]}`);
// }
//TODO ********Task-8**********
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// const values = Object.values(salaries);
// let sum = 0;
// for (const salary of values) {
//   sum += salary;
// }

// console.log(sum);
//TODO ********Task-9**********
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'
const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  exist() {
    return this.a !== undefined && this.b !== undefined;
  },
  sum() {
    if (!this.exist()) {
      return "No such properties";
    }
    return this.a + this.b;
  },
  mult() {
    if (!this.exist()) {
      return "No such properties";
    }
    return this.a * this.b;
  },
};

console.log(calculator.sum());
calculator.read(10, 20);
console.log(calculator.sum());
//TODO ********Task-10**********
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];

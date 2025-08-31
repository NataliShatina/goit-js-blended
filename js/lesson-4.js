//TODO ----------------Task-1-----------------------------------
// // 1 - отримай body елемент і виведи його в консоль;
// const bodyEl = document.querySelector("body");
// console.log(bodyEl);
// // 2 - отримай елемент id="title" і виведи його в консоль;
// const titleEl = document.querySelector("#title");
// console.log(titleEl);
// // 3 - отримай елемент class="list" і виведи його в консоль;
// const classEl = document.querySelector(".list");
// console.log(classEl);
// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const dataEl = document.querySelectorAll("[data-topic]");
// // dataEl.forEach((el) => console.log(el));
// console.log(dataEl);
// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const h1 = document.querySelector("h1");
// console.log(h1.nextElementSibling);
// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const h3All = document.querySelectorAll("h3");
// console.log(h3All);
// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

// h3All.forEach((h3) => h3.classList.add("active"));
// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const liItem = document.querySelector('li[data-topic="navigation"]');
// console.log(liItem);
// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// liItem.style.backgroundColor = "yellow";
// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const text = liItem.querySelector("p");
// text.textContent = "Я змінив тут текст!";
// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = "manipulation";
// const element = document.querySelector(`[data-topic="${currentTopic}"]`);
// console.log(element);
// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// element.style.backgroundColor = "lightblue";

// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const hEl = document.querySelector(".completed");
// console.log(hEl);
// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// // if (hEl) {
// //   const li = hEl.closest("li");
// //   if (li) {
// //     li.remove();
// //   }
// // }
// hEl.closest("li").remove();

// // const check = document.querySelector(".completed");
// // console.log(check);
// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const h1El = document.querySelector("h1");
// const p = document.createElement("p");
// p.textContent = "Об'єктна модель документа (Document Object Model)";
// h1El.insertAdjacentElement("afterend", p);
// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const ulEl = document.querySelector("ul");
// const liEl = document.createElement("li");
// const h3El = document.createElement("h3");
// h3El.textContent = "Властивість innerHTML";
// const pEl = document.createElement("p");
// pEl.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.";
// liEl.appendChild(h3El);
// liEl.appendChild(pEl);
// ulEl.appendChild(liEl);
// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// const ul = document.querySelector("ul");
// const newItemHTML = `
//   <li>
//     <h3>Властивість innerHTML</h3>
//     <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.</p>
//   </li>
// `;
// ul.insertAdjacentHTML("beforeend", newItemHTML);
// // 20 - очисти список
// ul.textContent = "";
// TODO------------------------Task-2-------------------------------------------
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const numberContainer = document.getElementById("numberContainer");
const container = document.createElement("div");
container.classList.add("number-container");
document.body.append(container);
// body.insertAdjacentElement("beforeend", container);
const randomNumber = () => Math.floor(Math.random() * 100) + 1;

for (let i = 0; i < 100; i++) {
  const num = randomNumber();
  const div = document.createElement("div");
  div.textContent = num;
  div.classList.add("number");
  div.classList.add(num % 2 === 0 ? "even" : "odd");
  container.append(div);
}

//TODO ------------------------
// При натисканні на кнопку "SHOW ME", потрібно в консоль
// вивести значення, яке будемо вводити в інпут.
// const butEl = document.querySelector("#alertButton");
// const inpEl = document.querySelector("#alertInput");
// console.log(butEl);
// console.dir(inpEl);
// butEl.addEventListener("click", handlerClick);

// function handlerClick() {
//   console.log(inpEl.value);
// }
// TODO--------------------------------------
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
// const inputEl = document.querySelector(".js-username-input");
// inputEl.addEventListener("input", () => {
//   const valueLength = inputEl.value.length;
//   inputEl.classList.remove("success", "error");
//   if (valueLength >= 6) {
//     inputEl.classList.add("success");
//   } else {
//     inputEl.classList.add("error");
//   }
// });
// inputEl.addEventListener("input", handlerInput);
// function handlerInput(event) {
//   const text = event.target.value.trim();
//   if (text.length < 6) {
//     inputEl.classList.remove("success");
//     inputEl.classList.add("error");
//   } else {
//     inputEl.classList.remove("error");
//     inputEl.classList.add("success");
//   }
// }

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
// inputEl.addEventListener("focus", handlerFocus);

// function handlerFocus(event) {
//   const input = event.target;

//   if (input.value.trim() === "") {
//     input.style.outline = "3px solid red";
//   } else {
//     input.style.outline = "3px solid green";
//   }
// }

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
const form = document.querySelector(".js-contact-form");
const inputEl = form.querySelector(".js-username-input");
const checkbox = form.querySelector(".js-policy-checkbox");
const outputEl = form.querySelector(".js-username-output");
const defName = "Anonymous";
inputEl.addEventListener("input", handlerInput);
function handlerInput() {
  if (inputEl.value.trim() !== "") {
    outputEl.textContent = inputEl.value;
  } else {
    outputEl.textContent = defName;
  }
}

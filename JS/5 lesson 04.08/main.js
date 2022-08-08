// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// 1 Варіант
// let area = (a, b) => {
//     return a * b;
// }
//
// console.log(area)

//2 варіант
//function area(a, b) {
//        return a * b;
//}
//area()

// 3 варіант
// function area(a,b) {
//     let sideA = a;
//     let sideB = b;
//     let sum = sideA * sideB;
//     console.log(sum)
// }
// area();






// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let areaCircle = (r) => {
//     let result = Math.PI * r
//     return result;
// }
// console.log(areaCircle(2))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let areaCylinder = (h, r) => {
//     return 2 * Math.PI * r * (r + h)
// }
//
// console.log(areaCylinder(12, 5))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function user() {
//     for (const user1 of users) {
//         console.log(user1);
//     }
// }
// user();



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraf() {
//     for(let i = 0; i < arguments.length; i++) {
//         console.log("hi " + arguments[i]);
//     }
// }
//
// paragraf('user1', 'user2')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function liUl(text) {
//     document.write(`<ul></ul>`);
//     for (let i = 0; i < line; i++) {
//         document.write(`<li>${text}</li>`)
//     }
// }
//
// liUl('hi');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function liUl(text, line) {
//     document.write(`<ul></ul>`);
//     for (let i = 0; i < line; i++) {
//         document.write(`<li>${text}</li>`)
//     }
// }
//
// liUl('hi', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let num = [9, 8, 7, 6, 'asd', 'gfd', 'qwe', true, false]
// function list(element) {
//     document.write(`<ul></ul>`);
//     for (let i = 0; i < element.length; i++) {
//         document.write(`<li>${element[i]}</li>`)
//     }
// }
//
// list(num);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function user(array) {
//     for (const arrayElement of array) {
//         document.write(`<div></div>`);
//             document.write(`${arrayElement} + ' ' `)
//     }
// }
//
// user(users);
//??????????///// виходить каша, в чому проблема ?


// - створити функцію яка повертає найменьше число з масиву

// function minNum() {
//     let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     let m = Math.min(...num)
//     console.log(m)
// }
// minNum();


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// let arr = [5,3,2,6];
// function arraySum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     console.log(sum);
// }
// arraySum(arr);
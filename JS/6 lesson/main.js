// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hi = 'hello world',
//     li = 'lorem ipsum',
//     jic =  'javascript is cool';
// console.log(hi.length, li.length, jic.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let hi = 'hello world',
//     li = 'lorem ipsum',
//     jic =  'javascript is cool';
//
// console.log(hi.toUpperCase(), li.toUpperCase(), jic.toUpperCase())


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let hi = 'HELLO WORLD',
//     li = 'LOREM IPSUM',
//     jic =  'JAVASCRIPT IS COOL';
//
// console.log(hi.toLowerCase(), li.toLowerCase(), jic.toLowerCase())


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.split(' ').join(' '))
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
//
// function stringToarray() {
//     let sp = str.split(' ');
//     console.log(sp)
// }
//
// stringToarray(str)
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let numbers = [10,8,-7,55,987,-1011,0,1050,0]
//
// let map = numbers.map(num => num + '')
// console.log(map)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let num = [11, 21, 3];
// let sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//         array.sort((num1, num2) =>num1 - num2)
//     } else if (direction === 'descending') {
//         array.sort((num1, num2) =>num2 - num1)
//     }
//     return array
// };
//
// console.log(sortNums(num, 'ascending'))
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//сортування
// let sort = coursesAndDurationArray.sort((a, b) => {
//   return b.monthDuration - a.monthDuration
// });
// console.log(sort)

// фільтрування
// function filter(array, predicateFn) {
//     let filterArr =[]
//     for (const item of array) {
//         if (predicateFn(item)) {
//             filterArr.push(item);
//         }
//     }
//     return filterArr;
// }
//
// console.log(filter(coursesAndDurationArray, (item) => item.monthDuration > 5))

//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
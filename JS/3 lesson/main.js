// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 7
// if (x === 0) {
//     console.log('Yes')
// } else {
//     console.log('no')
// }
//
// let x = 1
// if (x === 0) {
//     console.log('Yes')
// } else {
//     console.log('no')
// }

// let x = 0
// if (x === 0) {
//     console.log('Yes')
// } else {
//     console.log('no')
// }

// let x = -3
// if (x === 0) {
//     console.log('Yes')
// } else {
//     console.log('no')
// }






// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = prompt('0 - 59')
//
// if (time <= 15) {
//     console.log('one')
// } else if(time <= 30) {
//     console.log('two')
// } else if(time <= 45) {
//     console.log('three')
// }else if(time <= 59) {
//     console.log('four')
// }else if (time >= 59) {
//     console.log(undefined)
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = prompt('1 - 31')
//
// if (day <= 10) {
//     console.log('first')
// } else if (day <= 20) {
//     console.log('second')
// } else if (day <= 30) {
//     console.log('third')
// } else {
//     console.log('???????')
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//

let shedul = prompt('день тижня')

switch (shedul) {
    case 1:
        console.log('read book');
        break;
    case  2:
        console.log('swim');
        break;
    case shedul = 3:
        console.log('eat');
        break;
    case shedul = 4:
        console.log('run');
        break;
    case shedul === 5:
        console.log('coding');
        break;
}
// ???????????????????????????????????????????????????????????
// завдання неправильне
// все що встиг, день навантажений тому малувато часу було (


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
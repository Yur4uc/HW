
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let cars = ['bmw', 'audi', 'mers', 'volvo', 'reno', 'ford', 'opel', 'mazda', 'honda', 'toyota']
console.log(cars)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Boys',
    pageCount: 500,
    genre: 'comedy'
}

let book2 = {
    title: 'Bleng',
    pageCount: 800,
    genre: 'fantastic'
}

let book3 = {
    title: 'Boys',
    pageCount: 500,
    genre: 'comedy'
}
console.log(book1, book2, book3)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book5 = {
    title: 'Boys',
    pageCount: 500,
    genre: 'comedy',
    authors: [
        {
            name: 'Stiv',
            age: 45
        }
    ]
}

let book6 = {
    title: 'Fast',
    pageCount: 500,
    genre: 'comedy',
    authors: [
        {
            name: 'George',
            age: 25
        }
    ]
}

let book7 = {
    title: 'Look',
    pageCount: 500,
    genre: 'comedy',
    authors: [
        {
            name: 'Clark',
            age: 32
        }
    ]
}
console.log(book5, book6, book7)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user = []

user[0] = {
    name: 'Ivan',
    username: 'Ivanko03',
    password: '1asdaklad'
}
user[1] = {
    name: 'Ivan',
    username: 'Ivanko03',
    password: 'hdkfow12'
}
user[2] = {
    name: 'Ivan',
    username: 'Ivanko03',
    password: '3486234'
}
user[3] = {
    name: 'Ivan',
    username: 'Ivanko03',
    password: '1123135'
}
user[4] = {
    name: 'Ivan',
    username: 'Ivanko03',
    password: 'asd6s801s'
}
user[5] = {
    name: 'Ivan',
    username: 'Ivanko03',
    password: '1276354ujw'
}
user[6] = {
    name: 'Ivan',
    username: 'Ivanko03',
    password: '34581y23'
}
user[7] = {
    name: 'Ivan',
    username: 'Ivanko03',
    password: 'zxcpaq'
}
user[8] = {
    name: 'Ivan',
    username: 'Ivanko03',
    password: 'sdsasx'
}
user[9] = {
    name: 'Ivan',
    username: 'Ivanko03',
    password: '8888'
}
console.log(user[0].password)
console.log(user[1].password)
console.log(user[2].password)
console.log(user[3].password)
console.log(user[4].password)
console.log(user[5].password)
console.log(user[6].password)
console.log(user[7].password)
console.log(user[8].password)
console.log(user[9].password)



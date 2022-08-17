// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone) {
//
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// let users = [(new User(1, 'user1', 'useer1', 'user1@gmail.com', 6412648)),
//     (new User(2, 'user2', 'user_2', 'user2@gmail.com', 23724)),
//     (new User(3,'user3','user_3','user3@gmail.com', 9876)),
//     (new User(4,'user4','user_4','user4@gmail.com', 6473)),
//     (new User(5,'user5','user_5','user5@gmail.com', 23421)),
//     (new User(6,'user6','user_6','user6@gmail.com', 9997)),
//     (new User(7,'user7','user_7','user7@gmail.com', 1023)),
//     (new User(8,'user8','user_8','user8@gmail.com', 7815283)),
//     (new User(9,'user9','user_9','user9@gmail.com', 56634)),
//     (new User(10,'user10','user_10','user10@gmail.com', 12834))]
//
//
// console.log(users);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = users.filter(function (value) {
//     return value.id % 2 === 0;
// });
// console.log(filter);

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// users.sort(function (a, b) {
//     return a.id - b.id;
// });
// console.log(users);

// ????????????77 тут не зрозумів трохи воно ж ніби правильно працює але прицьому нічого не змінилось )

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// function Client(id, name, surname, email, phone, order) {
//
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// let clients = [(new Client(1, 'client1', 'client1', 'client1@gmail.com', 6412648, ['car', ,'smartphone', 'phone'])),
//     (new Client(2,'client2','client_2','client2@gmail.com', 98769, ['car', ,'netbook', 'book'])),
//     (new Client(3,'client3','client_3','client3@gmail.com', 9876, ['car', ,'smartphone', 'phone', 'smartphone', 'phone'])),
//     (new Client(4,'client4','client_4','client4@gmail.com', 6473, ['car', ,'smartphone', 'phone'])),
//     (new Client(5,'client5','client_5','client5@gmail.com', 23421, ['car', ,'smartphone', ,'smartphone', 'phone', 'phone'])),
//     (new Client(6,'client6','client_6','client6@gmail.com', 9997, ['car', ,'smartphone', 'phone'])),
//     (new Client(7,'client7','client_7','client7@gmail.com', 1023, ['car', ,'smartphone', 'phone'])),
//     (new Client(8,'client8','client_8','client8@gmail.com', 7815283,['car', ,'smartphone', 'phone'])),
//     (new Client(9,'client9','client_9','client9@gmail.com', 56634,['car', ,'smartphone'])),
//     (new Client(10,'client10','client_10','client10@gmail.com', 12834,['car', 'phone']))]
//

// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// clients.sort(function (a, b) {
//     return a.order.length - b.order.length;
// })
// console.log(clients)
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car(model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpead = maxSpeed;
    this.engine = engine;
}

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
this.drive = function() {
        console.log( `їдемо зі швидкістю ${maxSpeed} на годину`);
};
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
this.speed = function () {
    console.log(`${'NewSpeed'} - ${this.maxSpead += newSpeed}`);
};

// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
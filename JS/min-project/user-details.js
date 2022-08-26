// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
document.write(localStorage.getItem('users'))
let users = fetch('https://jsonplaceholder.typicode.com/users')
for (const user in users) {
    let id = document.createElement('h1');
    h1.innerText = ` Users id :${user.id}`;
    document.body.appendChild(id);
}

// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
let div = document.createElement('div');
div.innerText = `${localStorage.getItem('users')}`;
let btn = document.createElement('button');
btn.innerText = 'post of current user';
btn.onclick = function (){
    let user = localStorage.getItem('users');
    fetch('https://jsonplaceholder.typicode.com/users/${user.id}/posts')
        .then(response => {
            return response.json();
        })
        .then(posts => posts.forEach(post =>{
            let click = JSON.stringify(post);
            localStorage.setItem('posts', click);

            document.write(`${localStorage.getItem(posts.title)}`);
        }))


}
document.body.append(div, btn);

//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .

// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
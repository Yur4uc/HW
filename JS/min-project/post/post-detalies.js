//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .


let url = new URL(location.href)
let id = url.searchParams.get('id')
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(promise => promise.json())
    .then(data=>{
        for (const dataElement in data) {
            let div = document.createElement('div')
            div.classList.add('divClass')
            document.body.appendChild(div)
            div.innerText = `${data[dataElement]}`
            document.body.appendChild(div)
        }
    })
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(prom => prom.json())
    .then(dat =>{
        let divComents = document.createElement('div')
        divComents.classList.add('divComents')
        for (const datElement in dat) {
            let divCom = document.createElement('div')
            divCom.classList.add('comments')
            divCom.innerText = `Comment - ${dat[datElement].body}`
            divComents.appendChild(divCom)
            document.body.appendChild(divComents)

        }
    })
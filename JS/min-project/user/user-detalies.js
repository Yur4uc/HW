// На странице user-details.html:





// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
let url = new URL(location.href)
let id = url.searchParams.get('id')


fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    .then(data=> data.json())
    .then(info =>{
        let div = document.createElement('div')
        div.classList.add('detalies')
        document.body.appendChild(div)

        function recursion(item){
            for (const itemElement in item) {
                if (typeof item[itemElement] !=='object'){
                    let p = document.createElement('p')
                    p.append(`${itemElement} - ${item[itemElement]}`)
                    div.appendChild(p)
                }else {
                    recursion(item[itemElement])
                }
            }
        }
        recursion(info)
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
        let btnn = document.createElement('div')
        btnn.classList.add('btnn')
        let btn = document.createElement("button")
        btn.classList.add('btnDetalies')
        btn.innerText = 'post of current user'
        btnn.appendChild(btn)
        document.body.appendChild(btnn)

//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
        btn.onclick = function (){
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(resp => resp.json())
                .then(coments =>{
                    let all = document.createElement('div')
                    all.classList.add('all')
                    document.body.appendChild(all)
                    for (const coment of coments) {
                        let div = document.createElement('div')
                        div.classList.add('clases')
                        div.innerText = ` ID-${coment.id}, comment : ${coment.title}`
                        let btnPosts = document.createElement('button')
                        btnPosts.classList.add('btnPosts')
                        btnPosts.innerText = 'click'
                        btnPosts.onclick = function (){
                            location.href = `../post/post-detalies.html?id=${coment.id}`
                        }
                        div.append(btnPosts)
                        all.appendChild(div)
                    }
                })
        }

    })
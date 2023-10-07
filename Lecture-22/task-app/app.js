let inp = document.querySelector('#inp')
let btn = document.querySelector('#btn')
let list = document.querySelector('#list')


btn.addEventListener('click' , function(){
    let taskText = inp.value;

    let li = document.createElement('li');

    li.innerText = taskText;

    list.appendChild(li);

    inp.value = "";

    li.addEventListener('click' , function(){
        li.remove();
    })
})




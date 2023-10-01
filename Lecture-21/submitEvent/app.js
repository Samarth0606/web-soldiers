


let formEl = document.querySelector('form');
// let inp = document.querySelector('input')

formEl.addEventListener('submit' , function(e){
    e.preventDefault();
    console.log(formEl.children[0].value);
})




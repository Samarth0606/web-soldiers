let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('ul');


btn.addEventListener('click' , function(){
    searchedText = input.value;
    input.value = ''
    fetchApi(searchedText);
})

function fetchApi(searchedText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchedText}`)
    .then(function(res){
        // console.log(res.data);
        manipulateDom(res.data);
    })
}
function manipulateDom(datas){
    while(list.firstChild){
        list.firstChild.remove();
    }
    for(let data of datas){
        console.log(data);
        let figure = document.createElement('figure');
        figure.innerHTML = `
            <img src=${data.show.image.medium} alt="" /> 
            <h2> ${data.show.name} </h2>
            <h5> ${data.show.rating.average} </h5>
        `
        list.appendChild(figure)
    }
}

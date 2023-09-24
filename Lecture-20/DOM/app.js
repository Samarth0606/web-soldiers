// get element by ID -> element
// let h1 = document.getElementById('india');

// let k = document.getElementById('krish');
// let r = document.getElementById('radha');


// --------------------

//get element by tagNAME -> htmlcollection == array

// let h1 = document.getElementsByTagName('h1');


// for(let item of h1){
//     item.style.color = 'green'
// }

// h1[0].style.backgroundColor = "yellow"
// h1[1].style.backgroundColor = "pink"
// h1[2].style.backgroundColor = "orange"


// ---------------------

// get element by classname -> array

// let sam = document.getElementsByClassName('sam');

// for(let i of sam){
//     i.style.color = 'lightgreen'
//     i.style.backgroundColor = 'red'
//     i.style.fontSize = '48px'
// }

// for(let i of sam){
//     i.style.cssText = `
//     color:red;
//     background-color:green;
//     font-size:50px;
//     `
// }

// -------------------
// queryselector -> always return 1 single element

// let h1 = document.getElementById('india');
// let h2 = document.getElementsByTagName('h1');
// let sam = document.getElementsByClassName('sam');

// let elem = document.querySelector('#india')
// let elem = document.querySelector('h1')
// let elem = document.querySelector('.sam')

// elem.style.fontSize = '100px';

// -------------------
// queryselectorAll -> always return all the elements

// let elem = document.querySelectorAll('#india')
// let elem = document.querySelectorAll('h1')
// let elem = document.querySelectorAll('.sam')

// for(let i of elem){
//     i.style.color = "red";
// }
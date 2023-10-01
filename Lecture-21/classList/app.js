// let h1 = document.querySelector('h1');

// h1.setAttribute('id' , 'sam');
// h1.setAttribute('class' , 'sam');

// --------- classlist -----------

// 1. add()

let p = document.querySelector('p');

// p.classList.add(yuvi) //wrong
// p.classList.add('yuvi')
// p.classList.add('harshil')
// p.classList.add('sarif')

// alternative way to code

// p.classList.add('yuvi harshil sarif') //single-> never
p.classList.add('yuvi' , 'harshil' , 'sarif') //multiple

// ---------------------
// 2. remove()
// p.classList.remove('harshil sarif') -> no need to use it
// p.classList.remove('sarif' , 'yuvi'); //multiple removing


// --------------------
// 3.toggle() -> not (!) -> //boolean ->single

// p.classList.toggle('sarif' , 'yuvi') 

// --------------------
// 4. contains() -> single
// p.classList.contains('sam'); //boolean


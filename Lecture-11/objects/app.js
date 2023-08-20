

let person1 = {} //empty object


let person = {
    name : "samarth vohra" ,
    age : 28 ,
    favColor : "black" ,
}

// console.log(person)

// console.log(person.name)
// console.log(person.age)
// console.log(person.favColor)

// ---------------------------

// console.log(person[0]) // -> wrong
// console.log(person['name']) // -> wrong
// console.log(person['age']) // -> wrong
// console.log(person['favColor']) // -> wrong

// ----------------------------

person.favColor = "blue";
console.log(person)

person.gender = "male"
console.log(person)

delete person.age
console.log(person)


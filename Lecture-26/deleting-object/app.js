// let obj = {
//     naam : "samarth",
//     age: 29
// }

// // console.log(obj)
// obj.favColor = "red"

// console.log(obj)

// delete obj.naam;

// console.log(obj)

// ---------------------------

// 1. Spread operator
// older way
// let arr1 = [10,20,30]
// let arr2 = [40,50,60,70]

// let ans = arr1.concat(arr2)
// console.log(ans)

// spread -> new way

// let ans = [ ...arr1 ,40,50,60,70]
// let ans = [ ...arr1 , ...arr2]
// console.log(ans)


// -----------------------------


// let obj = {
//     naam : "samarth",
//     age: 29,
//     gender : "male"
// }

// let obj1 = {
//     ...obj,
//     favColor: "red"
// }

// console.log(obj1)


// ----------------------

// destructure -> destructuring -> dono

// let courses = ['cpp' , 'java' , 'web' , 'python' , 'ds']


// let mycourse =  courses[1];
// let mycourse4 =  courses[4];
// console.log(mycourse)
// console.log(mycourse4)

// let [ first , second , third , fourth , fifth] = courses; //5
// let [ first , second , third , fourth] = courses; //5
// let [ first , second , , , fifth] = courses; //5

// console.log(first)
// console.log(second)
// console.log(fifth)



let obj = {
    naam:'samarth',
    age: 29,
    gender : "male"
}
 
// let [] = courses;
// let {first , second , third} = obj;
// let {naam , age, gender} = obj;
// let {naam , gender} = obj;
// console.log(naam)
// console.log(age)
// console.log(gender)


// let {naam:username , age, gender} = obj;
// console.log(naam) // no access
// console.log(username) //new name
// console.log(age)
// console.log(gender)

// --------------------------

let {naam:username="anonymous" , age, gender} = obj;

console.log(username) //new name
console.log(age)
console.log(gender)
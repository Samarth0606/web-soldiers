



// let kuchbhi = {
//     a:10,
//     b:20,
//     c:true,
//     fn: function sam(){
//         console.log("samarth object padha raha hai")
//     }
// }

// let kuchbhi = {
//     a:10,
//     b:20,
//     c:true,
//     fn: function sam(){
//         return("samarth object padha raha hai")
//     }
// }

// let kuchbhi = {
//     a:10,
//     b:20,
//     c:true,
//     fn: function(){
//         return("samarth object padha raha hai")
//     }
// }


// console.log(kuchbhi.b)
// console.log(kuchbhi.c)
// let ans = kuchbhi.fn()
// let ans = kuchbhi.sam() //->wrong
// console.log(ans);


// --------------------------------------

// const person = {
//     age:10,
//     salary:100,
//     harkate:"boht buri",
//     favColor:"pink"
// }
// person  = 100;
// console.log(person)
// person.favColor = "red"
// console.log(person)


// Object.freeze(person)
// person.favColor = "yellow"
// person.salary = 100000
// console.log(person)



// --------------------------


let codingBlocks = {
    dsa : 50 ,
    web : 80 ,
    totalMarks : function(){
        return this.dsa + this.web
    }
}

let ans = codingBlocks.totalMarks();
console.log(ans)




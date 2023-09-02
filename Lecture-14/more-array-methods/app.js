// for-each
// let arr = ['sam' , 'samarth' , 'vohra' , 'cb' , 'js'];

// arr.forEach(function(item , index ){
//     console.log(`${item} is at index: ${index}`)
// })


// map
// let arr = [10,20,30,40,50,60]; //original array

// let newArray =  arr.map(function(item){
//                     return item*item;
//                 })

// console.log(arr)
// console.log(newArray)


// filter
let arr = [10,20,30,40,50,69]; //original array
// let newFilteredArray =  arr.filter(function(item){
//                             // if(item > 70){
//                             if(item > 0){
//                                 return true;
//                             }
//                             return false;
//                         })
let newFilteredArray =  arr.filter(function(item){
                            if(item % 2 == 0){
                                return true
                            }
                            else false
                        })

console.log(arr)
console.log(newFilteredArray)
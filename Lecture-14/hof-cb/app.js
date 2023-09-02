
//case-1
// higher order function -> a
function a(b){
    console.log("inside a")
    b();
}

function b(){
    console.log("inside b")
}
// a()
a(b);
// a(function b(){
//     console.log("inside b")
// })


// ------------------------------------
// case-2
// function a(){
//     console.log('inside a');
//     function b(){
//         console.log("inside b");
//     }
//     return b;
// }
// let returnedAns = a();
// returnedAns();
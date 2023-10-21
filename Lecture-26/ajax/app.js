

// 1. xmlhttp() -> constructor
// let req = new XMLHttpRequest();
// api -> https://api.tvmaze.com/search/shows?q=girls

// req.open('GET' , 'https://api.tvmaze.com/search/shows?q=girls');

// req.send();

// console.log(req)

// req.onload = function(){
//     let ans = this.response;
//     // console.log(typeof(ans)); //string
//     console.log(JSON.parse(this.response))
// }

// req.onerror = function(){
//     console.log(this.response)
// }

// ----------------------------------------------

// 2. fetch() -> 


// fetch('https://api.tvmaze.com/search/shows?q=girls') //get by default
// .then(function(data){
//     return data.json();
// })
// .then(function(res){
//     console.log(res);
// })
// .catch(function(err){
//     console.log(err)
// })

// ---------------------------------


// 3. axios

// axios.get('https://api.tvmaze.com/search/shows?q=girls')
// .then(function(res){
//     // console.log(res)
//     console.log(res.data)
// })
// .catch(function(err){
//     console.log(err)
// })


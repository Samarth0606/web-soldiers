
// html ke webapi -> canvas , svg
// contructor ka eg Promsie , Audio
// let promsie  =  new Promise()



// let promise  =  new Promise(function(resolve , reject){
//     let data = 'billo bagge biyeya da ki kregi';
//     // resolve(data);
//     let error = 'baby beer peeke nachereli chammak chammak cham'
//     reject(error);
// })

// promise
// .then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err)
// })


// -----------------------------------



let step1 = function(){
    console.log('selecting image')
    return new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('image selected');
        resolve('image selected')
    } , 4000)
    })
}
let step2 = function(image){
    console.log(`applying filter to the ${image}`)
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            console.log('filter applied');
            resolve('filtered image');
        } , 2000)
    }) 
}
let step3 = function(filter){
    console.log(`adding caption to the ${filter}`)
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            console.log('caption aded to the image')
            resolve('final image')
        } , 3000)
    })
}

let step4 = function(final){
    console.log(`uploading the ${final}`)
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            console.log('iamge uplaod successfully')
            // resolve('final image')
        } , 3000)
    })
}

step1()
.then(function(image){
    return step2(image)
})
.then(function(filter){
    return step3(filter)
})
.then(function(final){
    step4(final)
})
.catch(function(err){
    console.log('code fatt gya error agya')
})












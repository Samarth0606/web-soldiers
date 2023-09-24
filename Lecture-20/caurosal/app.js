
let arr = [
    'https://images.unsplash.com/photo-1695295445774-e669670aca78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1682687219570-4c596363fd96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://plus.unsplash.com/premium_photo-1677260349772-1906c6725877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1694871946326-244c61ab7f0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
]
let num = 0;

let imgg = document.querySelector('img');

let id = setInterval(()=>{
    imgg.setAttribute('src' , arr[num]);
    num = (num+1) % arr.length;
} , 2000)


setTimeout(()=>{
    clearInterval(id);
    imgg.setAttribute('src' , "");
} , 10000)





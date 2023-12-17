const mongoose = require('mongoose');
const Product = require('./models/Product');


let products = [
    {
        name:'Golgappe' , 
        img: 'https://media.istockphoto.com/id/1443945914/photo/pani-puri-or-gol-gappay-with-raita-sweet-sauce-and-spicy-water-served-in-dish-isolated-on.jpg?s=612x612&w=is&k=20&c=fE2AbAk2A7yDYVnmSWjgPcP_M0pl1foo8Tmrpn8KDPI=',
        price: 30 , 
        instock : true ,
        desc: "khao peyo aaish karo mitro"
    },
    {
        name:'Raj-kachori' , 
        img: 'https://media.istockphoto.com/id/1821735182/photo/raj-kachori-or-rajashtani-raj-kachori-chaat.jpg?s=612x612&w=is&k=20&c=FcO-W9pUIQu4I2uO8gTsL-7ExMJfreD_K2MM4eFBVJc=',
        price: 150 , 
        instock : true ,
        desc: "bada golagappa hu mai"
    },
    {
        name:'Dahi-bhalle' , 
        img: 'https://images.unsplash.com/photo-1680764955303-81618ecb67b5?q=80&w=1201&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 80 , 
        instock : false ,
        desc: "mai hu dahi , khaalo mujhe friends"
    },
    {
        name:'Momos' , 
        img: 'https://media.istockphoto.com/id/1292635321/photo/veg-steam-momo-nepalese-traditional-dish-momo-stuffed-with-vegetables-and-then-cooked-and.jpg?s=612x612&w=is&k=20&c=XArqhFUyWnTRDKNn9goydqAIG7mGcgBX43v_37WJP5M=',
        price: 100 , 
        instock : true ,
        desc: "5 ke veg 5 ke non veg , chitte vaali chutney"
    }
]


async function seedDB(){
    await Product.insertMany(products);
    console.log("DB seeded successfully");
}

module.exports = seedDB;
let fs = require('fs');

let data = "hi chai aagyi , chai peelo frndzz";

// fs.writeFile('abc.txt' , data , 
//     {
//         encoding: 'utf-8',
//         flag: 'w'
//     } , 
//     (err)=>{
//         if(err){throw err}
//         console.log("file written successfully")
//     } 
// )

//without optional part

// fs.writeFile('def.txt' , data , 
 
//     (err)=>{
//         if(err){throw err}
//         console.log("file written successfully")
//     } 
// )

// --------------------------------
// read

// fs.readFile('def.txt' , 
//     (err , data)=>{
//         if(err){ throw err}
//         console.log(data);
//     }
// )

// -----
// fs.readFile('def.txt' , 
//     {
//         encoding:'utf-8',
//         flag:'r'
//     },
//     (err , data)=>{
//         if(err){ throw err}
//         console.log(data);
//     }
// )


// ------

// fs.readFile('def.txt' , 

//     (err , data)=>{
//         if(err){ throw err}
//         console.log(data.toString());
//     }
// )

// ------------

// update()

// fs.appendFile('abc.txt' , 
//     "pehle din , fir dilruba , aur dil ke mehmaan bangye" , 
//     (err)=>{
//         if(err){ throw err}
//         console.log("file updated sucessfully");  
//     }
// )

// delete

// fs.unlink('abc.txt' , (err)=>{
//     if(err){ throw err}
//     console.log("file deleted sucessfully"); 
// })

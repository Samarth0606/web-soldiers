

// function user(){

// }

// const user1 = user(); //by default undef is returned

// console.log(user1);


// -------------------------

// constructor function -> create objects
// function user(){

// }

// const user1 = new user(); //returns an emoty objct

// console.log(user1);

// ----------------------------

// constructor function -> creates object
// function user(){
//     this.username = "samarth";
//     this.email = "sam@gmail.com";
// }
// in case of constructor functions this always points 
// to the newly created object

// const user1 = new user();
// console.log(user1);

// const user2 = new user();
// console.log(user2);

// -----------------------------

// constructor function -> creates object
// function user(userrr , mail){
//     this.username = userrr; //property
//     this.email = mail; //property
// }


// const user1 = new user('sam', 'sam@gmail.com');
// console.log(user1);

// const user2 = new user('badmaash' , "badmash@gmail.com");
// console.log(user2);



// ----------------------------------
//cf -> first letter should be capital (not compulasary but convention)
// function User(userrr , mail){
//     this.username = userrr; //property
//     this.email = mail; //property
//     this.desc = function(){ //method
//         return `my name is ${this.username}, hello ji`
//     }
// }


// const user1 = new User('sam', 'sam@gmail.com');
// console.log(user1);

// const user2 = new User('badmaash' , "badmash@gmail.com");
// console.log(user2);
// console.log(user1.desc());
// console.log(user2.desc());

// ----------------------------------

function User(userrr , mail){
    this.username = userrr; //property
    this.email = mail; //property
    // this.desc = function(){ //method
    //     return `my name is ${this.username}, hello ji`
    // }
}

User.prototype.desc = function(){ //method
    return `my name is ${this.username}, hello ji`
}


const user1 = new User('sam', 'sam@gmail.com');
console.log(user1);

const user2 = new User('badmaash' , "badmash@gmail.com");
console.log(user2);
// console.log(user1.desc());
// console.log(user2.desc());




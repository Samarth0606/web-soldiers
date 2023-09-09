// constructor function
// function Person(firstName , lastName , email){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email =  email;
// }

// Person.prototype.printDet = function(){
//     console.log(`my name is ${this.firstName} ${this.lastName} `)
// }

// Person.prototype.getDet = function(){
//     return (`${this.firstName} ${this.lastName} is returned `)
// }

// const person1 = new Person('priyanshu' , 'choubey' , 'pri@gmail.com')
// const person2 = new Person('rahul' , 'prajapati' , 'rah@gmail.com')

// ---------------------------------------

// class syntax
// class Person{
//     constructor(firstName , lastName , email){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email =  email;
//     }
//     printDet(){
//         console.log(`my name is ${this.firstName} ${this.lastName} `)
//     }
//     getDet(){
//         return (`${this.firstName} ${this.lastName} is returned `)
//     }
// }

// wrong way
// class Student{
//     constructor(firstName , lastName , email){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email =  email;
//     }
//     printDet(){
//         console.log(`my name is ${this.firstName} ${this.lastName} `)
//     }
//     getDet(){
//         return (`${this.firstName} ${this.lastName} is returned `)
//     }
// }

// const person1 = new Person('sam' , 'mav' , 'sam@gmail.com')
// const person2 = new Person('samarth' , 'maverick' , 'mav@gmail.com')
// const person3 = new Student('vohra' , 'ok' , 'ok@gmail.com')


// ------------INHERITANCE--------------------------

// class Person{
//     constructor(firstName , lastName , email){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email =  email;
//     }
//     printDet(){
//         console.log(`my name is ${this.firstName} ${this.lastName} `)
//     }
//     getDet(){
//         return (`${this.firstName} ${this.lastName} is returned `)
//     }
// }

// class Student extends Person{

// }


// const person3 = new Student('vohra' , 'ok' , 'ok@gmail.com')


// -------------------------------------------


class Person{
    constructor(firstName , lastName , email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email =  email;
    }
    printDet(){
        console.log(`my name is ${this.firstName} ${this.lastName} `)
    }
    getDet(){
        return (`${this.firstName} ${this.lastName} is returned `)
    }
}

class Student extends Person{
    constructor(firstName , lastName , email , rollNo){
        super(firstName , lastName);
        this.email = email;
        this.rollNo = rollNo;
    }
    printDet(){
        console.log(`mera naam hai ${this.firstName} ${this.lastName} `)
    }
    newFunction(){
        console.log("new funciton ki taraf se hello")
    }
}

const person3 = new Student('vohra' , 'ok' , 'hello@gmail.com' , 13)


const person4 = new Person('malhotra' , 'harshil' , 'gym@gmail.com')






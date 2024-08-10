// Object literal
// Function constructor 
// Es6 class
// Object.create()

//Program1
let person = {
    fname : "ruchika",
    lname : "Kumbhare",
    age : 22,
    city:"Nagpur",
    display_Name:function(){
    console.log(this.fname + this.lname)
    }
}
console.log(person.fname)
person.display_Name()

class person1{
    constructor(fn,ln,ag,ct){
        this.fname = fn
        this.lname=ln
        this.age=ag
        this.city=ct
          this.display_Name=function(){
            console.log(this.fname + this.lname)
          }
    }
}
let ruchi = new person1("ankika","pratap",25,"pune")
console.log(ruchi.fname)
ruchi.display_Name()

 // Every object has one _proto_ === Parent.prototype
 console.log(ruchi._proto_ ==person1.prototype)
 person1.prototype.displayName = function(){
        console.log(this.firstName + this.lastName)
}
person1.prototype.country = "India"
ruchi.displayName()
console.log(ruchi.hasOwnProperty("country"))

// array

let fruits = ["mango","grapes","apple","lichi"]
fruits.forEach(function(el){
    console.log(el)
})
Array.prototype.fresh = function(){
    console.log("hello")
}
fruits.fresh()

 // Es6 class 
class stud {
    constructor(fn,ln){
        this.fname =fn
        this.lname = ln
        this.displayName=function(){
            console.log(this.fname + this.lname)
        }
    }
    displayName(){
        console.log(this.fname + this.lname)
    }
}

stud.prototype.displayName = function(){
    console.log(this.fname + this.lname)
}
let my = new stud("preeti","verma")
my.displayName()


// Program 4
let obje = {
    init:function(fn,ln){
        this.fname = fn
        this.lname = ln
    },
    displayName:function(){
        console.log(this.fname + this.lname)
    }
}

let li = Object.create(obje)
console.log(li)
li.init("real","verma")
li.displayName()

// let obj = {
//     init:function(fn,ln,ag){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.age = ag
//     },
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol5 = Object.create(obj)
// console.log(amol5)
// amol5.init("amol5","rao5",34)
// amol5.displayName()
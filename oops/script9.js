//.....................................function contructor
// Prototype inheritance
class nam {
     constructor(fn,ln,ag,ct,no){
        this.fname = fn
        this.lname = ln
        this.age =ag
        this.city=ct
        this.number =no
        // this.displayN=function(){
        //     console.log(this.fname + this.lname)
        // }
     }
    }

let sd = new nam('ruchika','kumbhare',22,'nagpur',987)
let cd = new nam('riya','parate',25,'pune',1234)
console.log(cd)

// Every object has obj.__proto__ === Parent.prototype
console.log(cd.__proto__ === nam.prototype)  //true
console.log(sd.__proto__ === nam.prototype )//true

nam.prototype.display = function(){
    console.log(this.fname + this.lname)
}

nam.prototype.country = "India"
console.log(nam.prototype.country)
sd.display()
cd.display()

// PersonD.prototype.displayName = function(){
//     console.log(this.firstName + this.lastName)
// }
// PersonD.prototype.country = "India"
// amolP.displayName()
// raviP.displayName()
// console.log(amolP.country)










// // // Prototype inheritance
// // function PersonD(fn,ln,ag){
// //     this.firstName = fn 
// //     this.lastName = ln 
// //     this.age = ag
// //     // this.displayName = function(){
// //     //     console.log(this.firstName + this.lastName)
// //     // }
// // }
// // let amolP = new PersonD("amol","raop",34)
// // let raviP = new PersonD("ravip","raoP",45)
// // console.log(amolP)
// // console.log(raviP)

// // // Every object has obj.__proto__ === Parent.prototype
// // console.log(amolP.__proto__ === PersonD.prototype)
// // console.log(raviP.__proto__ === PersonD.prototype)


// // PersonD.prototype.displayName = function(){
// //     console.log(this.firstName + this.lastName)
// // }
// // PersonD.prototype.country = "India"
// // amolP.displayName()
// // raviP.displayName()
// // console.log(amolP.country)











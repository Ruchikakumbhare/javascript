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


//.............................................................object literal
 //program1
let ruchi = {
    fname : "ruchika",
    lname : "kumbhare",
    age :22,
    display:function(){
        console.log(this.fname + this.lname)
    }
}
console.log(ruchi.fname)
console.log(ruchi.lname)
console.log(ruchi.age)

//program2

let ruchi1 = {
    fname : 'riya',
    lname : 'chauhan',
    display:function(){
        console.log(this.fname + this.lname)
    }
}
console.log(ruchi1)
console.log(ruchi.fname)
ruchi1.city = "pune"
console.log(ruchi1.city)

//...................................................... function constructor 
//program1
class person {
    constructor(fn,ln,ag){
        this.fname = fn
        this.lname = ln
        this.age = ag
        this.displayN = function(){
            console.log(this.fname + this.lname)
        }
    }
}

let a = new person('ruhi','paunikar',22)
console.log(a)
a.displayN()           //ruhipaunikar

//program2

class person1 {
    constructor(fn,ln,ct){
    this.fname = fn
    this.lname =ln
    this.city =ct
    this.displayName=function(){
        console.log(this.fname + this.lname)
    }
    }
}

let no = new person1("daksh" , 'meshram','banglore')
console.log(no.fname)
console.log(no.lname)
console.log(no.city)
no.displayName()
no.num = 1234
console.log(no.num)
console.log(no)


//...........................................................Es6 class 

class person2 {
    constructor(fn,ln,ag){
        this.fname = fn
        this.lname = ln
        this.age = ag
    }
    display(){
        console.log(this.fname + this.lname)
    }
}
let rk = new person2("payal", "harode",21 )
console.log(rk)
console.log(rk.fname)
rk.display()


//........................................................... object.create method

let ruhi = Object.create({})
console.log(ruhi) //{}

ruhi.fname = "ruhi"
ruhi.lname = "Verma"
console.log(ruhi) //{ fname: 'ruhi', lname: 'Verma' }


ruhi.display = function(){
    console.log(this.fname + this.lname)
}
console.log(ruhi)
ruhi.display()


    
    
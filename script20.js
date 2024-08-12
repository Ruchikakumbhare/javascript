

//..............................Program1
// class girl  { 
//       fname = undefined
//       lname = undefined
//       age = undefined
//       city = undefined

// displayName(){
//     console.log(this.fname + this.lname)
// }
// }

// let n1 = new girl ()
// console.log(n1)
// console.log(n1.fname)

// n1.fname = "Mahi"
// n1.lname = "Ahuja"
// n1.age = 25
// n1.city = "pune"

// console.log(n1.fname)
// console.log(n1.lname)
// console.log(n1.age)
// console.log(n1.city)


//.........................Program1.2 practice
// class boy {
//     fname = undefined
//     lname =undefined
//     age =undefined
//     no = undefined

//     displayN(){
//         console.log(this.fname + this.lname)
//     }
// }

// let b = new boy()
// console.log(b.fname)

// b.fname = "rahul"
// b.lname = "Sharma"
// b.age = 20
// b.no =123

// console.log(b.fname)
// console.log(b.lname)
// console.log(b.age)
// console.log(b.no)

//...........................Program 1.3 practice
class human {
    fname = undefined
    lname =undefined
    age =undefined

    displayName(){
        console.log(this.fname + this.lname)
    }
}
console.log(human)

let per = new human()
console.log(per)

per.fname = "swastika"
per.lname = "sharma"
per.age = 25
console.log(per)



// .......................................program 2    (using constructor)

class person {
    constructor(fn,ln,ag){
       this.fname = fn
       this.lname = ln
       this.age = ag
    }

    displayName(){
        console.log(this.fname + this.lname)
    }
}

let so = new person("ruchi","kumbhare",22)
console.log(so)


// .......................................program 2.1

class person1 {
    constructor(no,ct,add){
        this.number = no
        this.city = ct
        this.address = add
    }

    displayName(){
        console.log(this.fname + this.lname)
    }
}

let a = new person1(124,"pune","shivaji nagar")
console.log(a)
console.log(a.city)
console.log(a.number)
console.log(a.address)


// .......................................program 3

class person2 {
    setfname(fn){
        this.Fname =fn
    }
    setlname(ln){
       this.Lname = ln
    }
}

let b = new person2()
b.setfname("ruchika")
b.setlname("kumbhare")
console.log(b)         //person2 { Fname: 'ruchika', Lname: 'kumbhare' }


// .........................................program 3.1


class human1 {
    setfname(fn){
        this.firstN = fn
    }
    setlname(ln){
        this.lastN = ln
    }
    setcity(ct){
        this.CityN = ct
    }
}

let c =new human1()
console.log(c)  //human1 {}

c.setfname('Rohit')
c.setlname('kumbhare')
c.setcity('mumbai')

console.log(c)      //human1 { firstN: 'Rohit', lastN: 'kumbhare', CityN: 'mumbai' }

console.log(c.CityN)  //mumbai


// .......................................program 4

//set and get keyword
//set as a property

class person3 {
    set fname(fn){
        this.Fname = fn
    }

    get fname(){
        return this.Fname
    }
}
let d =new person3()
console.log(d)

d.fname = 'ruchi'
console.log(d)      // person3 { Fname: 'ruchi' }

// b.setfname = 'ruchi'
// console.log(b) //person2 { Fname: 'ruchika', Lname: 'kumbhare', setfname: 'ruchi' } aaded


// set and get keyword
// set as a property 

// class PersonD {
//     set Fname(fn){
//         this.firstName = fn
//     }
//     get Fname(){
//         return this.firstName
//     }
//     set Lname(ln){
//         this.lastName = ln
//     }
//     get Lname(){
//         return this.lastName
//     }
// }

// let poorvaB = new PersonD()

// poorvaB.Fname = "poorva"
// poorvaB.Lname = "vyas"

// console.log(poorvaB.Fname)
// console.log(poorvaB.Lname)
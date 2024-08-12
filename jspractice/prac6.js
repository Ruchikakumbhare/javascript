// //object literal
// let student = {
//     fname:"Shiwika",
//     lname:"Tomar",
//     age:27,
//     city:"Nagpur",
//     display_name(){
//         console.log(this.fname + this.lname)
//     }

// }
// console.log(student)
// console.log(student.age)
// student.age = 30
// console.log(student)
// student.display_name()


//function constructor

class contract{
    constructor(empI,empN,empC){
        this.employeid=empI
        this.employeName = empN
        this.employecon = empC
        this.display_name=function(){
            console.log(this.employeName + this.employecon)
        }
    }
}
let emp = new contract(10,"akash",123)
console.log(emp.employeName)
console.log(emp.employecon)
emp.display_name()
console.log(contract)


//Es6
class person{
    constructor(fn,ln,ag){
        this.fname = fn
        this.lname =ln
        this.age =ag
        
    }
    display_name(){
        console.log(this.fname + this.lname)
    }
}

let na = new person('sonu','parate',12)
console.log(na)
console.log(na.fname)

// ///program1 :
// class person{
//     constructor(fn,ln,ag){
//         this.fname = fn
//         this.lname =ln
//         this.age =ag
//     }
// }
// let my = new person('ruchi','kumbhare',22)
// console.log(my.fname)
// console.log(my._proto_ == person.prototype)
// person.prototype.display_name=function(){
//     console.log(this.fname + this.lname)
// }
// person.prototype.city = 'mumbai'
// my.display_name()
// console.log(my.hasOwnProperty('city'))


//program2
// class teacher{
//     constructor(fn,ln){
//         this.fname = fn
//         this.lname = ln
//     }
//     display_name(){
//         console.log(this.fname + this.lname)
//     }
// }

// let nam = new teacher('anamika','sharma')
// console.log(nam._proto_ == teacher.prototype)
// teacher.prototype.display_name=function(){
//     console.log(this.fname + this.lname)
// }
// nam.display_name()

//program3

class student{
    constructor(fn,ln,ag){
        this.fname = fn
        this.lname = ln
        this.age = ag
        this.display_name = function(){
            console.log(this.fname + this.lname)
        }
    }
}

let stu = new student('Neha','Tarale',23)
console.log(stu.fname)

student.prototype.display_name = function(){
    console.log(this.fname + this.lname)
}
console.log(stu._proto_ ==student.prototype)
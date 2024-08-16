// // Es6 class 
// Inheritance
//.....PROGRAM1
class Student{
    constructor(fn,ln,ag){
        this.fname = fn
        this.lname = ln
        this.age = ag
    }

    display_name(){
        console.log(this.fname + this.lname)
    }
}
class Teacher extends Student{
    salary = 15000
    display_Salary(){
        console.log(this.salary)
    }
}

let x1 = new Teacher('meenakshi','wakad',20)
console.log(x1)
console.log(x1.fname)
console.log(x1.lname)
console.log(x1.age)
console.log(x1.salary)
x1.display_Salary()
x1.display_name()

//.......EX2

// class employee {
//     constructor(fn,ln){
//         this.fname =  fn
//         this.lname = ln
//     }
//     display_name(){
//         console.log(this.fname +  this.lname)
//     }
// }
// class boss extends employee{
//     sal = 1000000
//     displaysal(){
//         console.log(this.sal)
//     }
// }
// let my = new boss('priyanka','dewan')
// console.log(my.sal)
// my.displaysal()


// program 2
class student1{
    constructor(fn , ln ){
        this.fname = fn
        this.lname = ln
    }
    display_name(){
        console.log(this.fname + this.lname)
    }
}

class Teacher1 extends student1{
      constructor(fn,ln,age,sal){
        super(fn,ln)
        this.age=age 
        this.sal =sal
      }
}

let n1 = new Teacher1('riya','parate',20,10000)
console.log(n1)     //Teacher { fname: 'riya', lname: 'parate', age: 20, sal: 10000 }


//Program1  : single inheritance with child constructor

class Student {
    constructor(fn,ln){
        this.fname = fn
        this.lname = ln
    }
    display_name(){
        console.log(this.fname + this.lname)
    }
}
class Teacher extends Student{
    constructor(fn,ln,sal){
        super(fn,ln)
        this.salary = sal
    }
    displaysal(){
        console.log(this.salary)
    }
}
let a1 = new Teacher('Ruchika','Kumbhare',2000)
console.log(a1.salary)
a1.displaysal()

//Program2 - multi-level Inheritence

class GrandFather{
    constructor(gfn,ln){
        this.gfname = gfn
        this.lname = ln
    }
    display(){
        console.log(this.gfname + this.lname)
    }
}

class Father extends GrandFather{
    constructor(gfn,ln,fn){
        super(gfn,ln)
        this.fname=fn
    }
    display_f(){
        console.log(this.fname + this.lname)
    }
}

class son extends Father{
    constructor(gfn,ln,fn,sn){
        super(gfn,ln,fn)
        this.sname = sn
    }
    display_s(){
        console.log(this.sname + this.lname)
    }
}
let a2 = new son('laxman','ambani','ratan','ananat')
console.log(a2.gfname)
console.log(a2.lname)
console.log(a2.fname)
console.log(a2.sname)
a2.display()
a2.display_f()
a2.display_s()

// program 3: Hirarchical inheritence

class mother {
    constructor(mfn,ln){
        this.fname = mfn
        this.lname = ln
    }
    display_n(){
        console.log(this.fname + this.lname)
    }
}
class son1 extends mother{
    constructor(mfn,ln,sn1){
        super(mfn,ln)
        this.sname1 = sn1
    }
    display_s1(){
        console.log(this.sname1 + this.lname)
    }
}
class son2 extends mother{
    constructor(mfn,ln,sn2){
        super(mfn,ln)
        this.sname2 = sn2
    }
  
}

let a3 = new son1('meena','Singh','Rachit')
let a4 = new son2('meena','singh','riyaan')
console.log(a3.fname)
console.log(a3.lname)
console.log(a3.sname1)
console.log(a4.fname)
console.log(a4.lname)
console.log(a4.sname2)

a3.display_n()
a3.display_s1()



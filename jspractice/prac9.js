//single inheritance
class student {
    constructor(fn,ln){
        this.fname = fn
        this.lname = ln
    }
    display_n(){
        console.log(this.fname + this.lname)
    }
}

class Teacher extends student{
    constructor(fn,ln,sal){
        super(fn,ln)
        this.salary = sal
    }
    display_s(){
        console.log(this.salary)
    }
}
let me = new Teacher('Nikki','Tamboli',60000)
console.log(me.salary)
console.log(me.fname)
me.display_s()

//multilevel inheritance
class grandmother {
    constructor(mfn,ln){
        this.mfname = mfn
        this.lname = ln
    }
    display(){
        console.log(this.mfname + this.lname)
    }
}
class mother extends grandmother{
    constructor(mfn,ln,mn){
        super(mfn,ln)
        this.mothern = mn
    }
    display_m(){
        console.log(this.mothern)
    }
}
class daughter extends mother{
    constructor(mfn,ln,mn,dn){
        super(mfn,ln,mn)
        this.dname = dn
    }
}

let x = new daughter('sarsvati','pimpre','reena','ridhi')

x.display()
x.display_m()


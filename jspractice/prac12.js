//.....practice 1 :-->single inheritance

class mother {
    constructor(fn,ln,ag){
        this.fname = fn
        this.lname = ln
        this.age = ag
    }
    display(){
        console.log(this.fname + this.lname)
    }
}
class father extends mother {
    constructor(fn,ln,ag,fnn){
        super(fn,ln,ag)
        this.fnname= fnn
    }
    display_N(){
        console.log(this.fnname)
    }
}
let a1 = new father('mamta','dimri',22,'vinay')
console.log(a1.fname)
console.log(a1.lname)
console.log(a1.age)
console.log(a1.fnname)
a1.display()
a1.display_N()

//...........practice2 ----------multilevel inheritance

class Gfather1{
    constructor(fn,ln){
        this.fname = fn
        this.lname = ln
    }
    display_N1(){
        console.log(this.fname + this.lname)
    }
}
class Gmother extends Gfather1{
    constructor(fn,ln,fm){
        super(fn,ln)
        this.gname = fm
    }
    display_N2(){
        console.log(this.gname + this.lname)
    }
}
class son extends Gmother{
    constructor(fn,ln,fm,sn){
        super(fn,ln,fm)
        this.sname = sn
    }
    display_N3(){
        console.log(this.sname + this.lname)
    }
}
let a2 = new son('vinit','mishra','rinna','sumit')
console.log(a2.fname)
console.log(a2.lname)
console.log(a2.gname)
console.log(a2.sname)
a2.display_N1()
a2.display_N2()
a2.display_N3()



//...........practice3 ----------hierachical inheritance

class mother1{
    constructor(fn,ln){
        this.fname = fn
        this.lname = ln
    }
    display_m(){
        console.log(this.fname  + this.lname)
    }
}
class son1 extends mother1{
    constructor(fn,ln,sn1){
        super(fn,ln)
        this.snname = sn1
    }
    display_s(){
        console.log(this.snname)
    }
}
class daughter extends mother1{
    constructor(fn,ln,dn){
        super(fn,ln)
        this.dname = dn
    }
}
let x1 = new son1('manisha','Sharma','punit')
let x2 = new daughter('manisha','sharma','sidhi')
x1.display_m()
x1.display_s()

//practice ---->>> single inheritance -->one parane one child

class parent{
    constructor(fn,ln){
        this.fname = fn
        this.lname = ln 
    }
    display(){
        console.log(this.fname + this.lname)
    }
}
class child extends parent{
    constructor(fn,ln,cfn){
        super(fn,ln)
        this.cname=cfn
    }
    display_1(){
        console.log(this.cname)
    }
}
let x1 = new child('satyam','pahune','om')
console.log(x1.fname)
console.log(x1.lname)
console.log(x1.cname)
x1.display_1()
x1.display()

//---------------------------------------------------------------------------
// multilavel inher

class grandfather{
    constructor(gfn,gln){
        this.gfname = gfn
        this.glname = gln
    }
    display_f(){
        console.log(this.gfname + this.glname)
    }
}
class father extends grandfather{
    constructor(gfn,gln,fn){
        super(gfn,gln)
        this.fname = fn
    }
    display_f1(){
        console.log(this.fname)
    }
}
class son extends father{
    constructor(gfn,gln,fn,sn){
        super(gfn,gln,fn)
        this.sname=sn
    }
    display_f2(){
        console.log(this.sname)
    }
}
let x2 = new son('chintaman','pawar','chinmay','chaitanya')
x2.display_f()
x2.display_f1()
x2.display_f2()

//--------------------------------------------------------------------------------------
// hierarchical inher
class mother{
    constructor(mfn,mln){
        this.mname = mfn
        this.mlname = mln
    }
    display_m(){
        console.log(this.mlname + this.mlname)
    }
}
class daughter extends mother{
    constructor(mfn,mln,dn){
        super(mfn,mln)
        this.dname =dn
    }
    display_m1(){
        console.log(this.dname + this.mlname)
    }
}
class son1 extends mother{
    constructor(mfn,mln,snn){
        super(mfn,mln)
        this.snamee = snn
    }
    display_m2(){
        console.log(this.snamee)
    }
}
let aa = new daughter('aruna','sharma','piya')
let bb =new son1('aruna','sharma','parag')
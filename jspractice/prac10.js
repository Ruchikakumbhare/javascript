// //single inheritance
// class manager {
//     constructor(mfn,mln,mid){
//         this.mname = mfn
//         this.mlname = mln
//         this.midd =mid
//     }
//     display(){
//         console.log(this.midd)
//     }
// }
// class emp extends manager{
//     constructor(mfn,mln,mid,en,ei){
//         super(mfn,mln,mid)
//         this.ename =  en
//         this.eid = ei
//     }
//     display_n(){
//         console.log(this.eid)
//     }
// }
// let stish = new emp('Satish','Tiwari',112,'mohan',786)
// console.log(stish.mname)
// console.log(stish.mlname)
// console.log(stish.midd)
// console.log(stish.ename)
// console.log(stish.eid)
// stish.display()
// stish.display_n()

// //multi-level inheritance

// class grandpa {
//     constructor(gfn,ln){
//         this.gfname = gfn
//         this.lname = ln
//     }
//     display_n(){
//         console.log(this.gfname + this.lname)
//     }
// }
// class paa extends grandpa {
//     constructor(gfn,ln,pn){
//         super(gfn,ln)
//         this.pname = pn
//     }
//     display_n1(){
//         console.log(this.pname + this.lname)
//     }
// }
// class son extends paa{
//     constructor(gfn,ln,pn,sn){
//         super(gfn,ln,pn)
//         this.sname = sn
//     }
//     display_n2(){
//         console.log(this.sname + this.lname)
//     }
// }
// let x= new son('omkar','Kumbhare','sanjay','rohit')
// console.log(x.gfname)
// console.log(x.lname)
// console.log(x.pname)
// console.log(x.sname)
// x.display_n()
// x.display_n1()
// x.display_n2()


// //hierarchical inheritance

// class grandma{
//     constructor(mn,mln){
//         this.mname = mn
//         this.mlname = mln
//     }
// }
// class son1 extends grandma{
//     constructor(mn,mln,sn){
//         super(mn,mln)
//         this.sname = sn
//     }
// }
// class daughter extends grandma{
//     constructor(mn,mln,dn){
//         super(mn,mln)
//         this.dname = dn
//     }
// }
// let a1=new son1('Renuka','kumbhare','Sanjay')
// let a2 = new daughter('Renuka','Kumbhare','Geeta')
// console.log(a1.sname)
// console.log(a2.dname)

//-----------------------------------------------------------------------------------------------------------------------
//single inher
class uncle{
    constructor(ufn,uln){
        this.uname = ufn
        this.ulast= uln
    }
    display(){
        console.log(this.uname + this.ulast)
    }
}
class anty extends uncle{
    constructor(ufn,uln,af){
        super(ufn,uln)
        this.afname = af
    }
    display_1(){
        console.log(this.afname + this.ulast)
    }
}

let a = new anty('manoj','Tiwari','rakhi')
a.display()
a.display_1()
console.log(a.afname)
console.log(a.uname)
console.log(a.ulast)


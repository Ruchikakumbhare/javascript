
// Es6
//..............PROGRAM1

class person {
 firstname = undefined
 lastname = undefined
 age = undefined
 city = undefined
 display_name(){
    console.log(this.firstname1 + this.lastname)
}
}
let a = new person()
console.log(a.firstname)

a.firstname = 'akash'
a.lastname = 'patel'
a.age = 25
a.city = 'NAgpur'
console.log(a.firstname)
console.log(a.lastname)
console.log(a.age)
console.log(a.city)

//.....................................................................................................................
//constructor
//..................PROGRAM2
class person1{
    constructor(fn,ln,ag,no){
        this.fname = fn
        this.lname = ln
        this.age = ag
        this.number = no
    }
    display_name(){
        console.log(this.fname + this.lname)
    }
}

let b = new person1('RUCHIKA','SHARMA',22,1234)
console.log(b.fname)
console.log(b.lname)
console.log(b.age)
console.log(b.number)
b.display_name()

//.....................................................................................................
// Es6 class with set method
//........................PROHRAM3
class person2 {
    setFname(fn){
        this.fname = fn
    }
    setLname(ln){
        this.lname = ln
    }
}
let c = new person2()
c.setFname('ruchi')
c.setLname('kumbhare')
console.log(c)

//..........................................................................................................
// Es6 class with set and get keyword 
//.......................PROHRAM4
class person3{
    set Fname(fn){
       this.fname =fn
    }
    set Lname(ln){
        this.lname =ln
     }

    get Fname(){
        return this.fname
    }
    get Lname(){
        return this.lname
    }
}
let d = new person3()
d.fname = 'ruchika'
console.log(d)

//............................................................................................................
// Es6 class Bank example only deposit
//........................PROHRAM5
class Bank{
    constructor(fn,accNo,bal){
        this.fullname=fn
        this.accountNo=accNo
        this.balance=bal
        this.trans=[]
    }
     deposit(amt){
             this.balance = this.balance + amt   
             this.trans.push(amt)
             return this.balance
     }
     
}
let ab = new Bank('Ruchi Kumbhare',987,5000)
ab.deposit(2000)
console.log(ab)
ab.deposit(5000)
console.log(ab)
//output:
// Bank {
//     fullname: 'Ruchi Kumbhare',
//     accountNo: 987,
//     balance: 12000,
//     trans: [ 2000, 5000 ]
//   }
//.................................................................................................................

// Es6 class Bank example
//........................PROHRAM6
class bank {
    constructor(nm , accno,bal){
        this.name = nm
        this.accountno = accno
        this.balance = bal
        this.trans = []
    }
     deposit(amt){
        this.balance = this.balance + amt
        this.trans.push(amt)
        return this.balance
     }
     withdrawl(amt){
       if(amt<this.balance){
        this.balance = this.balance - amt
        this.trans.push(-amt)
        return this.balance
       }
       else{
        console.log('insufficient amount: ' + this.balance)
       }
     }

}
let per = new bank('Neha Tarale',2323,8000)
console.log(per)
per.deposit(500)
console.log(per)

per.withdrawl(200)
console.log(per)
per.withdrawl(300)
console.log(per)

//Output:
// bank {
//     name: 'Neha Tarale',
//     accountno: 2323,
//     balance: 8000,
//     trans: [ 500, -200, -300 ]
//   }
//.............................................................................................................


class Bank1{
    constructor(fn,ln,accno,bal){
        this.fname = fn
        this.lname = ln
        this.accountno = accno
        this.balance = bal
        this.transaction = []
    }
    deposit(amt){
        this.balance = this.balance + amt
        this.transaction.push(amt)
        return this.balance
    }
    withdrawl(amt){
        if(amt<this.balance){
            this.balance = this.balance - amt
            this.transaction.push(-amt)
            return this.balance
        }
        else{
            console.log('INSUFFICIENT BALANCE:' + this.balance)
        }
    }
    lastfivetrans(){
        return this.transaction.slice(-5)
    }

}
let x = new Bank1('Parag','Bokde',345,1000)
console.log(x)
x.deposit(1000)
console.log(x)
x.withdrawl(500)
console.log(x)
x.withdrawl(20)
x.withdrawl(50)
x.withdrawl(100)
x.withdrawl(200)
console.log(x)
console.log(x.lastfivetrans())



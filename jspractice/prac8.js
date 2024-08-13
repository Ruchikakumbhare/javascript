// Es6 class Bank example only deposit
//........................PROHRAM1...................................

class SBank {
    constructor(fn,acc,bal){
        this.fname = fn
        this.account = acc
        this.balance = bal
        this.transaction = []
    }

    deposit(ammt){
            this.balance = this.balance+ammt
            this.transaction.push(ammt)
            return this.balance
    }
    withdrwal(amt){
        if(amt<this.balance){
            this.balance = this.balance - amt
            this.transaction.push(-amt)
            return this.balance
        }
    }
}
let stu = new SBank('alka',1234,100000)
stu.deposit(100)
console.log(stu)
stu.withdrwal(50)
console.log(stu)
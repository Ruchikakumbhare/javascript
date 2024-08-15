// Es6 class Bank example only deposit
//........................PROHRAM1...................................

// class SBank {
//     constructor(fn,acc,bal){
//         this.fname = fn
//         this.account = acc
//         this.balance = bal
//         this.transaction = []
//     }

//     deposit(ammt){
//             this.balance = this.balance+ammt
//             this.transaction.push(ammt)
//             return this.balance
//     }
//     withdrwal(amt){
//         if(amt<this.balance){
//             this.balance = this.balance - amt
//             this.transaction.push(-amt)
//             return this.balance
        
//         }
//         else{
//             console.log('invalid :' +this.balance)
//         }
//     }
// }
// let stu = new SBank('alka',1234,100000)
// stu.deposit(100)
// console.log(stu)
// stu.withdrwal(50)
// console.log(stu)

//=======================================================================================================================

class Bank{
    constructor(fn,acc,bal){
        this.fname = fn
        this.account = acc
        this.balance = bal
        this.transation = []
    }
    deposit(amt){
         this.balance = this.balance + amt
         this.transation.push(amt)
         return this.balance
    }
    withdrawl(amt){
        if(amt<this.balance){
            this.balance = this.balance - amt
            this.transation.push(-amt)
            return this.balance
        }
        else{
            console.log("Insufficient balance : " + this.balance)
        }
    }
    lastfourtran(){
        return this.transation.slice(-4)
    }
}

let man1 = new Bank('Athrva',123,200000)
man1.withdrawl(50000)
console.log(man1)
man1.withdrawl(15000)
console.log(man1)


let man2 = new Bank('Yashvant',456,10000)
man2.deposit(200)
man2.deposit(200)
man2.deposit(200)
man2.deposit(200)
man2.deposit(200)
man2.deposit(200)
man2.deposit(200)
man2.deposit(200)
console.log(man2)
console.log(man2.lastfourtran())


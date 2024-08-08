
//...........................practice 1 
class data {
    constructor(fn,ln,ag){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    }
}
let stud = [
    new data ("ruchika","kumbhare",22),
    new data ("Neha","Tarale",23)
]

console.log(stud[0].lastName)

stud.forEach(function(el){
    console.log(el.firstName + el.lastName)
})

stud.forEach(function(el){
    console.log(`${el.firstName} ${el.lastName}`)
})



stud.forEach(function(el){
    if(el.age<24){
        console.log(el.firstName)
    }
})

 //..........................................practice2

 class person {
    constructor(fn,ln,ct,no){
        this.fname = fn
        this.lname = ln
        this.city = ct
        this.noo = no
    }
 }

 let id = [
    new person("riyal","meshram","nagpur",123),
    new person("khushi","wankhade","pune",987)
 ]

 console.log(id)

 id.forEach(function(el){
    console.log(el.lname)
 })

let i =id.reduce(function(acc,el){
    return acc+el.noo
},0)
console.log(i)   //1110



//................................................practice3

class info {
    constructor(id,emp,sal){
        this.id1 = id
        this.employ = emp
        this.salary = sal
      
    }
}

let d = [
    new info(112,"mangesh",100000),
    new info(765,"ankit",30000)
]
console.log(d)

//print the lowest sall  employ name

d.forEach(function(el){
    if(el.salary<50000){
        console.log(el.employ)
    }
})        //ankit

//...............................................practice4

// class info {
//     constructor(fn,ln,ag){
//         this.fname = fn
//         this.lname = ln
//         this.age =ag
//     }
// }
// let ruchi = [
//      new.info("ruchika","kumbhare",22),
//       new.info("priyanka","shrama",24)
// ]


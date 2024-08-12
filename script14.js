
// let info = {
//     fname : 'ruchika',
//     lname : 'kumbhare',
//     age :21,
//     city:'nagpur'
// }
// let info1 = {
//     fname : 'ridhi',
//     lname : 'kumbhare',
//     age :25,
//     city:'pune'
// }

// class person{
//     fn = undefined
//     ln =undefined
//     city=undefined
//     age=undefined
// }
// let data = new person()
// console.log(data)
// data.fn = 'neha'
// data.ln = 'tarale'
// data.city = 'mumbai'
// data.age = 23
// console.log(data)

//constructor
class person {
    constructor(fn,ln,ag,ct){
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.city = ct
    }
}

let stu = [
    new person('ruchi','kumbhare',22), //0
    new person('neha','tarale',23),   //1
    new person('ritik','sharma',26),
    new person('mayuri','patel',24)
]
console.log(stu[1].lastname)    //  first person ka last name

//sare firstname + lastname
stu.forEach(function(el){
    console.log(el.firstname + el.lastname) 
})

//av age of all student
let total=stu.reduce(function(acc,el){
       return acc + el.age
},0)
console.log(total / stu.length)//23.75

//all addition of age
let total1=stu.reduce(function(acc,el){
    return acc + el.age
},0)
console.log(total1) //95

//show 24 age above names
stu.forEach(function(el){
    if(el.age>24){
        console.log(el.firstname)
    }
})










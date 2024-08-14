// program 1
// incorrect way
// class Student {
//     firstName = "chinmay"
//     lastName= "deshpande"
//     age = 23
// }

// class Teacher {
//     firstName = "chinmay"
//     lastName= "deshpande"
//     age = 23
//     salary = 1000
    
// }
// let amolB = new Teacher()
// console.log(amolB.firstName)
// console.log(amolB.lastName)
// console.log(amolB.age)
// console.log(amolB.salary)
//========================================================================================================================

// Program 2
class parent {
    fname = 'Ruchika'
    lname = 'Kumbhare'
    age = 22
}

class child extends parent{
    city = 'pune'
    country = 'india'
}
let a1 = new child()
console.log(a1.fname)
console.log(a1.lname)
console.log(a1.age)
console.log(a1.city)
console.log(a1.country)
console.log(typeof a1)


//simple object
let one = {
    fname : 'ruchika',
    lname : 'kumbhare',
    age :22
}
console.log(one.fname)
// function add(...arr){
// console.log(arr)
// }
// add(2,3)

// function add(...arr){
// console.log(arr)
// return arr.reduce(function(acc,el){
//     return acc + el
// },0)
// }
// let x = add(10,2)
// console.log(x)

// let x = [1,2,3,4]

// function add(a,b,c,d){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
// add(...x)

// let name = ['ruchi','puchi']
// function na(a,b){
//     console.log(a)
//     console.log(b)
// }
// na(...name)

// let x = [3,4,6,7,8]
// function add(a,b,...d){
//     console.log(a)
//     console.log(b)
//     console.log(d)
// }
// add(...x)

// let y = [10,20]
// function add(a,...b){
//   console.log(a)
//   console.log(b)
// }
// add(...y)

// let a = [2,3,4]
// let b = [5,6]
// let c = [...a,...b]
// console.log(c)


// let stud = {
//     fname : 'ruchi',
//     lname : 'kumbhare',
//     age : 22
// }
// let{fname,...others} = stud
// console.log(fname)
// console.log(others)

// let emp = {
//     fname : 'sunita',
//     lname : 'arora',
//     no : 123
// }
// let{fname,...others}= emp
// console.log(fname)
// console.log(others)


// let A_person = true
// let B_person = {name : 'vinit'}
// let val = A_person || B_person
// console.log(val)


let A_person = true
let B_person = {name: ' nimit'}
let val1 = 3>2 && 0 
let val2 = 2 > 3 && 0
console.log(val1)
console.log(val2)


if(undefined){
    console.log('hye')
}
else{
    console.log('bye')
}
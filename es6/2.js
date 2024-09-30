//----------------------------program1  rest operator
// function add(...arr){
//     console.log(arr)
//     return arr.reduce(function(acc,el){
//         return acc + el
//     },0)

// }
// let m =add(1,2,3,4,5,6)
// console.log(m)

//---------------------------program2 spread operator
// let x = [10,20,30,40]

// function add(a,b,c,d){
//     console.log(a+b+c+d)
// }
// add(...x)


//-----------------------------program3
// let x1= [10,20,30,40,50]

// function add(a,b,...d){
//     console.log(a)
//     console.log(b)
//     console.log(d)

// }
// add(...x1)

//----------------------------- program 4
// let n = [11,22,33]
// let m = n 
// n[0]  = 111
// console.log(m) // [111,22,33]
// console.log(n) // [111,22,33]

// let m2 = [...n] // copy ---- separate memory
// m2[0] = 1111
// console.log(m2)
// console.log(n)

//--------------------------------program5
// let n1 = [1,2,3,4]
// let n2 = [5,6,7]
// let arr = [...n1,...n2]
// console.log(arr)


// let x = [7,4,5 ] 
// let y = [2]
// let z = [...x,...y]
// console.log(z)

//------------------------------program 6 rest

// let stud = {
//     fname : 'ruchi',
//     lname : 'kumbhare',
//     age : 22,
//     city : 'nagpur'
// }

// let {fname,...othersI}=stud
// console.log(fname)
// console.log(othersI)

// let colors = ['blue','green','red','yellow']
// let[a,...b]= colors
// console.log(a)   //blue
// console.log(b)   //[ 'green', 'red', 'yellow' ]




//----------------------------  program 7
//rest and spread operator with object using function

// let stud = {
//         fname : 'ruchi',
//         lname : 'kumbhare',
//         age : 22,
//         city : 'nagpur'
//     }
// function displayFullName({fname,lname,...stud1}){
//     console.log(fname)
//     console.log(lname)
//     console.log(stud1)
// }
// displayFullName(stud)



// // take away --------> 
// //copy - array or copy -----> separate memory

//-----------------------------program 8 short circuiting in js 
// // && 
// // falsy values => null , undefined , "", 0 , 23 > 3 ,NaN

// let x1person = true
// let user = {name : 'ridhi'}
// let val = x1person && user.name
// console.log(val)

// let isLoggedIn = false
// let user1 = {name:"john"}
// let val1 = isLoggedIn && user1.name
// console.log(val1)



let isLoggedIn2 = true
let user2 = {name:"john"}
let val2 = 2 > 3 && 0
let val3 = null && 0
let val4 = undefined && 0
let val5 = '' && "bye"
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)

if(NaN){
    console.log("hello")
}
else {
    console.log('bye')
}


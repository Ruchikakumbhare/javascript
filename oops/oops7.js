
// functions 
// function declartion
// function expression 
// arrow function

//----Program_1 function declartion
function addition(x,y){
    return x+y
}
let a1 =addition(10,10)
console.log(a1)

//------Program_2 function expression 
let addition1 = function(x,y){
    return x + y
}
let a2 =addition(2,2)
console.log(a2)


//------Program_2 arrow function

let addition2 =(x,y)=>{
    return x + y
}
let a3 =addition(2,2)
console.log(a2)


//------Program_3 if only 1 statement 

let substract = (x,y)=> x - y
let m =substract(20,5)
console.log(m)

// if only one statement one parameter

let addition3 = (x)=> x+x
let n =addition3(10)
console.log(n)


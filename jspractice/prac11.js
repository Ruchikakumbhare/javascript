// function declartion
// function expression 
// arrow function
// if only 1 statement 
// if only one statement one parameter

//---------------------------------------------
function addition(a,b){
    return a+b
}
let x =addition(20,10)
console.log(x)

//---------------------------------------------
let addition1 = function(a,b){
    return a + b
}
let x1 = addition1(20,30)
console.log(x1)
//----------------------------------------------
let addition2 =(a,b)=> {
    return a +b
}
let x2=addition2(100,100)
console.log(x2)
//------------------------------------------------
let addition3 =(a,b)=> a + b
let x3 = addition3(200,20)
console.log(x3)
//----------------------------------------------
let addition4 =(a)=>a+a
let x4 = addition4(5)
console.log(x4)

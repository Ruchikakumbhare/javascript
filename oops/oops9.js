// //--------------------------lexical scope
// // uses to resolve the variable names when a function is created inside another function
// function addition(){
//     let a = 1
//     let b =1
//     console.log(a+b)
    
//     function addition2(){
//         let c = 2
//         let d = 2
//         console.log(a+b)

//         function addition3(){
//             let e = 4
//             console.log(a+b+c+d+e)
//         }
//         addition3()
//     }
//     addition2()
// }
// addition()


// //-----------------------------------closures

// function greet(){
//     return function(){
//         console.log("Good Night")
//     }
// }
// let x = greet()
// console.log(x)

// function add(){ 
//     console.log(3+3)
//     return 3+3
//     // console.log("hye")--error
// }
// let y = add()
// console.log(y)

// function add1(){
//     let a1 = 5
//     let b1 =5
//     return function(){
//         console.log(a1+b1)
//     }
// }
// let r1 = add1()
// r1()

// function additionD(){
//     let a = 10 
//     let b = 5
//     return function(){
//         console.log(a+b)
//     }
// }
// let r1 = additionD()

// // let r1 = function(){
// //     console.log(a+b)
// // }

// r1()

//---------------------------------repeat-------------------------

//program1 lexical scope
function mul(){
    let a = 10
    let b = 10
    console.log(a*b)
     function mul1(){
        let c = 10
        console.log(a*b*c)
     }
     mul1()
}
mul()

//program2 closures
function add(){
    console.log("hello")
    let x = 1
    let y = 2
    return x + y
}
add()


//program3 
function calc(){
    let a = 1
    let b = 5
    return function(){
        console.log(a+b)
    }
}
let z = calc()
z()



//program3 

// function cal(numT){
//     if(numT>0 && numT <=5){
//      return "10 % Discount"
//     }
//     else if(numT>5 && numT <=10){
//         return "20 % Discount"
//        }
//     else if(numT>10 && numT <=20){
//         return "30 % Discount"
//        }
          
// }
// cal(10)
// function CalculateDiscount(numT){
    
//     if(numT > 0 && numT <=5){
//         return "10 % discount"
//     }

//     else if(numT > 5 && numT <= 10){
//         return "10 % discount"
//     }
//     else if(numT > 10){
//         return "15 % discount"
//     }

// }
// CalculateDiscount(5)

//program4
// let and const and var 
//assigment
// let a = 10
// console.log(a)
// a = 100
// console.log(a)

// var h  = 8 
// h = 50
// console.log(h)

// const q= 3o
// console.log(q)
// q= 880

//----------------------------------------------
// scope 
// let and const are blocked scope

let m = 100
{
    let m1 = 122
    console.log(m1)//122
}
console.log(m)//100

//==========================
let m2 = 222
{
    m2 = 333
    console.log(m2) //333
}

console.log(m2)//333

//==========================
let p = 6849
{
    let p =444
    console.log(p)//444
    p = 99
    console.log(p)//99
}
p = 555
console.log(p)//555

//============================
// const are blocked scope
// program 3
// const j = 90
// {
//     j =44
//     console.log(j)
// }
// console.log(j)    Errorr beacaus we are not update constant value


const g = 55
{
    const g = 32
    console.log(g)//32
}
console.log(g)//55




// // const h = 100
// // {
// //     h = 999
// //     console.log(h) // 999
// // }
// // console.log(h) // 999

// // program 4
// const h = 100
// {
//     const h = 999
//     console.log(h)  // 999
// }
// console.log(h)  // 100





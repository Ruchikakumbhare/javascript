
// scope and assignment


let a = 10
a = 100
console.log(a)


var b = 200
b= 20
console.log(b)

// const c = 222
//  c =49
// console.log(c)


// let and const are blocked scope
let a1 = 23 
const pi = 100

{
    let a1 = 100
    console.log(a1) // 100
}

console.log(a1) // 23

// {
//     const d = 1000
//     console.log(d)
// }
// console.log(d)

// var is function 

// var x = 100000
// console.log(x)

// function addition(){
//     var a = 1000
//     console.log(a) // 1000

//     {
//         let a = 10000
//         console.log(a) // 10000
//     }

// }
// addition()
// console.log(a) // 100000


var y = 1000
console.log(y)  // 1000
function addition(){
    y = 1000
    console.log(y)   // 1000

    {
        let y = 1
        console.log(y)   //1
    }
    y = 1
    console.log(y) // 1
}
addition()
console.log(y)  // 1
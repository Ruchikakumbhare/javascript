//--------------------------lexical scope
// uses to resolve the variable names when a function is created inside another function
function addition(){
    let a = 1
    let b =1
    console.log(a+b)
    
    function addition2(){
        let c = 2
        let d = 2
        console.log(a+b)

        function addition3(){
            let e = 4
            console.log(a+b+c+d+e)
        }
        addition3()
    }
    addition2()
}
addition()


//-----------------------------------closures

function greet(){
    return function(){
        console.log("Good Night")
    }
}
let x = greet()
console.log(x)

function add(){
    console.log(3+3)
    return 3+3
    // console.log("hye")--error
}
let y = add()
console.log(y)

function add1(){
    let a1 = 5
    let b1 =5
    return function(){
        console.log(a1+b1)
    }
}
let r1 = add1()
r1()

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
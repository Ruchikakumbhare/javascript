// polymorphism 
// inheritance 
// encapsulation ----

//---------------------------------------Program1 
class human{
     talk(){
        console.log("hello")
     }
}
class cat{
    talk(){
        console.log("meewoo")
    }
}
function call_talk(obj){
    obj.talk()
}
let a1 = new human()
let b = new cat()
call_talk(a1)
call_talk(b)

//-----------------------------------------Program2

class human1{
    talk(){
       console.log("hello")
    }
}
class cat1{
   talk(){
       console.log("meewoo")
   }
}
class dog1{
    bark(){
        console.log("Bhoww")
    }
}
function call_talk(obj){
   if(obj.talk){
    obj.talk()
   }
   else if (obj.bark){
    obj.bark()
   }
}

let a11 = new human()
let b11 = new cat()
let c11 = new dog1()
call_talk(a11)
call_talk(b11)
call_talk(c11)

//-----------------------------------------Program3
//functions
//function declaration
function add(x,y){
    return x+y
}
let m =add(2,2)
console.log(m)
//function expression
let add8 = function(x,y){
    return x + y
}
let m1 =add8(2,2)
console.log(m1)
//arrow function
let add1 = (x,y)=>x+y
let m2 =add1(2,2)
console.log(m2)

//--------------------------lexical scope
//---------program1
function add2(){
    let s = 10
    let d = 20
    console.log(s + d)


    function add3(){
        let f = 30
        let g = 30
        console.log(f+g)
    }
    add3()
}
add2()

//program2
function addition() {
    let a = 10
    let b = 20
    console.log(a + b)

    function addition2() {
        let c = 8
        let d = 4
        console.log(a + b )

        function addition3() {
            let e = 19
            console.log(a + b + c + d + e)
        }
        addition3()
    }

    addition2()
}
addition()

// // closures

// // function greet(){
// //     return function(){
// //         console.log("hello")
// //     }
// // }
// // let q1 = greet()
// // console.log(q1)

// // function addition(){
// //     console.log(9+9) // 18
// //     return 9+9
// //     console.log("bye")
// // }
// // let q2 = addition()
// // console.log(q2) // 18

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
//---------------------------------------------------- rest operator (...arr)----------------------------------------------------
// function addAll(...arr){
//     console.log(arr)
    // return arr.reduce(function(acc,el){
    //     return el + acc
    // },0)
// }
// let a = addAll(1,2,3,4,5,6,7)
// console.log(a)                             //array main convert hogya output and reduce se add ho gya

//program2
// function add(...arr){
//          console.log(arr) 
//          return arr.reduce(function(acc,el){
//             return el + acc
//          })
// }
// let m = add(10,20)
// console.log(m)                     //[10,20]   30



// program 3
// ------------------------------------------------------spread operator---------------------------------------------------------
// //[11,22,33,44,55,66,77,88]  =======> 11,22,33,44,55,66,77,88

// let num =  [10,20,30,40]
// function addfirsttwo(a,b){
//     console.log(a+b)
// }
// addfirsttwo(...num)  //30

// program 4

// let num1 = [1,2,3,4,5,6]
// console.log(num1)
// function add3num(a,b,c,...d){
//       console.log(a)
//       console.log(b)
//       console.log(c)
//       console.log(d)
// }
// add3num(...num1)

// program 5

let x = [1,2,3,4]
// let y = x
// y[0] = 10
// console.log(x)
// console.log(y)

let x1 = [...x]        //copy --separate memory
x1[0]=10
console.log(x)
console.log(x1)














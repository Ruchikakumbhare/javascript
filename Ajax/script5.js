
//---------------------------------------------------------------------
// function add1(){
//     console.log('print add1')
// }
// function add2(){
//     console.log("print add2")
// }
// add2()
// add1()

//--------------------------------------------------------------------=
// function  data(){
//     setTimeout(function(){
//           console.log("hello")
//     },2000)
// }
// function data1(){
//     console.log("hiiieee")
// }
// data()
// data1()

//-----------------------------------------------------------------------
// function a1(){
//     setTimeout(function(){
//         console.log("byee")
//     },3000)
// }
// function a2(){
//     setTimeout(function(){
//         console.log("hieeeee")
//     },2000)
// }
// function a3(){
//     setTimeout(function(){
//         console.log("helllowww")
//     },1000)
// }
// a1()
// a2()
// a3()

//------------------------------------------------------------------------
//call back hell --->not reuable and tightly coupled
// function a1(){
//         setTimeout(function(){
//             console.log("byee")
//             setTimeout(function(){
//                  console.log("hieeeee")
//                     setTimeout(function(){
//                         console.log("helllowww")
//                             },1000)
//                 },2000)
//         },3000)
//     }
// a1()

//-------------------------------------------------------------------------

// let x= new Promise(function(resolve,reject){
//     let a1 = 10
//     let a2 = 2
//     if( a1==a2){
//         resolve("hello")
//     }
//     else{
//         reject("bye")
//     }
// })
//consuming the promise
// x.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

//------------------------------------------------------------------------

// let x= new Promise(function(resolve,reject){
//         let a1 = 10
//         let a2 = 2
//         if( a1==a2){
//             resolve("hello")
//         }
//         else{
//             reject("bye")
//         }
//     })
//     x.then(function(str){
//         console.log(str)
//     })
//     .catch(function(str){
//         console.log(str)
//     })
//     .finally(function(str){
//         console.log("visit again")
//     })

//-----------------------------------------------------------------------

let q1=new Promise(function(resolve,reject){
     let x = 10
     let y = 10
     if(x==y){
        resolve("success")
     }
     else{
        reject("failed")
     }
})
q1.then(function(str){
    console.log(str)
    return [30,20,10,20]
})
.then(function(arr){
    console.log(arr[2])
})
.catch(function(str2){
    console.log(str2)
})
//---------------------------------------------------------------------------











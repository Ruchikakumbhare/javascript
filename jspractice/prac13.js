// program1
// function add1(){
//     console.log('hye')
// }
// function add2(){
//     console.log('bye')
// }
// add2()
// add1()

//==================================================================================

// program2
// function add(){
//     setTimeout(function(){
//         console.log("i am late")
//     },3000)
// }
// function add1(){
//     console.log("hello")
// }
// add()
// add1()

//===================================================================================
// program3
// function add(){
//     setTimeout(function(){
//         console.log("i am very very slow")
//     },3000)
// }
// function add1(){
//     setTimeout(function(){
//         console.log("i am slow")
//     },2000)
// }
// function add2(){
//     setTimeout(function(){
//         console.log("i am fast")
//     },1000)
// }
// add()
// add1()
// add2()

//====================================================================================
// program4
//call back hell --tightly coupled and not reuable   (Async code)
// function add(){
//     setTimeout(function(){
//         console.log("i am very very slow")
//         setTimeout(function(){
//             console.log("i am slow")
//             setTimeout(function(){
//                 console.log("i am fast")
//             },1000)
//         },2000)
//     },3000)
// }
// add()

//======================================================================================
//program5 
//async- sync   --->promise -->pending,resolve,reject
// let x =new Promise(function(resolve,reject){
//         let a = 10
//         let b = 10
//         if(a==b){
//             resolve("hello")
//         }
//         else{
//             reject("byeee")
//         }
// })
// x.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

//===================================================================================
//program6
// let pro=new Promise(function(resolve,reject){
//        let x = 10
//        let y =20
//        if(x==y)[
//         resolve("hyeeeeeeeeeeeee")
//        ]
//        else{
//         reject("byeeeeeee")
//        }
// })
// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
//=====================================================================================
//program7
// let pro1=new Promise(function(resolve,reject){
//     let x = 10
//     let y =10
//     if(x==y)[
//      resolve("hyeeeeeeeeeeeee")
//     ]
//     else{
//      reject("byeeeeeee")
//     }
// })
// pro1.then(function(str){
//  console.log(str)
// })
// .catch(function(str){
//  console.log(str)
// })
// .finally(function(str){
//     console.log("i am always run")
// })
//======================================================================================
// program8
// let pro2=new Promise(function(resolve,reject){
//               let x = 20
//               let y = 20
//               if(x==y){
//                 resolve("i am pass")
//               }
//               else{
//                 reject("i am failed")
//               }
// })
// pro2.then(function(str){
//     console.log(str)
//     return [20,39,45,67]
// })
// .then(function(arr){
//     console.log(arr)
//     console.log(arr[2])
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(str){
//     console.log("i am always execute")
// }
// )

//==========================================================================
//program9

// function userCreate(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('create user')
//         },3000)
//     })
// }

// function getId(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("getId")
//         },2000)
//     })
// }

// function getInfo(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("getInfo")
//         },1000)
//     })
// }

// async function get() {
//     let a = await userCreate()
//     console.log(a)
//     let b = await getId()
//     console.log(b)
//     let c = await getInfo()
//     console.log(c)
// }
// get()
//============================================================================================
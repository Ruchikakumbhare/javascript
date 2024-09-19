// Promise combinators 
// Promise combinators-->parallel execution of promises
// Promise.all([]) Promise.allSettled([]) Promise.race([]) Promise.any([])
//---------------------------------------program1----------------------------------------------
//---------------------------------------------------------------------------------------------
// let p1=new Promise(function(resolve,reject){
//        setTimeout(function(){
//         resolve('user  1 created ')
//        },1000)
// })
// let p2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//      resolve('user  2 created ')
//     },2000)
// })
// let p3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//      resolve('user  3 created ')
//     },3000)
// })
// let p4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//      reject('user  4 created ')
//     },3000)
// })
// async function PromiseAll() {
//    try{let pro=await Promise.all([p1,p2,p3,p4])
//     console.log(pro)}
//    catch{
//      console.log('error')
//    }
// }
// PromiseAll()

// //---------------------------------------program2----------------------------------------------
// //---------------------------------------------------------------------------------------------
// let p1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//      resolve('user  1 created ')
//     },1000)
// })
// let p2=new Promise(function(resolve,reject){
//  setTimeout(function(){
//   resolve('user  2 created ')
//  },2000)
// })
// let p3=new Promise(function(resolve,reject){
//  setTimeout(function(){
//   resolve('user  3 created ')
//  },3000)
// })
// let p4=new Promise(function(resolve,reject){
//         setTimeout(function(){
//          reject('user  4 created ')
//         },3000)
//     })
// async function PromiseAllSettled() {
//     try{ let pro = await Promise.allSettled([p1,p2,p3,p4])
//         console.log(pro)
//     }
//     catch{
//      console.log('error error')
//    }
// }
// PromiseAllSettled()


//---------------------------------------program3----------------------------------------------
//---------------------------------------------------------------------------------------------
// let p1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//      resolve('user  1 created ')
//     },1000)
// })
// let p2=new Promise(function(resolve,reject){
//  setTimeout(function(){
//   resolve('user  2 created ')
//  },2000)
// })
// let p3=new Promise(function(resolve,reject){
//  setTimeout(function(){
//   resolve('user  3 created ')
//  },3000)
// })
// let p4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//      reject('user  4 created ')
//     },3000)
//    })
// async function PromiseRace() {
//    try{
//     let pro =  await Promise.race([p3,p4])
//     console.log(pro)
//    }
//    catch{
//     console.log('error')
//    }
// }
// PromiseRace()


//---------------------------------------program4----------------------------------------------
//---------------------------------------------------------------------------------------------
let p1=new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve('user  1 created ')
    },3000)
})
let p2=new Promise(function(resolve,reject){
 setTimeout(function(){
  resolve('user  2 created ')
 },2000)
})
let p3=new Promise(function(resolve,reject){
 setTimeout(function(){
  resolve('user  3 created ')
 },1000)
})
async function PromiseAny() {
    let pro = await Promise.any([p1,p2,p3])
    console.log(pro)
}
PromiseAny()

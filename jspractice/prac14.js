//simple promise.all ------>program1
// let l1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('user 1')
//     },1000)
// })
// let l2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('user 2')
//     },2000)
// })
// let l3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('user 3')
//     },1000)
// })
// Promise.all([l1,l2,l3])
// .then(function(str){
//     console.log(str)
// })

//progra2 async await function of promise.all
let l1=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user 1')
        },1000)
    })
    let l2=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user 2')
        },2000)
    })
    let l3=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user 3')
        },3000)
    })
    let l4=new Promise(function(resolve,reject){
        setTimeout(function(){
            reject('user 4')
        },1000)
    })
async function PromiseAll() {
   try{let pro = await Promise.all([l1,l2,l4,l3])
   console.log(pro)}
   catch{
    console.log('error')
   }
}
PromiseAll()
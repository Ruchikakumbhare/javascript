//------------------------------------------------------------------------------------
//promise.all  , Promise.allSettled   , promise.race    , promise.any
//program1----------------------------------------------------------------------------
//promise.all

// let a1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("one created")
//     },1000);
// })
// let a2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("two created")
//     },2000);
// })
// let a3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("three created")
//     },3000);
// })

// Promise.all([a1,a2,a3])            //--> //promise combinators -- parallel execution
// .then(function(arr){
//     console.log(arr)              //all promise all resolve so its return array 
// })                                // ek bhi reject  to error throw krenga
                              

// // program 2---------------------------------------------------

// let x1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("one created")
//     },1000);
// })
// let x2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("two created")
//     },2000);
// })
// let x3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("three created")
//     },3000);
// })
// let x4 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         reject("four created")
//     },3000);
// })
// Promise.all([x1,x4,x2,x3])         //--> //promise combinators -- parallel execution
// .then(function(arr){
//     console.log(arr)              
// })                               
// .catch(function(err){
//     console.log(err)                // ek bhi reject  to error throw krenga
// })                                


//program3----------------------------------------------------------------------------
//Promise.allSettled

// let a = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("new one")
//     },1000)
// })
// let b = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("new two")
//     },1000)
// })
// let c = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("new three")
//     },1000)
// })
// let D= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         reject("error show")
//     },1000)
// })
// Promise.allSettled([a,D,b,c])   //it will be return array { status: 'fulfilled', value: 'new one' }, --resolve state
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
//output:
// [
//     { status: 'fulfilled', value: 'new one' },
//     { status: 'rejected', reason: 'error show' },
//     { status: 'fulfilled', value: 'new two' },
//     { status: 'fulfilled', value: 'new three' }
//   ]

//program4----------------------------------------------------------------------------
//promise.race

// let a1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("one created")
//     },2000);
// })
// let a2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("two created")
//     },1000);
// })
// let a3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("three created")
//     },3000);
// })
// let a4 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         reject("four created")
//     },1000);
// })
// Promise.race([a1,a2,a3,a4])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })                                 //jo kam time lagyanga vahi jitenga 

//program5-----------------------------------------------------------------------------
//promise.any

x1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("one created")
    },3000);
})
x2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("two created")
    },2000);
})
x3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("three created")
    },1000);
})
x4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("four created")
    },3000);
})
Promise.any([x1,x2,x3,x4])
.then(function(str){
    console.log(str)
})                         //jo pehele resolve vo execute 

//------------------------------------------------program1 (promise.all)------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
// function getSingleUser(id) {
//     return fetch(`https://reqres.in/api/users/${id}`)


//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (response) {
//             return response.data
//         })
//         .catch(function () {
//             console.log('Something went wrong!!!')
//         })
// }
// Promise.all(
//     [
//         getSingleUser(1),
//         getSingleUser(2),
//         getSingleUser(3)

//     ]
// )
//     .then(function (res) {
//         console.log(res)
//     })
//     .catch(function () {
//         console.log("error")
//     })



//------------------------------------------------program1 using async await(promise.all)------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------
// function getSingleUser(id) {
//     return fetch(`https://reqres.in/api/users/${id}`)


//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (response) {
//             return response.data
//         })
//         .catch(function () {
//             console.log('Something went wrong!!!')
//         })
// }
// async function getPromiseAll() {
//     try{
//         let x1 = await Promise.all([getSingleUser(1),getSingleUser(2)])
//         console.log(x1)
//     }
//     catch{
//         console.log("error error!!!")
//     }
// }
// getPromiseAll()


//------------------------------------------------program2 (promise.allSettled)------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
// function getSingleUser(id) {
//     return fetch(`https://reqres.in/api/users/${id}`)


//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (response) {
//             return response.data
//         })
//         .catch(function () {
//             console.log('Something went wrong!!!')
//         })
// }
// function userTimeOut(){
//     return new Promise(function(resolve,reject){
//         resolve("Time out!!")
//     },1)
// }
// function userTimeOut(){
//     return new Promise(function(resolve,reject){
//         reject("Time out!!")
//     })
// }


// Promise.allSettled([
//     getSingleUser(1),
//     getSingleUser(2),
//     userTimeOut()
// ])
// .then(function(res){
//     console.log(res)
//     res.forEach(function(el){
//         if(el.status == 'fulfilled'){
//             console.log(el.value)
//         }
//         else if(el.status == 'rejected'){
//             console.log(el.reason)
//         }
//     })
// })

//------------------------------------------------program2 using async await(promise.allsettled)------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

// function getSingleUser(id) {
//     return fetch(`https://reqres.in/api/users/${id}`)


//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (response) {
//             return response.data
//         })
//         .catch(function () {
//             console.log('Something went wrong!!!')
//         })
// }
// function userTimeOut(){
//     return new Promise(function(resolve,reject){
//         resolve("Time out!!")
//     },3)
// }
// function userTimeOut(){
//     return new Promise(function(resolve,reject){
//         reject("Time out!!")
//     })
// }

// async function getPromiseAllSettled() {

//     let students = await Promise.allSettled(
//         [getSingleUser(1),getSingleUser(2), userTimeOut()]
//     )
//     students.forEach(el => {
//         if (el.status === 'fulfilled') {
//             console.log(el.value)
//         }
//         else if (el.status === 'rejected') {
//             console.log(el.reason)
//         }
//     });
// }
// getPromiseAllSettled()


//------------------------------------------------program3 (promise.race)------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
// function getSingleUser(id) {
//         return fetch(`https://reqres.in/api/users/${id}`)
    
    
//             .then(function (response) {
//                 return response.json()
//             })
//             .then(function (response) {
//                 return response.data
//             })
//             .catch(function () {
//                 console.log('Something went wrong!!!')
//             })
//     }
//     function userTimeOut(){
//         return new Promise(function(resolve,reject){
//             resolve("Time out!!")
//         },3)
//     }
//     function userTimeOut(){
//         return new Promise(function(resolve,reject){
//             reject("Time out!!")
//         })
//     }
// Promise.race([getSingleUser(1),userTimeOut()])
// .then(function(response){
//     console.log(response)
// })
// .catch(function(){
//     console.log('error.....')
// })


//------------------------------------------------program3 using async await(promise.race)------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

// function getSingleUser(id) {
//     return fetch(`https://reqres.in/api/users/${id}`)


//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (response) {
//             return response.data
//         })
//         .catch(function () {
//             console.log('Something went wrong!!!')
//         })
// }
// function userTimeOut(){
//     return new Promise(function(resolve,reject){
//         resolve("Time out!!")
//     },3)
// }
// function userTimeOut(){
//     return new Promise(function(resolve,reject){
//         reject("Time out!!")
//     })
// }

// async function getPromiseRace(){
//     try {
//         let students = await Promise.race(
//             [getSingleUser(1),getSingleUser(2)]
//         )
//         console.log(students)
//     }
//     catch{
//         console.log("error.......")
//     }
// }
// getPromiseRace()


//------------------------------------------------program4 (promise.any)------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
// function getSingleUser(id) {
//         return fetch(`https://reqres.in/api/users/${id}`)
    
    
//             .then(function (response) {
//                 return response.json()
//             })
//             .then(function (response) {
//                 return response.data
//             })
//             .catch(function () {
//                 console.log('Something went wrong!!!')
//             })
//     }

// Promise.any([getSingleUser(1),getSingleUser(2)])
// .then(function(res){
//     console.log(res)
// })



//------------------------------------------------program4 using async await(promise.any)------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------

function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)


        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            console.log('Something went wrong!!!')
        })
}
function userTimeOut(){
    return new Promise(function(resolve,reject){
        resolve("Time out!!")
    },3)
}
function userTimeOut(){
    return new Promise(function(resolve,reject){
        reject("Time out!!")
    })
}
async function getPromiseany() {
    let l1 = await Promise.any([getSingleUser(1),getSingleUser(2)])
    console.log(l1)
}
      
getPromiseany()






































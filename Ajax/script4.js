//PROGRAM1-------------------------------------------------------------
// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 20
//     if(a==b){
//         resolve ("hello")
//     }
//     else{
//         reject ("bye")
//     }
// })
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })
// pro.catch(function(str){
//     console.log(str)
// })

//PROGRAM2-------------------------------------------------------------

// let pro = new Promise(function(resolve,reject){
//         let a = 10
//         let b = 10
//         if(a==b){
//             resolve ("hello")
//         }
//         else{
//             reject ("bye")
//         }
//     })
// pro.then(function(str){
//     console.log(str)
//     return  "helloo"
// })
// .then(function(str1){
//     console.log(str1)
//     return "helloo"
// })
// .then(function(str2){
//     console.log(str2)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(str){
//     console.log("i am alwys run")
// })

//PROGRAM3-------------------------------------------------------------
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
//             resolve('getid')
//         },2000)
//     })
// }
// function getinfo(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('getinfo')
//         },1000)
//     })
// }
// //asyn call --- sychronously
// userCreate().then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str2){
//     console.log(str2)
//     return getinfo()
// })
// .then(function(str3){
//     console.log(str3)
// })
// .catch(function(str){
//     console.log(str)
// })
// console.log(str3)




//PROGRAM4-------------------------------------------------------------
function userCreate(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('create user')
        },3000)
    })
}
function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('getid')
        },2000)
    })
}
function getinfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('getinfo')
        },1000)
    })
}

async function getinfo11() {
    let a = await userCreate()
    console.log(a)
    let b = await getId()
    console.log(b)
    let c = await getinfo()
    console.log(c)
}
getinfo11()



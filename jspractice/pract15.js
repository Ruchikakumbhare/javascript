// // //--------- program1
// // function add1() {
// //     console.log('add1')
// // }
// // function add2(){
// //     console.log('add2')
// // }
// // add2()
// // add1()

// //****************************************************************************************************** 

// //program2
// // function add1(){
// //     setTimeout(function(){
// //         console.log('time out!!')
// //     },2000)
// // }
// // function add2(){
// //     console.log('hyee')
// // }
// // add2()
// // add1()

// //****************************************************************************************************** 

// //program3
// // function add1(){
// //     setTimeout(function(){
// //         console.log('hye')
// //     },2000)
// // }
// // function add2(){
// //     setTimeout(function(){
// //         console.log('hye22')
// //     },1000)
// // }
// // function add3(){
// //     setTimeout(function(){
// //         console.log('hye33')
// //     },3000)
// // }
// // add1()
// // add2()
// // add3()

// //****************************************************************************************************** 

// //program4

// // function getInfo() {
// //     setTimeout(function () {
// //         console.log("user created")
// //         setTimeout(function () {
// //             console.log("getId")
// //             setTimeout(function () {
// //                 console.log("getInfo")
// //             }, 1000)
// //         }, 2000)

// //     }, 3000)
// // }
// // getInfo()

// //****************************************************************************************************** 
// //program5
// // let pro = new Promise(function(resolve,reject){
// //          let a1 = 10
// //          let a2 = 10
// //         if(a1==a2){
// //             resolve('hye')
// //         }
// //         else{
// //             reject('bye')
// //         }
// // })
// // pro.then(function(str){
// //     console.log(str)
// // },function(str){
// //     console.log(str)
// // })

// //************************************************************************************************* */
// //program6

// // let pro1 = new Promise(function(resolve,reject){
// //      let x = 2
// //      let y = 3
// //      if(x==y){
// //         resolve('hello')
// //      } 
// //      else{
// //         reject('bye')
// //      }
// // })
// // pro1.then(function(str){
// //     console.log(str)
// // })
// // .catch(function(str){
// //     console.log(str)
// // })
// // .finally(function(){
// //     console.log('successfully executed')
// // })

// //************************************************************************************************* */
// //program7

// function username(){
//     return new Promise(function(resolve,reject){
//             setTimeout(function(){
//                 console.log('user created')
//             },1000)
//     })
// }
// function userid(){
//     return  new Promise(function(resolve,reject){
//              setTimeout(function(){
//                  console.log('user id')
//              },2000)
//      })
//  }
//  function userlogin(){
//     return  new Promise(function(resolve,reject){
//              setTimeout(function(){
//                  console.log('user login')
//              },3000)
//      })
//  }
// async function info(){
//         let x = await username()
//         console.log(x)
//         let y = await userid()
//         console.log(y)
//         let z =await userlogin()
//         console.log(z)
//  }
// info()

class stu {
    constructor(fn,ln,ag){
      this.fname = fn
      this.lname = ln
      this.age = ag
    }
    display(){
        console.log(this.fname + this.lname)
    }
}
// let a = new stu('ruchi','sharma',22)
// console.log(a.fname)
// console.log(a.lname)
// console.log(a.age)
// a.display()

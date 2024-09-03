// async vs sync
//-----------program1
// function add(){
//     console.log("add1")
// }
// function add2(){
//     console.log("add2")
// }
// add2()
// add()

//------------program2
// function addd(){
//     setTimeout(function(){
//         console.log("heeloo")
//     },2000)
//     setTimeout(function(){
//         console.log("how are you")
//     },3000)
// }
// addd()

//------------program 3
// function addd(){
//     setTimeout(function(){
//         console.log("heeloo")
//     },2000)
// }
// function add3(){
//     console.log("bye")
// }
// addd()
// add3()



//----------------program 4
// async sync 
// async ----- sync ---- 
//call back hell   ( not reusable and tightly coupled)
function addd(){
        setTimeout(function(){
            console.log("created user"),
            setTimeout(function(){
                console.log("creat id"),
                setTimeout(function(){
                    console.log("get info")
             },1000)   
            },2000)  
        },3000)
}
addd()
//-------------------------------------------------------------------------
//----------------program 5
// async sync ------>promise

let x1=new Promise(function(resolve,reject){     //promise created
    let a = 10 
    let b = 20
    if(a==b){
        resolve("hyee i am resolve")
    }
    else{
        reject("bye i am rejected")
    }
})

x1.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})

//------------------------------------------------------------------------
//----------------program 6
let pro1=new Promise(function(resolve,reject){
       let a1 = 100
       let b1 = 100
       if(a1==b1){
        resolve ("yes")
       }
       else{
        reject("No")
       }
})

pro1.then(function(str){
    console.log(str)
},function(Str){
    console.log(str)
})

//------------------------------------------------------------------------
//----------------program 7 

let x2=new Promise(function(resolve,reject){
       let fname = "Ruchika"
       if(fname.length >=7){
        resolve([1,2,3])
       }
       else{
        reject([9,8,7])
       }

})

x2.then(function(str){
    console.log(str[0])
},function(str){
  console.log(str[1])
})

//---------------------------------------------------------------
//----------------program 8   .then(),.catch(),finally()
new Promise(function(resolve,reject){
    let a3 = 10
    let a4 = 2
    if(a3==a4){
        resolve("heeloo")
    }
    else{
        reject("bye")
    }
})

.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always execute")
})


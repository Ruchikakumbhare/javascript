//program1
function add(){
    console.log("hello")
}
function add2(){
    console.log("bye")
}
add2()
add()

// //program2
function sen(){
    setTimeout(function(){
       console.log("This is slow sentence")
    },3000)
}
function sen1(){
    console.log("this is fast sentance")
}
sen()
sen1()

//program3 ----------->tightly coupled ascny  [call back hell ---not reuasble] 
function data1(){
    setTimeout(function(){
        console.log('successfully created')
        setTimeout(function(){
            console.log("login user")
            setTimeout(function(){
                console.log('sign up')
            },3000)
        },2000)
    },1000)
}
data1()

// //program4 
let p1 =new Promise(function(resolve,reject){
        let x = 20
        let y = 10
        if(x==y){
            resolve('yess')
        } 
        else{
            reject('no')
        }
})
//consuming the promises
p1.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})

// //program5
let p2=new Promise(function(resolve,reject){
        let x3 = 100
        let x4 = 100
        if(x3==x4){
            resolve("this is resolving")
        }
        else{
            reject("this is rejected")
        }
})

p2.then(function(str){
    console.log(str)
})
p2.catch(function(str){
    console.log(str)
})
p2.finally(function(Str){
    console.log("Run successfully")
})

// //program6
let p3=new Promise(function(resolve,reject){
        let x5 = 10
        let x6 = 10
        if(x5 ==x6 ){
            resolve([["mango","apple"],["blue","red"]])
        }
        else{
            reject("byee")
        }
})
p3.then(function(a){
    console.log(a)
    return a[1]
})
.then(function(a){
    console.log(a[0])
    return a[0]
})
.then(function(a){
    console.log(a) 
})
.catch(function(a){
    console.log(a)
})
.finally(function(a){
    console.log("done")
})


//program7

let p4=new Promise(function(resolve,reject){
       let u = 10
       let v = 10
       if(u == v){
        resolve('RUCHIKA')
       }
       else{
        reject("fail")
       }
})
p4.then(function(d){
    console.log(d)
    return d
})
.then(function(d){
    console.log(d[4])
    return d[4]
})
.catch(function(d){
      console.log("failed")
})
.finally(function(d){
    console.log("executed")
})








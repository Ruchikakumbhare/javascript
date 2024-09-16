//------------------------ Program1
// function substraction(){
//     console.log('sub 1')
// }
// function substraction2(){
//     console.log('sub 2')
// }

// substraction2()
// substraction()


//----------------------- program 2
//function setTimeout --->it will be print after seconds

// function add(){
//     setTimeout(function(){
//          console.log('add 1')
//     },2000)
// }
// function addx(){
//     console.log('add x')
// }
// add()
// addx()

//----------------------- program 3
// usercreation ----- userid ------ userinfo
// this is not right way to get output
// function user(){
//     setTimeout(function(){
//         console.log("create used")
//     },3000)
//     setTimeout(function(){
//         console.log('getid')
//     },2000)
//     setTimeout(function(){
//         console.log('getinfo')
//     },1000)
// }
// user()


//----------------------- program 4
//4 async ---- synchronously execute
// call back hell
// code tightly coupled not resuable 
function getInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("getId")
            setTimeout(function () {
                console.log("getInfo")
            }, 1000)
        }, 2000)

    }, 3000)
}
getInfo()


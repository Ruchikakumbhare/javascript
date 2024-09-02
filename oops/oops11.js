

// var fname = "Ruchika"
// var lname = "Kumbhare"

//-----program1
// let a1 = {
//     fname :"riya",
//     lname :"Patel",
//     displayName:function(){
//          // this ----> a1
//         console.log(this.fname + this.lname)
//         function display2(){
//             console.log(this.fname + this.lname)
//         }
//         display2()
//     }
   
// }
// a1.displayName()

//-----program2
// let ruchi = {
//     fname : "ruchika",
//     lname :"kumbhare",
//     display(){
//         console.log(this.fname + this.lname)

//     let dis = ()=>{
//         console.log(this.fname + this.lname)
//     }
//     dis()
//     }
// }
// ruchi.display()

//program3
// this -----window
var fname = "Kajal"
var lname ="Sharma"
let x1 = {
    fname : "Kajal",
    lname : "Sharma",
    display_N:() =>{
        console.log(this.fname + this.lname)
    let display_N1=()=>{
         // this --- display_N1 ---- window
        console.log(this.fname + this.lname)
    }
    display_N1()
    }
}
x1.display_N()        //Nan Nan display in vs code .it will be diplay webbrowser 


//program4
var firstname =  "pankhudi"
var lastname = "Tarale"

let p = {
    firstname  : "pankhudi",
    lastname : "Tarale",
    display:()=>{
        console.log(this.firstname + this.lastname)
    let display1=()=>{
        console.log(this.firstname+this.lastname)
    }
    display1()
    }
}
p.display()

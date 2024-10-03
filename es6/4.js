// // bind()--> bind return a function ,
// call() 
// apply()
// ----------------------------------------------program1
// let info = {
//     fname : 'ruchika',
//     lname : 'kumbhare',
//     display_name:function(){
//         console.log(this.fname + this.lname)
//     }
// }
// // info.display_name()
// let info1 = {
//     fname : 'ruchika',
//     lname : 'kumbhare',
// }


// let info2 = {
//     fname : 'Ritikka',
//     lname : 'kumbhare',   
// }


// let info3 = {
//     fname : 'priyank',
//     lname : 'kumbhare',
// }

// // let display = info.display_name()
// let display = function(){
//     console.log(this.fname + this.lname)
// }
// display=display.bind(info)
// display()

// -----------------------------------------------------program2




info1 = {
    fname : 'ruchika',
    lname : 'kumbhare',
}


info2 = {
    fname : 'Ritikka',
    lname : 'kumbhare',   
}


info3 = {
    fname : 'priyank',
    lname : 'kumbhare',
}
let display_aa = function(word){
    console.log(word + ' ' + this.fname)
}
display_aa()
let a = display_aa.bind(info2)
a()

display_aa.call(info1,"hyeee")
display_aa.apply(info3,['hyee'])

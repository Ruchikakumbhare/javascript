// short circuit operator 
// falsy values  - NaN , null , undefined , 0 , 4  < 2 
// truthy values -  1 , '1' , "c" ,true , 6 > 3
//-------------------------program1
//&& -->1 st false mila to short circuit
// let val = 3>2 && 'ruchi'    //1 st true hai isly 2 nd check kiya or output mila
// console.log(val)      //ruchi

// let val1 = 3>10 && 'ruchi'      //false mila short circuit hogya
// console.log(val1)     //false

// let val2 = 0 && 'ruchi'
// console.log(val2)      //0

// let val3 = null && 'ruchi'
// console.log(val3)     //null

// let val4 = undefined && 'ruchi'
// console.log(val4) 
 
// let val5 = ' ' && 'ruchi'
// console.log(val4)    //undefined

// let val6 = 3 && 'ruchi'
// console.log(val6)    //ruchi


//-------------------------program2
// || -->1 st value true hogye to short circuit krdenga
// let val1 = 0 || 2<1
// console.log(val1)  //false

// let val2 = 3>2 || 2<1
// console.log(val2)   //true

// let val3 = " " || 2<1
// console.log(val3)        //space 

// let val4 = 'ruchi'|| 2<1
// console.log(val4)        //true

//-------------------------program3
// null coalescing
// 0 -----> valid value 
// let a = 0
// let a1 =  a || 'ruchi'
// console.log(a1)

// if(a1>=0){
//     console.log('hye')
// }
//------------------------------------------

//null or undefined ??
// let a  = ' '?? 'rupal'
// console.log(a)
// let a1  = null?? 'rupal'
// console.log(a1)            //rupal
// let a2 = undefined ?? 'rupali'
// console.log(a2)
// let a3  = 'riya '?? 'rupal'
// console.log(a3)

//-------------------------program4
// optional parameter

let emp = {
    fname : 'raj',
    lname : 'kapoor',
    parent:{
        mname:'sunidhi',
        lname:'kapoor'
    },
    father:'sonu'
}
//console.log(emp.parent?.mothe) undefined
//console.log(emp.paren.mname) //Cannot read properties of undefined (reading 'mname')
console.log(emp.parent?.lname) //kapoor







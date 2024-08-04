// == , != ----->  values
//=== , !== ----> values and type
// ..................comparision operators

console.log(10 ==="10")       //false
console.log(10===10)          //true
console.log(10==10)           //true
console.log(10!=20)           //true
console.log(6<2)              //false
console.log(8>3)              //true

//....................Logical operators
// && // ||  !!
console.log(7==7 && 8!=5)     //true
console.log(9==5 || 3<=2)     //f || f  false
console.log(!(6==6))          //false


//....................conditional statement

//if(condi){
//statement
//}


let num = 60
if(num < 90){
    console.log("yes")
}
if(num <80){
    console.log("no")
}


let num1 = 60
if(num1 < 30){
    console.log("no")
}
else if(num1<40){
    console.log("yes")
}
else{
     console.log("inccorect")
}

let no = 100
if(no < 50){
    console.log("false")
}
else{
    console.log("true")
}


// ternary operators
a1=10
a2=20
a1 < a2 ? console.log("haan"): console.log("naaah")          //ternary haaa

age = 20
age < 21 ?console.log("not allow"):console.log("allow")

num = 40
num < 30 ? console.log("num is less "):console.log("num is greater")
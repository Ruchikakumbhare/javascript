//..................................strings methods..............................

//charAt(),trim(),trimStart()trimEnd(),startsWith(),endsWith(),toUpperCase(),toLoweCase(),replace(),slice(),spit(),includes()
//indexOf() ,concat() <--- 14 methods of strings

let dish = "AAlubhat"
console.log(dish.length) //8
console.log(dish)        
console.log(dish[0])      //A

//charAt()

let nam = " RUCHIKA "
let a =nam.charAt(5)
console.log(a)            // I

//trim
let nam1 =" ALKA "
console.log(nam1.length) //6
let a1 =nam1.trim()
console.log(a1)
console.log(a1.length)  //4

//trimStart
let a2=nam1.trimStart()
console.log(a2)

//trimEnd
let a3 = nam1.trimEnd()
console.log(a3)

//startsWith

let nam2="alka"
let a4 = nam2.startsWith("a")
console.log(a4)         //true

//endsWith
let a5 = nam2.endsWith("A")
console.log(a5)             //false

//include
let a6 = nam2.includes("al")
console.log(a6)             //true

//toUpperCase
let a7 =nam2.toUpperCase()
console.log(a7)          //ALKA

//toLowercase

//concat
let x = "papaya"
let y ="mango"
let z =x.concat(y)
console.log(z)       //papayamango

//indexOf
let x1= x.indexOf("p")
console.log(x1)       //0

//replace
let story = " i am a good girl."
let m =story.replace("good","bad")
console.log(m)

//split
let mail = "ruchika@123"
let n =mail.split('@')
console.log(n)          //[ 'ruchika', '123' ]


let my = "ruchika"
let sur = "kumbhare"
console.log(`my name is ${my} and my surname is ${sur}`)
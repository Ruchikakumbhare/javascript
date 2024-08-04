//..........................strings........................

// //let nam = "Ruchika"
// console.log(nam.length)   //7
// console.log(nam[2])

//loop
let nam = "Ruchika"
for(let i=0;i<nam.length;i++){
    console.log(nam[i])
}

let i = 0
while(i<nam.length){
    console.log(nam[i])
    i = i+1
}

let fname = "Ruchika"
let lname = "Kumbhare"
console.log(`my name is ${fname} and last name is ${lname}`)  //my name is Ruchika and last name is Kumbhare

//...................................................string methods.................................................
//charAt(),trim(),trimStart(),trimEnd(),startswith(),endswith(),indexOf(),includes(),concat(),
//toUppercase(),toLowercase(),replace(),split(),slice()

//charAt
let namee = "Sunidhi"
let a1 =namee.charAt(3)
console.log(a1)


//trim

let color = " blue "   //6
let a2=color.trim()
console.log(a2.length) //4

//trimStart

let a3 =color.trimStart()
console.log(a3.length) //5

//trimEnd
let a4 =color.trimEnd()
console.log(a4.length)  //5

//startswith
let color1 = "blue"
let a5=color1.startsWith('bl')
console.log(a5)           //true

//endsWith
let a6=color1.endsWith('e')
console.log(a6)          //true

//includes
let a7=color1.includes('lu') 
console.log(a7)           //true

//indexOf
let a8 =color1.indexOf('u')
console.log(a8)          //2

//concat
let color3 = "pink"
let color4 = "RED"
let my=color4.concat(color3)
console.log(my)    //redpink

//touppercase
let a9=color3.toUpperCase()
console.log(a9)  //PINK

//tolowercase
let a99=color4.toLowerCase()
console.log(a99)   //red

//replace
let info = "she is bad girl"
let p1 = info.replace("bad","good")
console.log(p1)        //she is good girl

//slice
let country = "America"
let p2 = country.slice(4) //             0 1  2 3 4 5 6
console.log(p2)           //  ica           A m  e r i c a

let p3 = country.slice(2,6)
console.log(p3)              //eric

//split()
let address = "ruchikakumbhare@123"
let m1= address.split('k')
console.log(m1)            //['ruchi','a','umbhare@123']

let m2= address.split('r')
console.log(m2)      //[ '', 'uchikakumbha', 'e@123' ]
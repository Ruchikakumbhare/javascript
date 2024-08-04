
//.................array methods............basic mthods
/*
//push()
let color = ["green","blue","yellow","levender"]
color.push("black")
console.log(color) //[ 'green', 'blue', 'yellow', 'levender', 'black' ]

//unshift()
color.unshift("white")
console.log(color) //[ 'white', 'green', 'blue', 'yellow', 'levender', 'black' ]

//pop()
color.pop()
console.log(color) //[ 'white', 'green', 'blue', 'yellow', 'levender' ]

//shift
color.shift()
console.log(color) //[ 'green', 'blue', 'yellow', 'levender' ]
*/

//push(), pop(), unshift ,shift, map(),filter(),reduce(),forEach(),find(),findIndex(),some(),every()

//................................map().............................
//program 1
let num = [10,20,30,40,50,60]
let a =num.map(function(el,ind,arr){
    return el + 2
})
console.log(a)     //output : [ 12, 22, 32, 42, 52, 62 ]
//prgram2
let year = [2001,2002,2003,2004]
let a1 =year.map(function(el,ind,arr){
    return 2024 - el
})
console.log(a1) //output :[23,22,21,20]

//................................. filter()........................
//program1
let num1 = [10,20,30,40,50,60]
let a2 =num1.filter(function(el,ind,arr){
    return el < 30
})
console.log(a2)  //output :[10,20]
//program2
let num2 = [-1,4,-5,60,70,8,-9]
let a3=num2.filter(function(el){
    return el<0
})
console.log(a3)  ///output :[-1,-5,-9]


//.............................. reduce().......................
//program1

let no = [10,20,50,60,60] //200
let a4 =no.reduce(function(acc,el,ind,arr){
    return acc +el
})
console.log(a4)

//................................... forEach().......................

let list = ["Itwari","wathoda","dighori","futala"]
list.forEach(function(el){
    console.log("welcome to", el)
})


//..................................... find()..........................
let no1 = [10,22,33,44,5,69]
let a5=no1.find(function(el,ind,arr){
 return el<30
})
console.log(a5)  //10

//....................................findIndex().......................
let a6=no1.findIndex(function(el){
    return el < 30
   })
   console.log(a6)  // 0 

//..................................... some().........................

let a7 =no1.some(function(el){
    return el <20
})
console.log(a7)    //true

//..................................... every()........................
let a8 =no1.every(function(el){
    return el <20
})
console.log(a8) //false
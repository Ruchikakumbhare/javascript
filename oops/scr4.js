let data = {
    fn :'neha',
    ln :'tarale',
    ag :22,
    12 :100    //string   -----------> object main datatype string hi hota hai  all keys are string
}
console.log(typeof data)


for(let key in data){
    console.log(typeof key)
}
// // map -
// // keys - values
// // keys can be any different datatype using map 

//.............................................map........................................
// ............ get() set() has(),clear(),delete(),keys(),values(),entries()
//         PROGRAM1
// this is empty map
let info = new Map()
console.log(info)
console.log(info.size)    //size of map is zero (.......size..........)


info.set(1,'FIRST') 
console.log(info)         //add the value using set(......set........)     size is 1  [ Map(1) { 1 => 'FIRST' }  ]
 
//          PROGRAM2

// define map with values

let info1 = new Map(
    [
        [1,"Ruchi"],
        [2,'neha'],
        [3,'khushi'],
        [4,'swati'],
    ]
)
console.log(info1)  //   Map(4) { 1 => 'Ruchi', 2 => 'neha', 3 => 'khushi', 4 => 'swati' }
let a =info1.get(1)  //if u want retrive any value so used get(..........get.........)
console.log(a)      //ruchi

let a2=info1.set(5,'pinki')
console.log(a2)     //update  and add the values u can used set method (.......set......)

info1.set(3,'dipti')
console.log(info1)   //updatw

let a3=info1.has(3)
console.log(a3)    //true (boolean indicating whether an element with the specified key exists or not.)
let a4=info1.has(8)
console.log(a4)      //false

if(info1.has(1)){
    console.log(info1.get(1))
}
else{
    console.log('not found')
}                                   // condition is true so ans is ruchi


//        PROGRAM3
let skill=['html','python','js']
let info2 = new Map(
    [
       ['firstname','Ruchika'],
       ['lastname','kumbhare'],
       [skill,3],

    ]
)
console.log(info2)
// info2.clear()
// console.log(info2)   //Map(0) {}


info2.forEach(function(x,y){
    console.log(x) //x is value and y is key  [value-key]
    console.log(y)
})

//we want to keys only !

for(let i of info2.keys()){
    console.log(i)
}

//print all values
for(let i of info2.values()){
    console.log(i)
}

for (let i of info2.entries()){ 
    console.log(i)                //output:      [ 'firstname', 'Ruchika' ]
}                                             // [ 'lastname', 'kumbhare' ]
                                      //       [ [ 'html', 'python', 'js' ], 3 ] 
    
info2.delete(skill)
console.log(info2)  //Map(2) { 'firstname' => 'Ruchika', 'lastname' => 'kumbhare' }









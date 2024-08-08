
let family = {father : "Sanjay" , mother : "Alka"}
let skill = ["Python","JAvascript"]
let data = new Map([
    [1,"Ruchika Kumbhare"],
    [family,"parent"],
    [skill , skill.length],
    [true,"yes"]
]  
)
console.log(data)
data.set(4,"service")
console.log(data)

console.log(data.get(skill)) //2

console.log(data.has(true))

data.delete(skill)
console.log(data)  //delete skill

// data.clear()
// console.log(data)  //Map(0) {}

// data.forEach(function(x,y){
//     console.log(x,y)
// })

for(let x of data.keys()){
    console.log(x)
}

for(let x of data.values()){
    console.log(x)
}
for(let x of data.entries()){
    console.log(x)
}

let setA = new Set([11,22,33,33])
console.log(setA)
console.log(typeof setA)        //object

let n = [11,22,33]
console.log(typeof n)           //object


//...................................
let richi = new Map(
    [
        [1,"Ruhi Kumbhare"],
        [2,134]
    ]
)
console.log(richi)
richi.set(3,"employee")
console.log(richi)
console.log(richi.get(2))
console.log(richi.has(1))
richi.delete(2)
console.log(richi)
// richi.clear()
// console.log(richi)
console.log(richi.size)
for(let k of richi.keys()){
    console.log(k)
}
for(let v of richi.values()){
    console.log(v)
}
for(let e of richi.entries()){
    console.log(e)
}
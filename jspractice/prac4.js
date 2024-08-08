//......................................practice1

let skill = ["html","css","js","py"]
let info = new Map(
    [
        ["namee","Ruchika Kumbhare"],
        ["age" , 22],
        ["branch","ECE"],
        [skill,"Skill"]
    ]
)

console.log(info)

//....................................practice2

let info1 = new Map(
    [
        ["firstname","Alka"],
        ["lastname","Kumbhare"]
    ]
)
console.log(info1)
let q =info1.set("city","Pune")
console.log(q)

console.log(info1.get("lastname"))


//.............................practice3

let info3 = new Map(
    [
        [1,"Dimple"],
        [2,"ishita"],
        [3,"priynaka"],
        [4,"akriti"]
    ]
)

console.log(info3.get(4))
console.log(info3.has(3))
let m =info3.set(5,"megha")
console.log(m)
info3.delete(1)
console.log(info3)
console.log(info3.size)
// info3.clear()
// console.log(info3)

for(let key of info3.keys()){
    console.log(key)
}

for(let val of info3.values()){
    console.log(val)
}

for(let e of info3.entries()){
    console.log(e)
}
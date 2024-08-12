
//.......................Map() method

let a1 = new Map(
    [
        [1,"priyanka"],
        [2,"riya"]
    ]
)
console.log(a1)

a1.set(3,"ruchi")
console.log(a1)

let q=a1.get(2)
console.log(q)

//clear //delete //size

for(let x of a1.keys()){
    console.log(x)
}

for(let x of a1.values()){
    console.log(x)
}

for(let x of a1.entries()){
    console.log(x)
}


//...............................Set() methods

let a2 = new Set([20,34,56,78])
console.log(a2)

a2.add(49)
console.log(a2)

console.log(a2.size)

a=a2.has(30)
console.log(a)

//delete clear  forEach

console.log(a2.keys())
console.log(a2.entries())



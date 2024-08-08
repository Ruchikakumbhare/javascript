//................................set method.....................

let n1 = new Set([22,33,44,55])
console.log(n1)
console.log(typeof n1)//object

let ne = new Map()
console.log(ne)
console.log(typeof ne)//object


//bLANCK Set
let n2 = new Set()
n2.add(21)
n2.add(44)
n2.add(50)
n2.add(404)
console.log(n1)
console.log(n2)

q=n2.has(21)
console.log(q)

n2.delete(44)
console.log(n2)

console.log(n2.size)
console.log(n2)

n2.forEach(function(el){
    console.log(el)
})

console.log(n2.keys())//[Set Iterator] { 21, 50, 404 }
console.log(n2.values())//[Set Iterator] { 21, 50, 404 }
console.log(n2.entries())//[Set Entries] { [ 21, 21 ], [ 50, 50 ], [ 404, 404 ] }
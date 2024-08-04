let fruit ={
    color:"red",
    fname:"apple",
    rate:50
}


//console.log(typeof(fruit))

console.log(fruit.color)
console.log(fruit['rate'])

fruit.color = "green"
console.log(fruit)

fruit.f = "mango"
console.log(fruit)

delete fruit.f
console.log(fruit)
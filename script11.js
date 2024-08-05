//......................................

let info = [
    {
        fname : 'stuti',
        lname : 'karmakar',
        age :20,
        city :'pune',
        favc:['red','green','blue']
    },
    {
        fname : 'Akrity',
        lname : 'Sharma',
        age :24,
        city :'Mumbai',
        favc:['yellow','pink']
    },
]

console.log(info[1].age)

//print name and lastname
info.forEach(function(el){
    console.log(` ${el.fname} ${el.lname}`)
})
  
//add year in both objects
info.forEach(function(el){
    el.year = 2024
})
console.log(info)



info.forEach(function(el){
    if(el.favc.includes('red')){
        console.log(el.fname)
    }
})


info.forEach(function(el){
    if(el.age>20){
        console.log(el.fname)
    }
})
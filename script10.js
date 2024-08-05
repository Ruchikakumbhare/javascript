//.........................destructing of object.....................................

//simple object dest
let info = {
    fname : "ruchika",
    lname : 'kumbhare',
    city : 'pune',
    age :20
}

let{fname :a, lname :b, city:c,  age:d} =info
console.log(a)
console.log(b)
console.log(c)
console.log(d)

//object inside objects

let info1 = {
    data:{
        fname : 'Riya',
        lname : 'sharma'
    },
    fmaily:{
        father:'yashwant',
        mother:'leela',
        brother :['siya','roma','niya']
    }
}

let{data:{fname:x,lname:x1},fmaily:{father:y,mother:y1,brother:[q,w,e]}}=info1

console.log(x)
console.log(x1)
console.log(c)
console.log(y)
console.log(y1)
console.log(q)
console.log(w)
console.log(e)
















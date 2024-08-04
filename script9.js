//...................................Destructing of array........................................

//simple array distruct
let namee = ['chaitanya','rohit','parag','harsh']
let[a,b,c,d] = namee
console.log(a)
console.log(b)
console.log(c)
console.log(d)

let num = [10,20]
let[x,y]=num
console.log(x)

let na = [['blue','green'],['black','white']]
let[x1,y1]=na
console.log(x1[0])
console.log(y1)


let color = ['pink','red']
let[m,n]=color
console.log(m)
console.log(n)



//array object distruct               //array ke andr object banaya

let info = [
    {
        fname:"Ruchika",
        lname:'Kumbhare'
    },
    {
        age:22,
        contact:123,
    }
]

let[{fname:q,lname:r},{age:p,contact:s}]=info
console.log(q)
console.log(r)
console.log(q)
console.log(s)


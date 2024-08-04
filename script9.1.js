let fruit = ['apple','mango','pineapple','grapes'] // simple array destruct
let[a,b,c,d] =fruit
console.log(a)
console.log(fruit)

let num = [1,3,4,567,7]
let[a1,b1,c1,d1,e1]=num
console.log(e1)
//console.log(num.length)

 // array main object destruct
// let info =[
//     {
//         fname:"Sujata",
//         lname:"patel"
//     },
//     {
//         age:25,
//         favfood:"dosa",
//     }
// ]

// let[{fname:x,lname:y},{age:x1,favfood:x2}]=info
// console.log(x1)
// console.log(x)
// console.log(y)
// console.log(x2)


//array main object of array
let info =[
        {
            fname:"Sujata",
            lname:"patel",
            skills:['c','c++']
        },
        {
            age:25,
            favfood:"dosa",
        }
    ]
    
    let[{fname:x,lname:y,skills:[q,w]},{age:x1,favfood:x2}]=info
    console.log(x1)
    console.log(x)
    console.log(y)
    console.log(x2)
    console.log(q)
    
//object destruct
    let data = {
        fname:'Ridhi',
        lname:'maheshwari',
        contact:123
    }

    let{fname:l1,lname:l2,contact:l3}=data
    console.log(l1)
    console.log(l2)
    console.log(l3)

    //multi object destruct

    let information = {
        fname:'soniya',
        lname:'Paradhi',
        contact:123,
        family:{
              papa:'Raghav',
              mummy:'preety'
        }
    }

    let{fname:q1,lname:q2,family:{papa:q3,mummy:q4}}=information
    console.log(q1)
    console.log(q2)
    console.log(q3)
    console.log(q4)
    
//program1:

let info1 = {
    fname : 'akrity',
    lname : 'sharma',
    number : 123,
    family:{
        dad:'sanskar',
        brother :['ram','ravi','pratik']
    },
    skill1:{
        skills:['c','c++','python']
    }
}

//output -----> ravi and python

let{family:{brother:[aa,bb,cc]}, skill1:{skills:[dd,ee,ff]}}=info1
console.log(bb)
console.log(ff)



// array methods

//sort
let list = ["riya","sonu","pinki","ridhi"]
list.sort()
console.log(list)

//reverse
list.reverse()
console.log(list)

//fill
list.fill( "not", 2)
console.log(list)

//flat
let list1 = [["i","m"],["a","q"]]
m =list1.flat()
console.log(m)

//at indexOf
let list2 = ["riya","sonu","pinki","ridhi"]
a1 =list2.at(2)
console.log(a1)

//indexOf
let a2 =list2.indexOf("sonu")
console.log(a2)

//join 
let a3 =list2.join("-")
console.log(a3)

//concat
let a = ["kooku","bird"]
let b = ["pigeon","cow"]
m1 = a.concat(b)
console.log(m1)

//slice
let list3 = ["riya","sonu","pinki","ridhi"]
q = list3.slice(2)
console.log(q)

//splice
let dish = ["dosa","samosa","idli","sambhar","paneer"]
q=dish.splice(1,3,"wada","pavbhaji")
console.log(dish)                         //[ 'dosa', 'wada', 'pavbhaji', 'paneer' ]
console.log(q)                           //[ 'samosa', 'idli', 'sambhar' ]


let list = {
    fname : "ruchika",
    lname : "kumbhare",
    contact : 1234567
}
console.log(list)
//c u r d

//retrieve
console.log(list.fname) //ruchika
console.log(list['lname'])//kumbhare

//add
list.city = "pune"
console.log(list)    //{ fname: 'ruchika', lname: 'kumbhare', contact: 1234567, city: 'pune' }

//update
list.fname = "riya"
console.log(list)  //{ fname: 'riya', lname: 'kumbhare', contact: 1234567, city: 'pune' }

//delete
delete list.city
console.log(list)  //    { fname: 'riya', lname: 'kumbhare', contact: 1234567 }

let list1 = {
    firstname :"neha",
    lastname : "tarale",
    contact : 123
}
for(let prop in list1) {
    console.log(prop,list1[prop])
}
//firstname neha
//lastname tarale
//contact 123
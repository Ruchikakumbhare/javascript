//polymorphism
//same class ,same method ,diff signature ----------->
//different class,same method,same signature -------->overriding

//Program1

class calcy1{
    addition(a=undefined,b=undefined,c=undefined,d=undefined) {
        if(a != undefined && b!=undefined && c!=undefined && d!=undefined){
                console.log(a+b+c+d)
        }
        else if(a != undefined && b!=undefined && c!=undefined){
            console.log(a+b+c)
        }
        else if(a != undefined && b!=undefined){
            console.log(a+b)
        }
    }
    }
    let a11 = new calcy1()
    a11.addition(1,1)     
    a11.addition(2,2,2)   
    a11.addition(2,2,3,2)

// program 2
// Different class ,same method name and same signature -----> overriding
class openbank{
    save(){
        console.log("save -openbank")
    }
    loan(){
        console.log('loan -openbank')
    }
}
class Kotak extends openbank{
    save(){
        console.log("save -kotak")
    }
    loan(){
        console.log('loan -Kotak')
    }
}
let a1 = new Kotak()
a1.save()//save -kotak
a1.loan()//loan -Kotak

// program 3

// class human{
//     talk(){
//         console.log("hello")
//     }
// }
// class Duck{
//     talk(){
//         console.log("quack Quack")
//     }
// }
// let x = new human()
// let y = new Duck()
// x.talk()
// y.talk()


//Program4

class human{

    talk(){
        console.log("hello")
    }
}
class Duck{
    talk(){
        console.log("quack Quack")
    }
}
class dog{
    bark(){
        console.log("bow bow")
    }
}
function call_talk(obj){
 if(obj.talk){
    obj.talk()
 }
 else if(obj.bark){
    obj.bark()
 }
 else{
    console.log("object doesn't know how to talk or bark!")
 }
}
let x = new human()
let y = new Duck()
let z = new dog()
call_talk(x)
call_talk(y)
call_talk(z)


//program5
class human1{
    talk(){
         console.log("hello Hii")
    }
}
class duck1{
    talk(){
        console.log("Quack!!")
    }
}
class Dog1{
    bark(){
        console.log("bhowww")
    }
}
class cat{
    song(){
        console.log("meooww")
    }
}
function call_talk(obj){
   if(obj.talk){
    obj.talk()
   }
   else if(obj.bark){
    obj.bark()
   }
   else{
    console.log("This animals object not found ")
   }
}

let c = new human1()
let d = new duck1()
let e = new Dog1()
let f = new cat()
call_talk(c)
call_talk(d)
call_talk(e)
call_talk(f)
  


//-------------Program1------------------Not correct way
class calcy{
      multiplication(x,y){
        console.log(x*y)
      }
      multiplication(x,y,z){
        console.log(x*y*z)
      }
      multiplication(x,y,z,p){
        console.log(x*y*z*p)
      }
}

let a1 = new calcy()
a1.multiplication(1,1)     //NaN
a1.multiplication(2,2,2)   //NaN
a1.multiplication(2,2,3,2) //24

//---------------Program2--------------------
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


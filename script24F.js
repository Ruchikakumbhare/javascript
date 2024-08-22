// //for loop with continue
// //print 1 to 8 
// for(let x = 1 ;x<=8;x++){
//     console.log(x)
// }//1 to 8 numbers

// //skip 6 number
// //program1
// for(let x = 0;x<=10;x++){
//     if(x==6){
//        continue
//     }
//     console.log(x)
// }
// //program1.1
// for(let i =1;i<=5;i++){
//     if(i==3){
//         continue
//     }
//     console.log(i)
// }                          //output 3 skip

// //program2
// let a = 10
// while(a>=1){
// if(a==6){
//    continue
// }
// console.log(a)
// a = a-1
// }

// //while loop continue
// let i = 1 //1
// while (i <= 5) { //1<=5 2<=5 3<=5 3<=5 3<=5
//     if (i == 3) { //1==3 2==3 3==3 3==3 3==3
//         continue
//     }
//     console.log(i) //1 2
//     i++//2 3
// }

// //1 2 4 5
// let i1 =2
// while(i1<=10){
//     if(i1==5){
//         i1++
//         continue
//     }
//     console.log(i1)
//     i1 = i1+1
// }
// //program
// let x = 0
// while(x<=10){
//     if(x==5){
//         x ++
//         continue
//     }
//    console.log(x)
//    x = x +1
// }


//inbuild method
//1 . Math.floor(10.878) //10
//Returns the greatest integer less than or equal to its numeric argument.
console.log(Math.floor(100.345)) //100
console.log(Math.floor(32.567))   //32
console.log(Math.floor(-32.334))  //-33
console.log(Math.floor(-48.5555))  //-49
//         -3    -2   -1   0  1  2   3
//        -36   -35   -34.87  -34  -33   0


//2. Math.ceil(67.99)
//Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.ceil(34.555)) //35
console.log(Math.ceil(60.777)) //61
console.log(Math.ceil(-76.9865)) //-76
console.log(Math.ceil(-65.77))  //-65
 //  -57   -56.55  -56   -55  -54   0


//3. Math.random()
// console.log(Math.random()) //0.0-0.99
console.log(Math.random())
console.log(Math.floor(Math.random() * 6)) //3
console.log(Math.floor(Math.random() *6) +1)
//1-6  random
// console.log(Math.floor(Math.random() * 6)) //0.0-5.99  //0-5

console.log(Math.floor(Math.random() * 6) + 1)//1-6

//Math.floor(2.749673507688761) //2
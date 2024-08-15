//for loop with continue

//1-10
//7 skip

// for (let i = 1; i <= 10; i++) {
//     if (i == 7) {
//         continue
//     }
//     console.log(i)
// }

//while loop continue

//1-5 3 skip

// let i = 1 //1
// while (i <= 5) { //1<=5 2<=5 3<=5 3<=5 3<=5
//     if (i == 3) { //1==3 2==3 3==3 3==3 3==3
//         continue
//     }
//     console.log(i) //1 2
//     i++//2 3
// }

//1 2 4 5

//1 2 ........

//solution
// let i = 1 //1
// while (i <= 5) {
//     if (i == 3) {
//         i++
//         continue
//     }
//     console.log(i)
//     i++
// }

//=======================================================================

//inbuild method

//1 . Math.floor(10.878) //10

// console.log(Math.floor(90.1123))//90
// console.log(Math.floor(46.8))//46
// console.log(Math.floor(-34.87))//-35
// console.log(Math.floor(-89.003))//-90

//         -3    -2   -1   0  1  2   3

//        -36   -35   -34.87  -34  -33   0

//=======================================================

//2. Math.ceil(67.99)

// console.log(Math.ceil(89.45))//90
// console.log(Math.ceil(67.24))//68
// console.log(Math.ceil(-56.55))//-56
// console.log(Math.ceil(-44.34))//-44

// //  -57   -56.55  -56   -55  -54   0

//========================================================

//3. Math.random()

// console.log(Math.random()) //0.0-0.99

//1-6  random
// console.log(Math.floor(Math.random() * 6)) //0.0-5.99  //0-5

console.log(Math.floor(Math.random() * 6) + 1)//1-6

//Math.floor(2.749673507688761) //2
//............switch case...............


//.............without break statement
let color = "red"
switch(color){
    case "green":
        console.log("mango")
    case "red":
        console.log("apple")
    default:
        console.log("incorrect")
}

//.................with break statement
let color1 = "red"
switch(color1){
    case "green":
        console.log("mango")
        break
    case "red":
        console.log("apple")
        break
    default:
        console.log("incorrect")
        break
}

//...............multiple case with break statement
let color2 = "red"
switch(color2){
    case "green":
    case "red" :
        break
        console.log("apple")
    case "orange":
    case "orange1":
        break
        console.log("kiwi")
    default:
        console.log("incorrect")
        break
}
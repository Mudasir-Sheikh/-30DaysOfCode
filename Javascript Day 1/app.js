// let size;
// size = "xl"
// size = size.toUpperCase()
// if (size == "XL"){
//     document.write("Your price is $300/=")
// }
// else if(size == "L"){
//     document.write("Your price is $260/=")
// }
// else if(size == "M"){
//     document.write("Your price is $200/=")

// }
// else if(size == "S"){
//     document.write("Your price is $150/=")
// }
// else{
//     document.write("Something went Wrong")
// }

let age =70;
switch(age){
    case(10):
    document.write("Very Young");
    break;
    case(20):
    document.write("Adult");
    break;
    case(40):
    document.write("Mature Adult");
    break;
    case(60):
    document.write("Old")
    break;
    default:
        document.write("Old and Lean")
}

let num1 =681;
let num2 =658;
ext1 = num1 % 10;
ext2 = num2 % 10;
if (ext1 === ext2){
    console.log("last digit is same")}
else{
    console.error("last digit are not same")
}
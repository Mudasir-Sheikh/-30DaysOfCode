// "This"  keyword:
// The this keyword in JavaScript is a special keyword that refers to the object that is currently executing the code.
//  Its value depends on how and where it is used.

const student = {
    name : "mudasir",
    age: 19,
    phy: 95,
    chem : 90,
    math: 85,
    getavg(){
        // let avg = (phy + chem + math)/3;  //phy,chem,math can not be accesed bcz they dont have object defined
        let avg = (this.phy + this.chem + this.math)/3; //this keyword refers to the current object, 
        // i.e our current student object , by using this keyword we can access the properties of the student object
        console.log(avg)
    }
}
console.log(student.name)
student.getavg()
 //in Simple, in objects the method can not access properties of object by itself we have to define the object for the method using this keyword.



 //Arrow fucntion:
//  a way of defining function in more compact way , used for passing these functions as arguments or callbacks
const ArrowFunction = (a , b) => {  //by using arrow.
    console.log(a+b);
}
ArrowFunction(4,5);

//Implicit vs Explicit:
// Explicit means we will tell Js what will return or what we want to return 
// Implicit means js will automatically return by itself , because of no other statements


//Syntax of Implicit return
//Implicit Return from Arrow function: js will understand automatically what we want to return ,
//  we can't write print,or any other return statement
const ImplicitReturn = (a,b) => (
    a*b
)
console.log(ImplicitReturn(4,5));

//"this" keyword with Arrow Function depends on Lexical Scope ---see video when needed.









//Set Time Out Function:  it takes function and time in milliseconds for executing this Function. its window obj func.
// setTimeout(function , time)

function greet (){
    console.log("NED University");
}

console.log("Hi, There!");
setTimeout(greet,2000); //3000ms = 1 sec  , also it will start its timer after executing all the code.
console.log("Welcome To");


//we can pass arrow function also;
setTimeout( () =>{ console.log("of Engineering and Tech.") } , 3000 );



//Set Interval Function: it also takes func and time but it will execute the function again and again
//  i.e infinite times after the given interval

// setInterval( () =>  { 
//     console.log("My set Interval Function");
// } , 2000);


//but since this runs infinite we can stop them by giving them ID's.
let id1 = setInterval(()=>{
    console.log("clearing Id1");
} , 1000);
console.log("ID of SETINTERVAL 1 =" ,id1);      //ID will automatically be assigned by js.


let id2 = setInterval(()=>{
    console.log("clearing Id2");
} , 1000);
console.log("ID of SETINTERVAL 2 =" ,id2);      //ID will automatically be assigned by js.

//iin order to stop them we use clearInterval;
clearInterval(id1);
clearInterval(id2);




let id3 = setInterval( () =>{
    console.log("Stoping third interval after 4sec")
} ,1000)

setTimeout( () =>{
    clearTimeout(id3);
} , 5000)
















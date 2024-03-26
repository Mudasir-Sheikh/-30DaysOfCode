//Scope in JS:
// --> scope Determines the accessibility of variables , objects and functions from different parts of the code
// 4 types of Scope 

// 1. Function Scope---> a variabe defined in a function will not be accessed outside the function. it will only be accessible
//  inside the function. Because function code does not occupy space or block of memory . when we call a functiona space 
// will be occupied in memory . but when the function work is finished its space will be vanished, that's why we cant
//  use function variable outside the function.

function funcScope(){
    let Func_Scope_Variable = "Hello"  //function scope variale declared.
    return Func_Scope_Variable
}
console.log(funcScope());
// console.log(Func_Scope_Variable); // will gives undefined error we can not use func variable outside function.


//2. Global Scope ---> A Global Scope variable can be accessed in anywhere or in entire code file.
let global_scope_variable = "Global"  //can be accesssed anywhere in code file.


//3. Block Scope ---> a variable which is defined inside a block i.e {---code--} can only be accessed inside the
//  block it will not be accessed outside the block. thats why we are using i variable in loop everytime and everywhere because 
// it is written inside a block of loop

{
    let x = 5;
    let y = 6;
    let xy = x*y;
    console.log(xy);
}
// console.log(xy); // will gives undefined error we can not use block variable outside block.



//4. Lexical Scope (Nested Functions) ---> A variable defined in outter function can be accessed inside the inner function
// defined in outer function. but its opposite is not True i.e a variable defined inside a inner function can not be accessed
// in outer function.
// Reason ---> when we call outer function a space of memory will be occupied that why we can use outer func variable
// inside inner func . but when we use inner variable ouside outter func but since there is no memory for outter func
// it will be undefined and we can also not access inner func without calling outer func because inner func is define
//  inside the outer func.

function outerScope(){
    let a = 5;
    let b =5;
    function inner(){
        let c = 5;
        console.log(a+c);  //outer variable "a" is accessed in inner function.
        let d = 5;
    }
    inner();
    // console.log(b+d);  //Inner variable "d" will not be accessed in outer func.

}
outerScope();

// inner()
//will give error bcz it is defined inside the outter and we are not calling outter so no memory will occupied.

//NOTE::
// Lexical and Block scope does not apply on var keyword thats why in 2015 JS introduce let keyword these scope are applied
// on let keyword And Thats The main Difference In let and var Keywords for Defining a Variable




//Function Expression (another way of defining function through variable);
const sum = function(a , b){ //nameless Function saved in constant variable
    return(a+b);
}
//calling function through variable
console.log(sum(1,2));



//HIGHER ORDER FUNCTIONS:
//  A function does one or both things:
// 1. takes one or more function as arguments
// 2. return  a functions

// 1. Takes One or More Function as arguments
function multipleGreet(func, count){
    for (let i=1; i<=count; i++ ){
        func(); //calling  a func count times
    }
}

let greet = function(){
    console.log("Greetings!")
}

multipleGreet(greet,4);
// multipleGreet(greet(),4)  // gives error bcz we are passing greet() and it will start executing greet 
// thats why we pass greet and in multiplegreet function it will be called inside it



// METHODS
// Actions that can be performed on a object OR A function which is defined inside an object is known as method.
// methods are only called by dot operator with object i.e object.method(val)

const Calculator = {        //Object literal --> key=value pairs
    add : function(a,b){
        return (a+b);
    },
    sub: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b
    }
}

add = Calculator.add(1,1)
console.log(add)


//Another way of defining functions in OL, we do not need of writing function keyword , JS automatically identify it.
const calculator = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}
console.log(calculator.add(2,3));
 



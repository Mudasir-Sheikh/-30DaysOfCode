//Functions:
// A Function is a piece/block of code , by using function we can increase reusabilty of our logic/piece of code again
//  and again rather then writing the full block of code again
//  syntax:
// function functionName() {
//     block of code
// }

// Calling function ---> functionName()

function hello() {
    console.log("Hello")
}


//Functions With Arguments i.e we can pass a value to a Function

function printName (name){
    console.log("Hello ,"+name);
}


function isAdult(age){
    if (age>=18){
        console.log("Adult")
    }
    else{
        console.log("Not Adult")
    }

}


function PrintNumber_1_to_n(n){
    for (let i=1; i<=n; i++){
        console.log(i)
    }
}


function $2_DicesRoll(){
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2= Math.floor(Math.random() * 6) + 1;

    console.log(`Your Dices are  ${dice1} and ${dice2}`); 
}


function table(n , times){
    console.log("Table of "+n);
    for (let i = 1; i<=times; i++){
        console.log(`${n} x ${i} = ${n*i}`);
    }
}

function average (n1,n2,n3){
    let avg = (n1 + n2 + n3)/3;
    console.log(`Average of 3 Numbers is '${avg}'`);
}

//Calling the Functions:
hello();
printName("Mudasir");
isAdult(15);
PrintNumber_1_to_n(12);
$2_DicesRoll();
table(3,8);
average(4,5,6);



//Return From a Function:
// return keyword is used to return a value from a function 


function average (n1,n2,n3){
    let avg = (n1 + n2 + n3)/3;
    console.log("Hellooo")
    return avg;
}
 let a = average(7,8,9);
console.log(`Average of 3 Numbers is '${a}`);

let a1 = average(average(1,2,3),4,5);
console.log(a1);

//Function can not return multiple values or objects
//If we want to return multiple values or objects we can use array i.e its a single object.

function sumFrom1ToN(n) {
    let sum =0;
    for (let i=1; i<=n; i++){
       sum = sum+i;
    }
    return sum;
}

let sum = sumFrom1ToN(5);
console.log(sum);



//Method 1 by using for-of loop method;
function concatArray1 (array){
    let string = ""; //assigning empty string.
    for (strings of array){
        string = string + strings + " ";
    }
    return string;
}

let join = concatArray1(["This","Array","is","Joined","using","for of Loop"]);
console.log(join);



//Method 2 by using for-loop method;
function concatArray2(arr){
    let result = "";  //assign a empty string to it, if not the first value which will bw concanted will be undefined
    for (let i=0; i<arr.length; i++){
        result+=arr[i];
    }
    return result;
}

let concated = concatArray2(["This","Array","is","Joined","using","for Loop"])
console.log(concated);


//Method 3 by using built-in method;
function concatArray3(arr){
    let joined = arr.join(" ");
    return joined;
}

arr = concatArray1(["This","Array","is","Joined","using","Built-in Join() Metheod"])
console.log(arr);
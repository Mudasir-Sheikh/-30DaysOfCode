//Defeault parameters in Function;
//i.e if the function is required arguments and if no arguments were assigned so there must be some defeault values to run the function

function sum(a=0 , b=0){
    return a+b;
}
console.log(sum()) //defeault values will automatically be assigned
console.log(sum(4,5)) //overwrite the defeault values.
console.log(sum(4)) //a = 4 but b will be deafeault value js works on sequence


//Spread(...object-name): It expands the iterable(arrays,strings,obj-literals) into multiple values.
// ON ARRAYS::
Math.min(0,1,2,3,4); //gives 0
arr = [0,1,2,3,4,5,6]
// in order to find min in array we can not use math.min on array i.e Math.min[arr] gives error
console.log(Math.min(arr[0],arr[1],arr[2],arr[3],arr[4]));

//but by using array
console.log(Math.min(...arr)); 
//spread iterates through object and print its value one by one.


//ON STRINGS::
var sentence = "Mudasir Shaikh";
console.log(...sentence);


//Making Copying of Array Literals:
var my_array = [2,3,4,5,6];
var new_arr = [...my_array];
console.log(new_arr); //makes copy of old array 


//separating the strings and saving
let char = [..."Sentence"];
console.log(char);


//Concatenating two arrays and make a copy
let odd = [1,3,5,7,9];
let even = [0,2,4,6,8,10];
let num = [...odd , ...even];
console.log(num);

let new_num = [even , odd];
console.log(new_num); // it makes array in which two arrays will be stored.i.e 2D array



//ON - OBJECT LITERAL::
let data = {
    username: "mudasir",
    email: "mudasir123@email.com",
    password:123345
}
//Making Copy and we can also add new data if needed;
let newdata = {...data , id:446 , country:"Pakistan"};
console.log(newdata);


// if we want to make object of array or strings 
let array =  [1,2,3,4,5,6]; //only keys 
let arrayObject = {...array} //key=value
console.log(arrayObject); //it assigns index as a key to the value

let strings = "hello world"
let stringsObject = {...strings};
console.log(stringsObject); //assigns index as a key to the spread values.


















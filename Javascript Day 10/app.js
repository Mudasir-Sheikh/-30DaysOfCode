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




//Rest Function --> Allows a Function to take indefinite number of arguments and bundle them into an array.

function mysum(...args){       //it takes indefinite arguments and convert/bundle them into an array.
    for (let i=0; i<args.length; i++){
        console.log("You gave us : ",args[i]); //that's why we are able to use array methods
    }
}
mysum(1,2,3,4);


function min(a,b,c,d){
    console.log(arguments); //every function has a collection object which collects their data known as arguments
                            //but we can not apply any method on them thats why there built-in auto collection is 
                            // not useful at all thats why we use rest method to covert the collection into an "Array"  
}
min(1,2,3,4);


//Creating Sum Function using Rest method;
function my_sum(...args){
    return args.reduce( (sum , ele) => {
        return sum+ele;
    })
}
console.log(my_sum(1,2,3,4,5));


//Creating math.max function;
function math_max(...args){
    return args.reduce((max , current) => {
        if( current > max){
            return current;
        }else{
            return max
        }
    })
}
console.log(math_max(33,-66,-1,12,76,45,10));



//Destructuring --> Storing Values of arrays or object literals into mutiple variables;
//On-ARRAYS
let names = ["Mudasir","Ali","Owais","Rohan","Mesum"];
let winner = names[0];
let $2nd = names[1];
let $3rd = names[2];
//in order to reduce this work or easen this we use Destructuring.

let [winnerr , secondWinner , ThirdWinner] = names; //it works on left to right sequence
console.log(winner,$2nd,$3rd)

let students = ["Mudasir Shaikh","Ahmed Ali","Owais Alam","Rohan Khan","Mesum Abbasi" ,"Abdul Baseer"];
let [ first, second , ...others] = students;
console.log(first, second , others);


//ON OBJECT LITERALS;
const student = {
    name: "Muhammad Mudasir",
    phone_no: 111222333,
    city:"karachi",
    dept : "CIS",
    year:"2nd Year",
    age:19,
    username: "mudasir123",
    password: "abcd123"
}



const { username , password} = student; //username and password keys are searched in the object and 
                                        // then value will be assigned to them
console.log(username , password);  


//but if we want our own custom variable name which stores the key value then;
const {username: user , password: secret , city} = student //new user will assigned to username value , same as for password
console.log(user , secret ,city);

const{ place:location="Block ABC NewCity" } = student; //we can also give defeault value incase the key is not found.\













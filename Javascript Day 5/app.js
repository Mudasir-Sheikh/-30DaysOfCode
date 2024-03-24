// Object Literal: unlike Arrays which are used to store collection of data 
// but, object literals are used to store keyed collections and complex entities. like a dictionary.
// Property = (key , value) pair
// collection of properties is called Object literal




////Example 01
// let obj_literal = {
//     name: "mudasir",       // property 1
//     age: 23,              // property 2
//     email: "mudasirshiakh@email.com"     // property 3
// }
// console.log(obj_literal);

////Example 02
// const item ={
//     price: 100.9,
//     discount: "No discount Today",
//     colors: ["red","blue","yellow"]
// }
// console.log(item)

////Example 03 Creating a Post
// let post = {
//     username : "Mudasir-Sheikh",
//     content: "@ this is My firstPost",
//     likes: 200,
//     reposts: 12,
//     tags: ["maira","kinza","maham"]
// }
// console.log(post);



// Geting values of Object Literal:
let student  = {
    name: "Muhammad Mudasir",
    dept: "CIS",
    Year: 2,
    ID: 112233,
    77:"77 num",  //We can even use number as a key.
    true: "really" //even boolean can be used as a key.
    //Because JS Covert all the keys into string thats why we are able to use them.
}
console.log(student);
// Two Methods are there:
// 1. Object_Name["Property"]
// 2. objectName.Property
console.log(student["name"]);
console.log(student.name);
// console.log(student.77) //gives error we can not use .dot operator with number.
console.log(student.true) 


let get_ID = "ID";
console.log(student[get_ID])  // Right because we pass a string 
console.log(student.get_ID) //----> gives Error/undefined bcz js dont know what we want.


// Adding or Updating the existing Value or Deleting property.
let new_array = {
    name:"Mudasir",
    age:20,
    city:"lahore",
    country:"Pakistan",
    delete_this: "Delete this property",
}
//1. Updating: Just access the property and assign it to New Value.
console.log(new_array);
new_array["name"] = "Mudasir-Shaikh";
new_array["city"] = "Karachi",
console.log(new_array)


//2. Adding New Value: Same Procedure if there is old property then it will replace by new one, otherwise new property will be created.
new_array.newproperty = "my new property";
console.log(new_array);

//3.Deleting a value : use delete keyword against that property.
delete new_array.delete_this;  //--OR--  delete new_array["delete_this"]
console.log(new_array);




// Objects Of Object OR Nested Objects 
const ClassInfo = {
    mudasir:{
    roll_no:"CS--22135",
    section:"B",
    city:"Karachi"
    },
    rohan:{
        roll_no:"CS--22070",
        section:"A",
        city:"Lahore"


    },
    owais:{
        roll_no:"CS--22071",
        section:"C",
        city:"Islamabad"
    },
}


//Array of Objects:
// In an Array , there are object literals i.e collection of collection of data.
const CIS_DEPT = [
    First_year = {
        students:300,
        classes : 12,
        tech: "AI Field"

    },
    Second_year = {
        students:400,
        classes : 15,
        tech: "ML Field"
    }
]
// In Above , we used firstyear and secondyear they are not accessible by object , rather they are access by index so
// its useless to assign a variable to the object literal.
const CIS_DEPT1 = [
    {
        students:300,
        classes : 12,
        tech: "AI Field"
    },

    {
        students:400,
        classes : 15,
        tech: "ML Field"
    }
]
//In this way we can use array of objects.





// Math Objects:
// Some Popular Methods 
console.log("Math Functions:")
console.log(Math.abs(-20))  //gives absolute(positive) value
console.log(Math.pow(5,3)); //gives power of a to b
console.log(Math.floor(9.9999)) //round off to lower value
console.log(Math.ceil(9.0001)) //rount off to upper value
//Random Generator function:
console.log(Math.random()) //generates a random no. from 0 to 1 (1 is exclusive);


//Random Integers from 1 to 10;
let num = Math.random() //generates 0 to 1
num = num * 10;  //generates 1 to 9 bcz 0 and 1 are exclusive so inorder to make range 1 to 10 add +1
num = Math.floor(num) // Round off to lower value
num = num + 1; 
console.log(num);


//A short Method one statement is,
let random = Math.floor(Math.random() * 100) + 1;
console.log(random);



// Guessing Game
let max_num = prompt("Enter The Maximum Number of Guessing Game") 
let user_input = prompt("Welcome to Our Guessing Game","Guess a Number From 1 to "+max_num);
let random_num = Math.floor(Math.random() * max_num ) + 1;

while (true){
    if (user_input==random_num){
        console.log("Congralutaions! You Won The Game\n random Number was:"+random_num)
        break;
    }
    else if (user_input>random_num){
        console.log("Please Guess a Lower Number")
        user_input = prompt("Please Guess Another Number")
    }
    else if (user_input<random_num){
        console.log("Please Guess a Higher Number")
        user_input = prompt("Please Guess Another Number")

    }
    else if (user_input=="q"){
        console.log("You Lost");
        break;

    }
    else{
        console.log("Please Enter Valid input")
        user_input = prompt("Try Again , Guess a Number")
    }
}
























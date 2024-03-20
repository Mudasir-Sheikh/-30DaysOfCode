// Strings Concatenation
let First_name = "Muhammad";
let last_name = "Mudasir"
let full_name = First_name + " " + last_name
console.log(full_name)

let word = "Hello World";
let num = 123;
let final = word + num; //string type + number type results in String Data type.
console.log(final);
console.log(typeof(final));

// to print double quotes in string 
let quote = 'this is my quotation "Do Good Get Good". ';
console.log(quote);

// String Indices in JS 
//JS is 0 based indexing language
 let Name = "Tony Stark";
 console.log(Name[0]); //accessing first character
 console.log(Name[3]); //accessing 4th character

 console.log(Name.length) //gives length of string

 console.log(Name[Name.length-1]) // since we dont know last index and negative index dont work so we first find length 
//  of string and subtract 1 from it bcz length start from 1 and index start from 0.


//Strings Methods:
//Methods are the action that can be performed on Objects

// 1. at() Method --> the method takes index and return character at given index Note: -ve Indexes are allowed.
console.log(Name.at(0))
console.log(Name.at(-1))

//2. Slice(start,end-->indexes) it extracts a copy/part of the string.
let message_ = "Greetings from me"
newmessage= message_.slice(0,9);
console.log(newmessage)

// 3.Trim Method --> it removes whitespaces from both ends of strings and returns a new string.
let message = "  Hello   Sir   "
new_message = message.trim()
console.log(new_message);

//4.Replace() --> replaces a specified value with another value in a string .
console.log(message_.replace("me","Mudasir"))

//5. toUppercase , toLowercase
console.log(message_.toUpperCase())

//6.Split("at which you want to split ") --> it spilts the string and converts into Array
let sentence = "This is my split method";
new_sent = sentence.split(" "); //split the string on whitespaces
console.log(new_sent)








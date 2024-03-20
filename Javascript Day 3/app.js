//Arrays
//It is a Collection of Data , and array occupy continous/linear spaces in memory.
// let myArray1 = ["this" , "is","my","Array"]
// let myArray2 = [2,4,6,8,0]
// let myArray3 = ["this",1,"is",2,true,null,"my",false,"Array"] //mixed array

//Initializing empty array
var students_name =[]

//Initializing empty array object
var students_name_obj = new Array()

//Strings array
var string_Arr = ["computer","laptop","desktop","pc","mouse","keybord"]

//Numbers array
var number_Arr = [1,2,3,4,5,6]

//Boolean array
var Boolean_Arr = [true,false]

//Mixed array
var mixed_Arr = ["workstation",100,true,"helloworld",null,200,false]

//Storing qualifications in an array
var qualification_array = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
console.log(qualification_array)

//Length Function of array
console.log(qualification_array.length)


//Arrays are Mutable i.e their values can be changed without creating new.
let welcoming = ["Hello", "Sir","Welocome","to", "our","Retaurant"]
console.log(welcoming)
welcoming[1] = "ma'am";
console.log(welcoming)




//Arrays Methods:
// 1.Push --> it add the value at the last/end index --Multiple values can be pushed at once i.e push("val1","val2","val3")
welcoming.push("Woah!, added at last index");
console.log(welcoming)
//2.Pop --. removes the value at last index.
welcoming.pop("Woah!, added at last index");
console.log(welcoming)


// 3.Unshift --> it add the value at the First index --Multiple values can be pushed at once i.e unshift("val1","val2","val3")
welcoming.unshift("Woah!, added at last index");
console.log(welcoming)
//4.Shift --. removes the value at First index.
welcoming.shift("Woah!, added at last index");
console.log(welcoming)

//5.Splice(start,deleteCount,item...,Nth item) --> used for deleting and adding in custom/middle indexes.
let myfriuts = ["Mangoo","orangee","bananaa","pineapplee","grapee","berriess","kiwii"]
myfriuts.splice(2,3,"chiku","lemon") //deletes 3 items from index 2 and add values at index 2
console.log(myfriuts)
myfriuts.splice(0,0,"carrot") //deletes 0 items but adds value at index 0
console.log(myfriuts)


//6. Slicing(index(starting) , length(ending)) the Array . -ve indexes are allowed
//Original array will be changed.
let friuts = ["Mango","orange","banana","pineapple","grape","berries","kiwi"]
console.log(friuts.slice(2))  //starting index 2 ending index by defeault -1
console.log(friuts.slice(1,4))
console.log(friuts.slice(4,5))
console.log(friuts.slice()) // by defeault (0,-1)

//7.sort() --> sorts the array in assending order but only works on strings or characters
// it doesn't work on numbers bcz it first convert numbers into strings and then sort the array a/c to codes 
// resulting in wrong sequence
console.log(friuts.sort())

//On Numbers it sorts i.e on length of number i.e 1000 comes on first index
var score_arr = [780,315,440,512,490,695,552,780,1000] //Unsorted Array
var score_arr_sorted = score_arr.sort() //sorts the array but wrong
console.log(score_arr_sorted)




//5.indexOf() --> gives index of the given value gives -1 of not found
let primary = ["red","yellow","green"]
console.log(primary.indexOf("yellow"))

//6.Inclues() --> it search for an value gives true if found otherwise false.
console.error(primary.includes("orange"))

//7.Concat(2nd array) --> merges 2 arrays
let secondary = ["orange","black" ,"white"]
let finalarray=  primary.concat(secondary)
console.log(finalarray)

//8.Reverse --> it reverse the array
console.log(primary.reverse())


//Nested / MultiDimensional Arrays:
// array[num][col] for accessing value of array of parent array
let $2Darray = [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15]] //2D Array 
console.log($2Darray)
console.log($2Darray.length) //gives length of array
console.log($2Darray[0].length) // gives length of array of 1st index array of parent array
console.log($2Darray[2]) //gives 2nd index array
console.log($2Darray[2][0]) // gives 0th index of the 2nd index array of the parent array


// Tic Tac Toe game using Nested Array 
let game = [["X",null,"O"],[null,"X",null],["O",null,"X"]]
console.warn(game)














//Question 08
var studentName = []
studentName.push("Ali","Saad","Saif"); //Using declared array above by push method.
var studentsMarks=[281,320,430]
var totalmarks=500
document.write("Score of Ali is ",studentsMarks[0]);
document.write(" Percentage: ",studentsMarks[0]/500*100,"%<br>")
document.write("Score of Saad is ",studentsMarks[1]);
document.write(" Percentage: ",studentsMarks[1]/500*100,"%<br>")
document.write("Score of Saif is ",studentsMarks[2]);
document.write(" Percentage: ",studentsMarks[2]/500*100,"%<br><br>")



//Question 09
var colors = ["yellow", "orange","red","blue","green"]
document.write(colors)






//Question 11
var city_Names = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
var seleted_cities = city_Names.slice(2,4)
console.log(city_Names)
console.log(seleted_cities)


//Question 12
var sentence = ["This","is","my","cat"]
var joinsentence = sentence.join(" ");  //The join method takes one parameter in string which is used for
// joining/concatenating the all values of Array, by defeault is comma "," , In this case space is given
console.log(sentence)
console.log(joinsentence)


//Question 13
// First In First Out Rule Using unshift for first-in and pop for first out
console.log("First-In-First-Out")
var storevalues = []
storevalues.unshift("Value 1")
console.log(storevalues)
storevalues.unshift("Value 2")
console.log(storevalues)
storevalues.unshift("Value 3")
console.log(storevalues)
storevalues.unshift("Value 4")
console.log(storevalues)


storevalues.pop()
console.log(storevalues)
storevalues.pop()
console.log(storevalues)
storevalues.pop()
console.log(storevalues)
storevalues.pop()
console.log(storevalues)


//Question 14 
//Last-In-First-Out
console.log(" ")
console.log("Last-In-First-Out")
var storevalue = []
storevalue.push("Object 1")
console.log(storevalue)
storevalue.push("Object 2")
console.log(storevalue)
storevalue.push("Object 3")
console.log(storevalue)
storevalue.push("Object 4")
console.log(storevalue)




storevalue.pop()
console.log(storevalue)
storevalue.pop()
console.log(storevalue)
storevalue.pop()
console.log(storevalue)
storevalue.pop()


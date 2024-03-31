//Advance Array Methods

// 1.For Each --> it iterates through each element of array , but now a days  for-of loop is used.
//it takes function as a argument to perform iteration of each element on given function.
let myarr = [1,2,3,4];
function print(el) {
    console.log(el)
}

myarr.forEach(print);
// OR
myarr.forEach(function(el){
    console.log(el);
})

//Working on 2D Array Object;
const data = [{
    name:"Mudasir",
    email:"mudasir123@email.com",
    id:111
},{
    name:"Rohan",
    email:"rohan123@email.com",
    id:222
},{
    name:"Owais",
    email:"owais123@email.com",
    id:333
}]

data.forEach(function(student){
    console.log(student);         //printing student data
})

data.forEach(function(student){
    console.log(student.email);  //gives email
})



// 2.Map Function --> its similar to foreach function but unlike foreach it also returns a new copy of array of same size of the original array
// let newarray = array.map(function); ---> syntax

let num = [1,2,3,4,5,6,7,8];
let doubleNum = num.map(function(element){
    return element*2;
})
console.log(doubleNum);

//Another example of Showing that it returns array of original size/length;
let evennum = num.map(function(el){
        if(el%2==0){
            return el;
        }
})
console.log(evennum); //it gives array of even no. but having length of 8 representing undefined at false statement



// 3.Filter --> its iterates on each elemnt and returns new Array based on condition i.e it push when true ,
//  false otherwise. its similar like map but its length can be vary based on given conditions unlike map func.
let oddnum = num.filter(function(el){
    if(el%2!==0){
        return el;
    }
})
console.log(oddnum); //returns odd number array with vary length. 


// 4. Every (And Functionality)--> It returns True if "every" element of array gives True for some condition. Else returns false.
let every_ = [1,2,3,4,5].every(function(el){ return el%2==0});
console.log(every_)  //gives false bcz 1,3,5 are not even

let every__ = [1,2,3,4,5].every(function(el){ return el<10});
console.log(every__) //gives true bcz every el is >10


//5. Some(OR Functionality)--> It returns True if "any" element of array gives True for some condition. Else returns false.
let some = [1,2,3,4,5].some(function(el){ return el%2==0});
console.log(some)  //gives true bcz 2,4 are even.

let some_ = [1,2,3,4,5].every(function(el){ return el>10});
console.log(some_) //gives false bcz every el is <10


//6. Reduce( function (accumulator , element)) --> Reduces the Array to a single value.
//Example with illustration:
let numbers = [1,2,3,4,5];
let sum = numbers.reduce(function(result,element){
    return (result + element);
})
console.log(sum) //result is 15

// Logic: 
// 1. res = 0 , ele =1 --> returns 1 (res+el)
// 2. res = 1 , ele =2 --> returns 3 (res+el)
// 3. res = 3 , ele =3 --> returns 6 (res+el) and so on.
// During the starting/First iteration the accumulator will be empty i.e 0 and when the element returns 
// its value it will be stored in the accumulator and when the second iteration occurs the intialization value
// of accumulator will be previous returned value so the the iteration occurs and new value of accumulator
// will always be previous one returned by the element by doing some work.

//Example Finding Maximum value in an Array Using Reduce Method.
let arr = [1,14,45,23,95,11,-22,0,31,-33,5,67];
let Max_arr = arr.reduce((max , current) => {     //using arrow function
    if (max > current){
        return max;
    }else{
        return current;
    }
    }
)
console.log(Max_arr);


//Practice Question.
//1. check if all no.s are multiple of 10
let multiple_Of_10 = [12,20,35,40,50,60,76].every((element) => { 
    return element%10==0});
console.log(multiple_Of_10);


// 2. create minimum checker function.
function Getmin(array){
    let minimum = array.reduce((min , current) => {
        if (current > min){
            return min;
        }else{
            return current;
        }  
    })
    return minimum
}

let myarray = [0,22,56,-23,55,94,-124,39,-2,47,15];
console.log( Getmin(myarray) );

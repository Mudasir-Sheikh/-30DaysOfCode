// //Loops : A loop is a control structure that is used to iterate a piece of code based on condition.

// // 1.For loop
// //syntax:
// // for (initialization; condition; increment/decrement ){
//     //Block of Code  }

// for (let i = 1 ;i<=10; i++){  //Forward Loop
//     console.log(i)
// }

// for (let i=10;i>=0;i--){    //Backward Loop
//     console.log("Hello",i)
// }


// // console.log(i)
//  //results error bcz i is not defined, but we initaliaze i in for loop, the reason is that all the variables
// //  which are initialized in for-loop are only limited to local space i.e they can not be accessed by globally.

// console.log("Printing Odd numbers from 1 to 15")
// for (let j=1; j<=15; j+=2){
//     console.log(j)
// }


// console.log("Printing All Even numbers from 0 to 10")
// for (let k=1; k<=10; k+=2){
//     console.log(k)
// }

// // //Infinite Loops
// // for (i=0; i>=0 ; i++){
// //     console.error(i)
// // }



// // Multiplication Tables 
// //Method 1 ---by Multiplying;
// let mytable = 5;
// console.log(`Multiplication Table of ${mytable}`)
// for (let i=1;i<=10;i++){
//     console.log(`${mytable} x ${i} = ${mytable*i}`);
// }

// //Method 02 ---by Adding;
// let n = 4;
// console.log(`Multiplication Table of ${n}`)
// for (let i=n; i<=40 ; i+=4 ){  //increment 4 in every i
//     console.log(i)
// }



// // Advanced Multiplication table 
// // Table and its times are provided by user through propmt and also defeault times condition is set 
// // let table = +prompt("Which Multiplication Table You Want?");
// // let times = +prompt("How much Times You Needed","By defeault is 10 times");
// // if(isNaN(times)){
// //     document.write(`<h1>Multiplication Table of ${table}</h1> <br>`)
// //     for (let i=1; i<=10; i++){
// //         document.write(`${table} x ${i} = ${table*i}<br>`)
// //     }
// // }
// // else{
// //     document.write(`<h1>Multiplication Table of ${table}</h1> <br>`)
// //     for (let i=1;i<=times;i++){
// //         document.write(`${table} x ${i} = ${table*i}<br>`);
// // }
// // }


// //Nested For Loops:
// for (i=1; i<=2; i++){
//     console.log("Outer Loop ",i)
//     for (let j = 0;j<=5; j++){
//     console.log("Inner Loop ",j)
//     }
// }



// // 2. While Loop

// // syntax:
// // -iniliazation
// // while (Condition){
// //     block of code
// //     increment/decrement
// // }

// let k = 0;
// while (k<6){
//     console.log(k);
//     k++;
// }

// let m=5;
// while(m>=1){
//     console.log("Nice!",m);
//     m--;
// }


// // Odd Numbers using while loop
// let n_ = 1;
// while (n_<=15){
//     console.log(n_);
//     n_+=2;
// }


// // FavouriteMovie Guess Game 
// // Method 1: (by Own logic)

// let fav_movie = "Avatar";
// while (true){
//     let user_inp = prompt("Guess the Favourite Movie Game" , "Enter Movie Name").toUpperCase();
//     if (user_inp == fav_movie.toUpperCase()){
//         document.write("Congralutions! , You Won the Game <br> The Favourite movie is :",fav_movie);
//         break;
//     }
//     else if(user_inp == "QUIT"){
//         document.write("You Lost!<br>");
//         break;
//     }
//     else{
//         document.write("Try Again :( <br>")
//     }

// }

// // Method 2 (by Delta)
// const FavouriteMovie = "AVENGERS";
// let guess = prompt("Favourite Movie Guess Game","Enter the Movie name").toUpperCase();
// while ((guess != FavouriteMovie) && (guess!= "QUIT") ) {
//     guess = prompt("Wrong Guess, Try Agian");
// }
// if (guess == "QUIT"){
// document.write("You Lost")
// }
// else{
// document.write("You Won")
// }

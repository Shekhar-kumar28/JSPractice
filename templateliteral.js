// let pencilPrice = 10;
// let erasorPrice = 5;
// // console.log("The total price is :" ,pencilPrice + pencilPrice,"Rupees")

// console.log(`Your pay ${pencilPrice+erasorPrice} rupees`)


// conditional Statement
// -- if-else
// -- nested if-else
// --switch

//if statement

// console.log("Before my if statement");
// let age = 23;
// if (age > 18){
//     console.log("You are an adult");
// }
// console.log("after my if statement");


//Qs: Create a traffic light system that shows what to do based on color.

// let color = "red";

// if(color === "red"){
//     console.log("Stop!");
// }
// if(color === "yellow"){
//     console.log("Slow Down");
// }
// if(color === "green"){
//     console.log("Go")
// }


// Qs: Create a system to clculate popcorn price based on the size customer asked for :
// if size "XL", price is Rs 250
// if size is "L" price is Rs 200
// if size is "M" price is Rs 100
// if size is "S" price is rs 50

// let size = "M";

// if(size === "Xl"){
//     console.log("Price is Rs 250");
// }else if(size === "L"){
//     console.log("Price is Rs 200");
// }else if(size === "M"){
//     console.log("Price is Rs 100");
// }else{
//     console.log("Invalid Size, Price is Rs 50");
// }

//Qs: A "Good string " is a string that starts with the letter 'a' & has a length >3. Write a Program to find if a string a good or not.

// let str = "apple";
// if(str[0] == "a" && str.length>3){
//     console.log("good string");
// }else{
//     console.log("not a good string");
// }

// Qs: Predict the output of following code:
// let num = 12;
// if ((num%3==0) && ((num+1==15) || (num-1==11))){
//     console.log("Safe")
// }else{
//     console.log("unsafe");
// }

// Qs : Create a nimber varoable num with some value. Now, Pront "good " if yhe number is visible by 10 and print "bad" if it is not.

// let num = 20;
// if (num %10 == 0){
//     console.log("good");
// }else{
//     console.log("bad");;
// }

// Qs: TAke the user's name $ age as input as an alert (by substituting their name & age):
// name is age year old.
// [Use template literals to prints this sentence]

// let name = prompt("please enter your name");
// let age = prompt("please enter your age");

// alert(`${name} is ${age} years old.`);


//Qs: Write a switch statement to print the months in a quarter.
// Months in Quarter1 : January, february,March
// Months in Quarter2 : April, May , June 
// Months in Quarter3 : July, August, September
// Months in Quarter4 : October, November, December

// [use the number as the case value in switch]

// let quarter = 6;
// switch(quarter){
//     case 1 : console.log("January, february,March");
//     break;
//     case 2 : console.log("April, May , June ");
//     break;
//     case 3 : console.log("July, August, September");
//     break;
//     case 4 : console.log("October, November, December");
//     break
//     default : console.log("Not a Quarter!");
// }


// Qs: A strings is a golden strings if it starts with the charcter 'A' or 'a' and has a total length greater than 5.
// for a given strings if it is golden or not.

// let str = 'apples';

// if ((str[0] == 'a' || starts[0] == 'A') && (str.length>5)){
//     console.log("golden strings");
// }else {
//     console.log("Not a golden strings");
// }

// Write a program to find the largest of 3 numbers.

// let a= 5;
// let b =8 ;
// let c =9;

// if(a>b){
//     if(a>c){
//         console.log(a,"is largest");
//     }else{
//         console.log(c,"is largest");
//     }
// }else{
//     if(b>c){
//         console.log(b,"is largest")
//     }else{
//         console.log(c,"is largest")
//     }
// }

// Qs: Write a program to check if 2 number have the same last digit. Eg: 32 and 47852 have the same digits i.e 2.

// let num1 = 32;
// let num2 = 47852;

// if ((num1 % 10) == (num2 % 10)) {
//     console.log("number have the same last digits which is", num1 % 10);
// } else {
//     console.log("number don't have the same last digits");
// }
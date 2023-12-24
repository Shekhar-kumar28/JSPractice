// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// const car = {
//     name: "Maruti suzuki",
//     model1: "Maruti suzuki dzire",
//     color:"White"
// };
// console.log(car.color);

// const Person = {
//     Name: "Shekhar Kumar",
//     age: "21",
//     City:"Bangalore"
// };
// // console.log(Person);
// Person.City="New York";
// Person.country = "United States";
// console.log(Person)




// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// for(let i=0; i<arr.length;i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }

// console.log(arr)



// let number = 287158739382;
// let count = 0;

// let copy = number;

// while(copy >0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);



// let number = 287152;
// let sum = 0;
// let copy = number;

// while(copy >0){
//     digit = copy % 10;
//     sum+=digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);

// let n = 5;
// let factorial = 1;

// for(let i=1;i<=n;i++){
//     factorial *= i;
// }
// console.log(`factorial of ${n} is ${factorial}`);


// let arr = [2,5,10,4,2,7,1,9];
// let largest = 0;

// for(let i=0;i<=arr.length;i++){
//     if(largest < arr[i]){
//         largest = arr[i];
//     }
// }
// console.log(largest);

// let arr = [7,9,0,-2];
// let n = 3;

// let ans = arr.slice(0,n);
// console.log(ans);


// let arr = [7,9,0,-2];
// let n=3;
// let ans = arr.slice(arr.length-n);
// console.log(ans);

// let str = prompt("please enter a string");
// if(str.length == 0){
//     console.log("string is empty");
// }else{
//     console.log("string is not empty");
// }


// let str = "ApnaCollege";
// let idx = 3;
// if(str[idx] == str[idx].toUpperCase()){
//     console.log(" Character is lowercase");
// }else{
//     console.log("character is not lowercase");
// }


// let str = prompt("Please enter a string");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);


// let arr = ["hello", 'a',23, 64,99,-6];
// let item = 64;

// if(arr.indexOf(item) != -1){
//     console.log("element exixts in array");
// }else{
//     console.log("element doesn't exixts in array");
// }

// let num = 20;
//  if(num % 10 == 0){
//     console.log("Good");
//  }else{
//     console.log("Bad")
//  }


// let name = prompt("Please enter your name");
// let age = prompt("please enter your age");

// alert(`${name} is ${age} year old.`);


// let quarter = 2;
// switch(quarter){
//     case 1 : console.log("January,February,March");
//     break;
//     case 2: console.log("April,May,June");
//     break;
//     case 3: console.log("July,August,September");
//     break;
//     case 4: console.log("October,November,December");
//     break;
//     default:console.log("Invalid Quarter");
// }


// let str = "apple";

// if((str[0] == 'a' || start[0] == 'A') && (str.length>5)){
//     console.log("golden string");
// }else{
//     console.log("Not a golden string");
// }


// let a = 15;
// let b = 18;
// let c = 13;

// if(a > b){
//     if(a>c){
//         console.log(a,"is largest")
//     }else{
//         console.log(c,"is largest");
//     } 
// }else{
//     if(b>c){
//         console.log(b,"is largest");
//     }else{
//         console.log(a,"is largest");
//     }
// }


// let num1 = 32;
// let num2 = 47852;

// if((num1&10) == (num2%10)){
//     console.log("Number have the same last digit wjich is ",num1%10);
// }else{
//     console.log("number don't have the same last digit");
// }

// function hello(){
//     console.log("hello Shekhar");
// }
// hello();
// hello();
// hello();
// hello();


// function printPoem(){
//     console.log("Twinkle Twinkle, Little Star");
//     console.log("How are wonder what you are");
// }
// printPoem();

// function rollDice(){
//     let rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }
// rollDice();
// rollDice();

// function printName(name){
//     console.log(name);
// }
// printName("shekhar");
// printName("Skumar")


// function calcAvg(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg)
// }
// calcAvg(2,49,98)


// function printTable(n){
//     for(let i=n;i<=n*10;i+=n){
//         console.log(i)
//     }
// }
// printTable(5)
// printTable(8)



// function sum(a,b){
//     return a+b;
// }

// console.log(sum(sum(1,2),3));

// function getSum(n){
//     let sum = 0;
//     for(let i =1;i<=n;i++){
//          sum = sum+i;
//         }
//         return sum;
// }
// let a=getSum(400)
// console.log(a);

// function concat(str){
//     let result;
//     for(let i=0;i<str.length;i++){
//         result += str[i];
//     }
// }


// function calSum(a,b){
//     let sum = a+b;
// }


// let greet = "Hello";
// function changeGreet(){
//     let greet = "Namaste";
//     console.log(greet);h
//     function innerGreen(){
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();


// function multipleGreet(func,n){
//     for(let i=1; i<=n;i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("Hello");
// }
// multipleGreet(greet,2000);
// multipleGreet(function(){console.log("namaste")},10)



// function oddOrEvenFactory(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }else if(request == "even"){
//         let even = function(n){
//             console.log(n % 2 == 0)
//         }
//         return even;
//     }else{
//         console.log("Wrong request");
//     }
// }


// Qs1. write a javascript function that return array elements larger than a number.


// let arr = [3,4,5,6,7,3,6,3];
// let num =5;
// function getElements(arr,sum){
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]>num){
//             console.log(arr[i])
//         }
//     }
// }

// getElements(arr,num);

//Q2. write a javascript function to exact unique character from a string.
// example : str= "abcdabcdefgggh"
// ans = "abcdefgh"

// function getUnique(str){
//     let uniqueChars = new Set();
//     let ans = "";
//     for (let i = 0; i < str.length; i++){
//         let currChar = str[i];
//         if(!uniqueChars.has(currChar)){
//             uniqueChars.add(currChar);
//             ans += currChar;
//         }
//     }
//     return ans;
// }

// let str = "abcdabcdefgggh";
// console.log(getUnique(str));



//Q3. write a javascript function that accepts a list of country name as input and return the longest country name as output.
// exapmle: country = ["Australia","Germany","United state of America"]
// output : "United States of America"


// let country = ["Australia","Germany","United States of America"];

// function longestName(country){
//     let ansIdx = 0;
//     for (let i=0;i<country.length;i++){
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;
//         if(currLen > ansLen){
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }
// longestName(country);





//Q4: Write a javascript function to count the number of vowels in a String argument.


// let str = "apnacollege shekhar kumar"

// function countVowels(str){
//     let count = 0;
//     for(let i=0; i<str.length;i++){
//         if(
//             str.chartAt(i)=="a"||
//             str.chartAt(i)=="e"||
//             str.charAt(i)=='i'||
//             str.chartAt(i)=="o"||
//             str.charAt(i)=="u"
//         ){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowel(str))

// function countVowels(str){
//     str = str.toLowerCase();
//     const vowels = ['a','e','i','o','u'];
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }
// let inputString = "Hello how are you?";
// let numberOfVowels = countVowels(inputString);
// console.log("Number of Vowels:", numberOfVowels);








// Q5: write a javascript function to generate a random number within a range(start,end).

// let start = 100;
// let end =200;
// function generateRandom(start,end){
//     let diff = end- start;
//     return Math.floor(Math.random()*diff)+start;
// }
// generateRandom()
// console.log(generateRandom(start,end));



// Q1: Write a arrow function named arrayAverge that accepts an array of numbers and return the average of those number.

// const arrrayAverage = (arr) =>{
//     let total = 0;
//     for(let number of arr){
//         total += number;
//     }
//     return total/arr.length;
// };
// let arr = [1,2,3,4,5,6];
// console.log(arrrayAverage(arr))


//Q2: write an arraw function named isEven() that takes a single number as argument and return if it is even or not.

// let num =4;

// const isEven = (num) => num % 2 == 0;

// console.log(isEven())



// Q3: What is the Output of the following code:

// const object = {
//     message:'Hello, World!',

//     logMessage(){
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage,1000);

// soln:-

// After a delay of 1 second , undefined is logged to the console.
// While the setTimeOut() function uses the object.logMeassage as a callback, still, it invoke object.logMessage as a regular function, rather than a method.
// And during a regular function invocation this equal the global object,which is a window in the case of the browser environment.
// That's why console.log(this.message) inside logMessage method logs window.message, which is undefined.


// Q4: what is the output of the folloeing code:

// let length = 4;

// function callback(){
//     console.log(this.length);
// }
// const object = {
//     length:5,
//     method(callback){
//         callback();
//     },
// };
// object.method(callback,1,2);

// soln:


//hello,world! is logged to the console.
// object.getMessage() is a method invocation, that's why this inside the method equals object.
// There's also a varible declaration const message = 'Hello, Earth! inside the method. The varible doesn't influnce the value of this meassage.



// let arr = [1,2,3,4,5];
// arr.forEach((el)=>{ 
//     console.log(el);
// });


let students = [
    {
        name:"Shekhar",
        marks:98
    },
    {
        name:"Nikhil",
        marks:98
    },
    {
        name:"Rajat",
        marks:34
    }
]

// arr.forEach((student)=>{
//     console.log(student.marks)
// });


// let num = [1,2,3,4]

// let double = num.map((el)=>{
//     return el*el;
// });
// console.log(double)


// let gpa = students.map((el)=>{
//     return el.marks/10;
// })

// console.log(gpa);


// let nums = [1,2,3,4,7,5,35,3,24,235,234,342];
// let ans = nums.filter((el)=>{
//     return el%2 == 0
// })
// console.log(ans)

// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res,el)=> res + el);
// console.log(finalVal);


// let nums = [2,3,4,5,3,4,7,8,1,2,345 ];

// let result = nums.reduce((max,el)=>{
//     if(el > max){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(result)




// Q: check if all number in our array are multiple of 10 or not.

// let nums = [10,20,30,40];

// let ans = nums.every((el)=> el % 10 == 0);
// console.log(ans);



// let min = nums.reduce((min,el)=>{
//     if(min < el){
//         return min;
//     }else{
//         return el;
//     }
// });
// console.log(min);

// const data = {
//     email:"sk14@gmail.com",
//     password:"asjdhdhd"

// }
// const dataCopy = {...data,id:2343234};
// console.log(dataCopy);

// function sum(...args){
//     for(let i=0;i<args.length;i++){
//         console.log("you gave us",args[i]);
//     }
// }


//Q: Square and sum the array elements using the arraw function and then the average of the array.?

// let array = [1, 2, 3, 4, 5];
// let sumSquares = array.map(num => num * num).reduce((a, b) => a + b, 0);
// let average = sumSquares / array.length;

// console.log(average);

let nums = [1,2,3,4,5];

const square = nums.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc,cur) => acc + cur,0);

let avg = sum/nums.length;
console.log(avg);\
\
// let smallImages = document.getElementsByClassName("oldImg");

// for (let i=0;i<smallImages.length;i++){
//     smallImages[i].src="assets/assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);
// }


//Q1: a <p> with red text that says "Hey I'am red"

// let para1 = document.createElement("p");
// para1.innerText = "Hey I am Shekhar";
// document.querySelector("body").append(para1);
// para1.style.color = "red";


//Q2: an <h3> with blue yext that says "I am a blue h3!"

// let h3 = document.createElement("h3");
// h3.innerText = "Hey I am Shekhar";
// document.querySelector("body").append(h3);
// h3.style.color = "blue";


//Q3 a <div> with a black border and pink background color with the following elements inside of it:
   // another <h1> that says " I am in div"
   // a <p> that says "ME TOO!!"

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I am in a div";
// para2.innerText = "Me too!!";
// div.append(h1);
// div.append(para2);
// div.classList.add("box");

// document.querySelector("body").append(div);

// Q1: Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me";

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Q2: Add following attributes to the element:
    // - Changes placeholder value of input to "username"
    // - changes the id of button to "btn"

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

// Q3: Access the btn using the querySelector and button id. Changes the button background color to blue and text color to white.

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// Q4: Create an h1 element on the page and set its text to "DOM practice" undline. Change its color to purple.

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM practice</u>";
document.querySelector("body").append(h1);

// Q5: Create a p tag on page and set its text to "Apna College Delta Practice", Where Delta is bold.

let p = document.createElement("p");
p.innerHTML = "Apna College <b> Delta </b> Practice";
document.querySelector("body").append(p);
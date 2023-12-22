// let btn = document.querySelector("button")
// console.dir(btn)

// btn.onclick = function () {
//     console.log("button was clicked");
// };


// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     // btn.onclick = sayHello;
//     // btn.onmouseenter = function(){
//     //     console.log("You entered a button");
//     }
//     console.dir(btn)
// }

// function sayHello(){
//     alert("Hello");
// }
// // btn.onclick = sayHello;


let btns = document.querySelectorAll("button");
for (btn of btns){
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click",sayName);
       btn.addEventListener("dblclick",function(){
        console.log("Shekharkumar");
       });
}

function sayHello(){
    alert("Hello");
}

function sayName(){
    alert("Shekhar Kumar");
}
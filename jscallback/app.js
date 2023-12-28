// function hello(){
//     console.log("Inside Hello");
// }
// function demo(){
//     console.log("indise demo")
//     hello();
// }
// console.log("calling demo function");
// demo();


// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
// three();
// two();

// setTimeout(() => {
//     console.log("Apna College");
// },2000);

// console.log("Hello...")

// h1 = document.querySelector("h1");

// function changeColor(color, delay,nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     },delay);
// }
// changeColor("red",1999,()=>{
//     changeColor("Orange",1000,()=>{
//         changeColor("Yellow",1000,()=>{
//             changeColor("Green",1000);
//         });
//     });
// });



// function savetoDb(data){
//     let internetSpeed = Math.floor(Math.random() * 10)+1;
//     if (internetSpeed > 4) {
//         console.log("Your data was saved: ",data);
//     }else {
//         console.log("Weak connection. data not saved");
//     }
// }
// savetoDb("ApnaCollege")



// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }
//     savetoDb(
//         "apna College",
//         ()=>{
//         console.log("success : your data was saved");
//     savetoDb(
//         "Hello World",
//         () => {
//             console.log("Success2 : data2 Saved");
//         },
//         () => {
//             console.log("Failuare2 : weak Connection");
//         }
//     );
//     },
//     () => {
//         console.log("Failure: Weak connection. dta not saved");
//     }
//     );


// function saveto(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Succes: Data was saved");
//         } else {
//             reject("Failed : weak connection");
//         }
//     });
// }
// saveto("Apna College")
// .then((result)=>{
//     console.log("data1 was saved. Promise was resolved")
//     console.log(result);
//     return saveto("Helloworld")
//     })
//     .then((result)=>{
//         console.log("Data2 saved");
//         console.log(result)
//         return saveto("shekhar")
//     })
//     .then((result)=>{
//         console.log("Data3 saved");
//         console.log(result)
//     })
// .catch((error)=>{
//     console.log("Promises was rejected")
//     console.log(error);
// })

h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        },delay);
    })
}

changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green ",1000);
})
.then(()=>{
    console.log("green color was completed");
    return changeColor("blue ",1000);
})
.then(()=>{
    console.log(" blue color was completed");
    return changeColor("pink",1000);
})
.then(()=>{
    console.log("pink was completed");
})
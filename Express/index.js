// const express = require("express");

// const app = express();
// // console.dir(app)

// let port = 3000;

// app.listen(port,()=>{
//     console.log(`App is listening on port:${port}`);
// })

// // app.get("/",(req,res) => {
// //     res.send("<h1>Hello World!</h1>")
// // })
// // app.get("/Apple",(req,res) => {
// //     res.send("Hey I am using apple path");
// // })
// // app.get("/Oraa",(req,res) => {
// //     res.send("Het I am using Orange Path");
// // })

// app.get("/search",(req,res) => {
//     console.log(req.query);
//     res.send("np result");
// })

// // app.use((req,res) => {
// //     console.log("request recieved")
// //     res.send("Hello World");
// // })



const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res) => {
    res.render("home.ejs")
})

app.get("/home",(req,res) => {
    res.send("Hello")
})

app.listen(port,() => {
    console.log(`Server started at ${port}`)
});
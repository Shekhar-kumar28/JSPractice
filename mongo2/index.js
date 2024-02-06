const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js")
const methodOverride = require('method-override');
const ExpressError = require('./ExpressError');

app.set("views",path.join(__dirname,"views"));
app.set("views engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));


main()
    .then(() => {
        console.log("Server is running!");
    }).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsaap');
}

// let chat1 = new Chat({
//     from:"Shekhar",
//     to:"nikhil",
//     msg:"Hey Nikhil! How are you?",
//     created_at: new Date()
// });

// chat1.save().then((res) => {
//     console.log(res);
// })


// index Route
app.get("/chats",async (req,res) => {
    let chats= await Chat.find()
    // console.log(chats);
    res.render("index.ejs",{chats})
})

//new ROUTE
app.get("/chats/new",(req,res) => {
    throw new ExpressError(404,"page Not Found");
    res.render("new.ejs")
})

// create route
app.post("/chats",(req,res) =>{
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date(),
    });
    newChat.save().then((res)=>{
        console.log("Chat was saved");
    }).catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats")
});

// edit Route
app.get("/chats/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

//Update Route
app.put("/chats/:id", async (req,res) =>{
    let { id } = req.params;
    let {msg:newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators:true, new:true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
})

//destroy Route
app.delete('/chats/:id', async (req,res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id)
    console.log(deletedChat);
    res.redirect("/chats");
})


// new-show routes
app.get("/chats/:id",async (req,res,next) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});



app.get("/", (req, res) => {
    res.send("Working")
})


app.use((err,res,next) => {
    let {status = 500, message = "some Error Occurred "} = err;
    res.status(status).send({message});
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});
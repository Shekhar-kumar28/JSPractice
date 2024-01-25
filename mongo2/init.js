const mongoose = require('mongoose');
const Chat = require("./models/chat.js")



main()
    .then(() => {
        console.log("Server is running!");
    }).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsaap');
}

let allChats = [
    {
        from:"pana",
        to:"khoona",
        msg:"Send me notes for the exam",
        created_at:new Date()
    },
    {
        from:"neha",
        to:"preeti",
        msg:"Send me notes for the exam",
        created_at:new Date()
    },
    {
        from:"leena",
        to:"deena",
        msg:"kya deeena",
        created_at:new Date()
    },
    {
        from:"bulaw",
        to:"khulaw",
        msg:"the exam",
        created_at:new Date()
    }, 
    {
        from:"sumeet",
        to:"pumit",
        msg:"kya sumeet",
        created_at:new Date()
    },
];

Chat.insertMany(allChats);


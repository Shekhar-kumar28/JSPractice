const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(() => console.log("connection succesful"))
.catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username : String, 
    email :String
});

const postSchema = new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

const User = mongoose.model("user",userSchema);
const Post = mongoose.model("post",postSchema);

const addData = async () => {
    // let user1 = new User({
    //     username:"rahulKumar",
    //     email:"rahulkumar@gmail.com"
    // });

    let user = await User.findOne({username:"rahulKumar"})



    let post2 = new Post({
        content:"Bye Bye!",
        likes:98
    });

    post2.user = user;
    //  await user1.save();
     await post2.save();
}

addData();
const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');


main()
.then((res) => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User = mongoose.model("User",userSchema);
// const Employee = mongoose.model("Employee",userSchema);


User.deleteOne({name:"Bruce"}).then((res) => {
    console.log(res)
});








// User.findOneAndUpdate({name:"Bruce"},{age:398},{new:true})
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err);
// });






// User.find({age:{$gt:47}})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });



// User.insertMany([
//     {name:"John",email:"john@gmail.com",age:50},
//     {name:"Emily",email:"emily@yahoo.com",age:30},
//     {name:"Bruce",email:"bruse@gmail.com",age:47}
// ]).then((res => {
//     console.log(res)
// }))













// const User2 = new User({
//     name:"Eve",
//     email:"eve@gamil.com",
//     age:48,
// })


// User2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })



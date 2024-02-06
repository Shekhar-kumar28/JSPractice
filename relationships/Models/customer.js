const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(() => console.log("connection succesful"))
.catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
    items:String,
    price:Number,
});


const customerSchema = new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
})

const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);


const addCustomer = async () => {
    let cust1 = new Customer({
        name:"Rahul Kumar",
    });

    let order1 = await Order.findOne({items:"apple"});
    let order2 = await Order.findOne({items:"orange"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let res = await cust1.save();
    console.log(res);
}
addCustomer();

// const addOrders = async() =>{
//     let res = await Order.insertMany([
//         {items:"apple",price:5},
//         {items:"orange",price:3},
//         {items:"chocolate",price:45}
//     ]);
//     console.log(res);
// }

// addOrders();
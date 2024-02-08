const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(() => console.log("connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
    items: String, // Changed to "items"
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
});

// customerSchema.pre("findOneAndDelete",async () => {
//     console.log("Pre Middleware");
// })

customerSchema.post("findOneAndDelete",async (Customer) => {
    if(Customer.orders.length){
        let res =await Order.deleteMany({_id :  {$in : Customer.orders}});
    console.log(res);
}
});


const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    if (result.length > 0) {
        console.log(result[0]);
    } else {
        console.log("No customers found.");
    }
};

const addCust = async () => {
    let newCust = new Customer({
        name: "Karan Arjun"
    });

    let newOrder = new Order({
        items: "Chai", // Changed to "items"
        price: 250
    });

    await newOrder.save();
    newCust.orders.push(newOrder._id); // Pushing the ObjectId of newOrder

    await newCust.save();

    console.log("Added New Customer");
};

const delCust = async () => {
  let data =  await Customer.findByIdAndDelete("65c20acebebdb7bd1b74d17c");
  console.log(data);
};

// addCust();

delCust();



























// const customerSchema = new Schema({
//     name:String,
//     orders:[
//         {
//             type:Schema.Types.ObjectId,
//             ref:"Order"
//         }
//     ]
// })

// const Order = mongoose.model("Order",orderSchema);
// const Customer = mongoose.model("Customer",customerSchema);


// const addCustomer = async () => {
//     let cust1 = new Customer({
//         name:"Rahul Kumar",
//     });

//     let order1 = await Order.findOne({items:"apple"});
//     let order2 = await Order.findOne({items:"orange"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let res = await cust1.save();
//     console.log(res);
// }
// addCustomer();

// // const addOrders = async() =>{
// //     let res = await Order.insertMany([
// //         {items:"apple",price:5},
// //         {items:"orange",price:3},
// //         {items:"chocolate",price:45}
// //     ]);
// //     console.log(res);
// // }

// // addOrders();
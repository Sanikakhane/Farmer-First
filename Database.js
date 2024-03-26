const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/miniprojectDB").then(()=> console.log("connection successful....")).catch((err)=> console.log(err));

  
  const personal_info=new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    age: Number,
    address:{
        street:String,
        city:{
        type:String,
        required: true
         },
        state:String,
        country:String,
        pincode:{
          type:Number,
          required: true
        }
    },
    contact:
    {
        email:String,
        phoneNumber:{
          type:Number,
          required: true
        }
    }
   
  })


  const product_detail=new mongoose.Schema({
    product_name: {
        type: String,
        required : true
    },
    product_quntity:{
      type: Number,
        required : true
    },
    product_price:{
      type: Number,
        required : true
    },
    product_img:MediaCapabilities,

    product_description:String   
   
  })


  const  order_detail=new mongoose.Schema({
    saled_product_name: {
        type: String,
        required : true
    },
    saled_quntity:{
      type: Number,
        required : true
    },
    sell_price:{
      type: Number,
        required : true
    },
    total_cost:{
      type: Number,
      required : true
    }
    

 })

  // collection creation PersonalDetail
  const PersonalDetail= mongoose.model("Person",personal_info);
  const ProductDetail= mongoose.model("Product",product_detail);
  const OrderDetail= mongoose.model("Order",order_detail);


  
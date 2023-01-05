const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({
    product_id:{
        type:Number,
        required:[true,"Please Enter product product id"]
    },
    name:{
        type:String,
        required:[true,"Please Enter product name"]
    },
    description:{
        type:String,
        required:[true,"Please Enter product description"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter product price"]
    },
    category:{
        type:String,
        required:[true,"Please Enter product name"]
    },
    revenue:{
        type:String
    },
    images:[
        {
           data:Buffer,
           contentType:String
        }
    ],
    links:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,ref:'User'
    }

       

})

const Products = mongoose.model('products', productSchema);
module.exports = Products;
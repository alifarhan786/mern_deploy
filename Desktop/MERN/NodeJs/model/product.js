const mongoose = require('mongoose');
const { Schema } = mongoose
//Schema

const productSchema = new Schema({

    title: String,
    description: {type:String, required: false},
    price: { type: Number, min: [0,'Wrong Price'], required: true },
    discountPercentage: { type: Number, min: 0, max: 50},
    rating: { type: Number, min: [0,'Wrong Rating'], max: 5 },
    brand: {type:String, required: true},
    category: {type:String, required: true },
    thumbnail: {type:String , required: true},
    images: [{type:String}]
})
exports.Product = mongoose.model("Product", productSchema)

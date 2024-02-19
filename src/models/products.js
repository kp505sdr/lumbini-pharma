const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "",
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  mrp: {
    type: Number,
    required: true,
    default: 0,
  },
  category: {
    type: String,
    default: "medicine",
  },
  stock: {
    type: Boolean,
  },
  company:{
    type:String
  },
  discount:{
        type:Number,
        default:0,
  },
  images: {
    type: Array,
  },
  discription: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports=mongoose.model("product",productSchema)
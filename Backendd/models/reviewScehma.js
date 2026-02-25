import mongoose from "mongoose";
import validator from "validator";

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Full Name must be of at least 3 Characters."],
    maxLength: [30, "Full Name cannot exceed 30 Characters."],
  },

   message: {
    type: String,
    required: true,
    minLength: [10, "Review must be of at least 10 Characters."],
   
  },  
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },

});

export const Reviews = mongoose.model("Reviews", reviewSchema);
import mongoose from "mongoose";
import validator from "validator";

const hostSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: [3, "Full Name must be of at least 3 Characters."],
    maxLength: [30, "Full Name cannot exceed 30 Characters."],
  },
  address : {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  rating : {
    type: Number,
    required: true,
  },
  review : {
     type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain 10 Digits."],
    maxLength: [10, "Phone number must contain 10 Digits."],
  },
  map : {
    type: String,
    required: true,
  },
});

export const Hosting = mongoose.model("Hosting", hostSchema);
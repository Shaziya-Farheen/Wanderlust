import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: [3, "Full Name must be of at least 3 Characters."],
    maxLength: [30, "Full Name cannot exceed 30 Characters."],
  },
  
  checkIn: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  rooms : {
     type: String,
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
  hotelName : {
    type: String,
    required: true,
  },
  location : {
    type: String,
    required: true,
  }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
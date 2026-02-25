import ErrorHandler from "../middlewares/error.js";
import { Hosting } from "../models/hostSchema.js";

const host_site = async (req, res, next) => {
  const { fullName, address,city,rating,review,email, phone,map} = req.body;
  if ( !fullName || !address || !city || !rating || !review || !email || !phone || !map) {
    return next(new ErrorHandler("Please Fill Form correcly!", 400));
  }
  try {
    await Hosting.create({ fullName,address,city,rating,review, email, phone,map });
    res.status(201).json({
      success: true,
      message: "Your information Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};


export default host_site;
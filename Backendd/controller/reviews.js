import ErrorHandler from "../middlewares/error.js";
import { Reviews } from "../models/reviewScehma.js";


const send_review = async (req, res, next) => {
  const { name, message, email } = req.body;
  if ( !name || !message || !email) {
    return next(new ErrorHandler("Please Fill Form Correctly!", 400));
  }

  try {
    await Reviews.create({ name, message, email });
    res.status(201).json({
      success: true,
      message: "Review Sent Successfully!",
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


export default send_review;
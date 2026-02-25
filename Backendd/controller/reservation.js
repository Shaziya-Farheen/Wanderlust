import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservationScehma.js";

const send_reservation = async (req, res, next) => {
  const { fullName, checkIn, date, rooms, email, phone,hotelName, location } = req.body;
  if ( !fullName || !checkIn || !date || !rooms || !email || !phone || !hotelName || !location) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({ fullName,  checkIn, date, rooms, email, phone,hotelName, location  });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
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
export default send_reservation;
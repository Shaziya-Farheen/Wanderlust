import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiColor } from "react-icons/bi";

const Reservation = () => {
  const [fullName, setFullName] = useState("");
  const [checkIn, setInTime] = useState("");
  const [date, setOutTime] = useState("");
  const [rooms, setRooms] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hotelName, setHotName] = useState("");
  const [location, setLoc] = useState("");

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/apii/reservation/send",
        { fullName, checkIn, date, rooms, email, phone,hotelName,location },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFullName("");
      setInTime("");
      setOutTime("");
      setRooms("");
      setPhone("");
      setEmail("");
      setHotName("");
      setLoc("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
   return (
     <>
          <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/hostPic.jpg" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            
             <h4>Book Your Villa</h4>
            <p>Please enter a correct information - </p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="No of rooms"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                />
              </div>

               <div>
                <input
                  type="text"
                  placeholder="Hotel-Name"
                  value={hotelName}
                  onChange={(e) => setHotName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter City"
                  value={location}
                  onChange={(e) => setLoc(e.target.value)}
                />
              </div>
              <div>
                 <h10>Check-in</h10>
                <input
                  type="date"
                  placeholder="Check-In Date"
                  value={checkIn}
                  onfocus="(this.type='date')"
                  onChange={(e) => setInTime(e.target.value)}
                />
                </div>
                <div>
                  <h10>Check-Out</h10>
                <input
                  type="date"
                  placeholder="Check-Out Date"
                  
                  value={date}
                  onChange={(e) => setOutTime(e.target.value)}
                />
              </div>
              <div>
                
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleReservation}>
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
     </>
   );
};

export default Reservation;
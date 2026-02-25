import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const Hosting = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAdd] = useState("");
  const [city, setCity] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [map, setMap] = useState("");

  const handleHosting = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/apii/reservation/host",
        { fullName, address,city,rating,review,email,phone,map},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFullName("");
      setAdd("");
      setCity("");
      setRating("");
      setReview("");
      setEmail("");
      setPhone("");
      setMap("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
   return (
     <>
          <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/un.webp" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            
             <h4>Host Your Luxury </h4>
            <p>Enter a precise information to join with us - </p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Luxury's Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Full Address"
                  value={address}
                  onChange={(e) => setAdd(e.target.value)}
                />
              </div>
               <div>
                <input
                  type="text"
                  placeholder="Your City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="No of Ratings"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="No of Reviews"
                  value={review}
                  onfocus="(this.type='date')"
                  onChange={(e) => setReview(e.target.value)}
                />
                  <input
                  type="email"
                  placeholder="Your Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div> 
              <div>
                <input
                  type="number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="link"
                  placeholder="Map Link"
                  className="email_tag"
                  value={map}
                  onChange={(e) => setMap(e.target.value)}
                />
                </div>
              
              <button type="submit" onClick={handleHosting}>
                HOST NOW{" "}
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

export default Hosting;
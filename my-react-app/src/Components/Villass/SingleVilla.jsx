import React from "react";
import { useParams } from "react-router-dom";
import { villas } from "../../villas";


const SingleVilla = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const filteredVilla = villas.filter((villa) => villa.id === numericId)[0];
  return (
    <>
      <section id="singleVilla" className="page">
        <div className="container">
          <h3> {filteredVilla.name} </h3>
          <h5> <i>{filteredVilla.address}</i></h5>
          <div className="images">
            <div className="villaImg">
              <img src={filteredVilla.img1} alt={filteredVilla.name} />
            </div>
            <div className="otherImgs">
              <div>
                <img src={filteredVilla.img2} alt="villa" />
                <img src={filteredVilla.img3} alt="villa" />
              </div>
              <div>
                <img src={filteredVilla.img4} alt="villa" />
                <img src={filteredVilla.img5} alt="villa" />
              </div>
            </div>
          </div>
          {/* <h4>{filteredVilla.location}</h4>
          <p>
            {filteredVilla.bathrooms} Bedrooms / {filteredVilla.guests} Guests /{" "}
            {filteredVilla.bathrooms} Bathrooms / {filteredVilla.squareMeter}{" "}
            Area
          </p>
          <div className="checkin_out">
            <h5>
              Check In: <span> 9:00 AM</span>
            </h5>
            <h5>
              Check Out <span> 11:00 PM</span>
            </h5>
          </div> */}
          <div className="location">
            <h4>View map for more details -  </h4>
            <iframe
              src= {filteredVilla.map}
              style={{ width: "100%", height: "400px", border: 0 }}
              // allowFullScreen=""
              // loading="lazy"
              // referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
   
      </section>
      

    </>
  );
};

export default SingleVilla;

//"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31451387.618347976!2d39.791981656986835!3d15.789145498513488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1754748649791!5m2!1sen!2sin"
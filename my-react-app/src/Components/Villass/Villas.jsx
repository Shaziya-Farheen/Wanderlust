import React from 'react'
import {villas} from '../../villas';
import { RxDot } from "react-icons/rx";
import { MdOutlineReviews } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Villas = () => {
  return (
    <>
        <div className="page" id='allVillas'>
          <h1>ALL VILLAS</h1>
          <p>{villas.length} Properties</p>
          <div className="villasContainer">
        {villas.map((element) => {
          return (
              <Link to={`/villa/${element.id}`} className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <div className="location_text">
                  <span>{element.location}</span>
                  <span>
                    <RxDot />
                  </span>
                  <span>{element.category}</span>
                </div>
                <div className="title_text">{element.name}</div>
               
                 <div className="specifications">
                  <div className='spec'>
                   
                    <span> <span><MdOutlineReviews /></span> {element.reviews}</span>
                    
                    <span> <span><FaStar></FaStar></span> {element.ratings}</span>
                    
                  </div>
                 </div>
              
                <div className="badge">
                  From <span>Rs {element.dailyRent} / Day </span>
                </div>
              </Link>
          );
        })}
      </div>
        </div>
    </>
  )
}

export default Villas

//  <div className="specifications">
//                   <div className="spec">
//                     <IoIosPeople />
//                     <span>{element.guests}</span>
//                     Guests
//                   </div>
import React from 'react';
import { Link } from 'react-router-dom';

import contactimage from "../images/Contact Us.png";

export default function ContactUs() {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <h1>RCLD MECHEDA</h1>
          <h2>Contact Us</h2>
        </div>
      </div>
      
      <div className="contact-container">
        <div className="contact-details glass-effect">
          <h4>Contact Number:</h4>
          <h6>9732858553 / 9434960386</h6> 
          <h4>Address:</h4>
          <h6>Mecheda Bus Stand, Purba Medinipur</h6>
          <button type="button" className="btn btn-primary">
            <Link to="/form" className="apply-link">Apply Now</Link>
          </button>
        </div>
        <div className="contact-image-container glass-effect">
          <img src={contactimage} alt="Logo" className="contact-image" />
        </div>
      </div>

      <div className="footer-container glass-effect">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.3706181511448!2d87.85825017438069!3d22.41507223872726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0297ff38060363%3A0x667ac8c99d59da64!2sMecheda%20RCLD!5e0!3m2!1sen!2sin!4v1716346004664!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0, borderRadius: '10px' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mecheda RCLD Location">
        </iframe>
      </div>

      <style>
        {`
          .header-container {
            background-color: rgba(0, 128, 0, 0.5);
            height: 40vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .header-content h1 {
            color: white;
          }

          .header-content h2 {
            color: blue;
          }

          .contact-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 20px 0;
          }

          .contact-details, .contact-image-container {
            width: calc(50% - 20px);
            margin: 10px;
            padding: 20px;
            box-sizing: border-box;
          }

          .contact-details {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .apply-link {
            text-decoration: none;
            color: white;
          }

          .contact-image-container {
            position: relative;
            overflow: hidden;
          }

          .contact-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }

          .footer-container {
            width: 100%;
            margin: 20px 0;
          }

          .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.18);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 10px;
          }

          @media (max-width: 768px) {
            .contact-details, .contact-image-container {
              width: 100%;
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  );
}

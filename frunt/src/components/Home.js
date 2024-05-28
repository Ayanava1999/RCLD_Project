import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import Carosel from '../components/Carosel';
import CourcesDetails from './cources/CourcesDetails';

export default function Home() {
  const [cources, setCources] = useState([]);

  useEffect(() => {
    const fetchCources = async () => {
      try {
        const response = await axios.get("http://localhost:8080/cources/");
        setCources(response.data);
        console.log(response.data); 
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCources();
  }, []);

  return (
    <div>
      {/* <Carosel /> */}
      <div className="header-container">
        <div className="header-content">
          <h1>RCLD MECHEDA</h1>
          <h2>Contact Us</h2>
        </div>
      </div>
      <h1>Home</h1>
      
      <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }} className="glass-effect">
  <h1>Our courses</h1>
</div>

      <div className="cources-container" style={{padding:"10px"}}>
        {cources.length > 0 &&
          cources.map((course) => (
            <CourcesDetails key={course._id} course={course} />
          ))}
      </div>

      </div>
      

      <style>


        {`


.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
}

          .cources-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 0 -10px; /* Add negative margin to counteract margin of individual cards */
          }

          .cources-container > div {
            flex: 1 0 calc(33.33% - 20px); /* Ensure 3 cards per row with a margin of 10px */
            margin: 10px;
            box-sizing: border-box; /* Ensure padding and border are included in the width */
          }

          @media (max-width: 768px) {
            .cources-container > div {
              flex: 1 0 100%; /* Ensure 1 card per row on mobile */
              max-width: 100%; /* Ensure 1 card per row on mobile */
            }
          }
        `}
      </style>
    </div>
  );
}

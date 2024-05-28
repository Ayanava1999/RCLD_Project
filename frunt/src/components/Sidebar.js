import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8080/cources/'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  

  return (
    <div className="sidebar" style={{ backgroundColor: "black", width: "100%" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {courses.map(course => (
          <li key={course._id} style={{ margin: "2px 0" }}>
            <Link to={`/courecsdetails/${course._id}`}  className="stained-glass-button">
              {course.name}
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .sidebar {
          
        }

        .stained-glass-button {
          display: block;
          width: 100%;
          padding: 10px;
          background-color: rgba(255, 255, 255, 0.2); /* Set button background color with transparency */
          border: none;
          color: white;
          font-size: 16px;
          cursor: pointer;
          border-radius: 10px;
          transition: background-color 0.3s, transform 0.3s;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Add a subtle shadow for a 3D effect */
        }

        .stained-glass-button:hover {
          background-color: rgba(255, 255, 255, 0.4); /* Change button background color on hover */
          transform: scale(1.05); /* Add slight scale effect on hover */
        }
      `}</style>
    </div>
  );
};

export default Sidebar;

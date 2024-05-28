import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/download.jpeg';

const Navbar = () => {
  // Assuming you have a state for courses
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses data from API
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8080/courses/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Log the received data
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div style={{ position: 'sticky', top: '0', zIndex: '1000', height: "10%", backgroundColor: "black", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ height: "50px" }} />
          <b style={{ color: "blue", paddingLeft: "13px" }}>RCLD</b> Mecheda
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Courses
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {courses.map(course => (
                  <Link key={course._id} className="dropdown-item" to={`/courses/${course._id}`}>
                    {course.name}
                  </Link>
                ))}
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/form">Apply Now !!!</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button type="button" className="btn btn-primary">
                <Link to="/form" style={{ textDecoration: "none", color: "white" }}>Apply Now</Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

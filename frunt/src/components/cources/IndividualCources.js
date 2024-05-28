import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function IndividualCourse() {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { id } = useParams(); // Assuming the parameter name is 'id'

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/cources/${id}`);
        setCourse(response.data);
        console.log("Course data:", response.data);
      } catch (err) {
        console.error("Error fetching course:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCourse();
    } else {
      setLoading(false);
      setError(new Error('Course ID not found in URL.'));
    }
  }, [id]); // Rerun the effect whenever 'id' changes

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching course: {error.message}</div>;
  }

  if (!course) {
    return <div>No course found.</div>;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', width: '80%', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
        {/* Image Side */}
        <div style={{ flex: '1', position: 'relative', overflow: 'hidden' }}>
          <img
            src={course.image}
            alt={course.name}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              transition: 'transform 0.3s ease-in-out',
              transform: isHovered ? 'scale(1.1) rotate(2deg)' : 'scale(1)',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        
        <div style={{ flex: '1', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)' }}>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
          
        </div>
      </div>
    </div>
  );
}

import React from 'react';

import { Link } from 'react-router-dom';

const CourcesDetails = ({ course }) => {

   

    return (
        <div className="card glass-card glass-effect" style={{ width: "18rem" }}>
            <div className="image-container">
                <img src={course.image} className="card-img-top" alt={course.name} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                
                <Link to={`/courecsdetails/${course._id}`} className='btn btn-sm btn-info me-2' >Details</Link>
            
            </div>
            
            <style jsx>{`
                .glass-card {
                    background-color: rgba(255, 255, 255, 0.8);
                    border-radius: 15px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    margin: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }

                .image-container {
                    width: 100%;
                    height: 200px; /* Adjust the height as needed */
                    overflow: hidden;
                    border-radius: 10px;
                }

                .image-container img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; /* Ensure the image fills the container while preserving aspect ratio */
                }

                .glass-card h5 {
                    color: #333333;
                    margin-bottom: 10px;
                }

                .glass-card p {
                    color: #666666;
                    margin-bottom: 15px;
                }

                .glass-effect {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

export default CourcesDetails;

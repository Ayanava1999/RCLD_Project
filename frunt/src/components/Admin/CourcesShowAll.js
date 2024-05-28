import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowFormall.css'; 
import { Link } from 'react-router-dom';

export default function CoursesShowAll() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/courses/")
            .then(res => setData(res.data))
            .catch(err => {
                console.log(err);
                setError(err);
            });
    }, []);

    const deleteCourse = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/courses/${id}`);
            setData(data.filter(course => course._id !== id));
            setSuccessMessage('Course deleted successfully!');
            setTimeout(() => {
                setSuccessMessage(null);
            }, 3000);
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }

    return (
        <div className="container">
            <h2 className="heading">Courses Data</h2>
            {error && <div className="alert alert-danger">Error: {error.message}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Duration</th>
                            <th>Details</th>
                            <th>Softwares</th>
                            <th>Benefit</th>
                            <th>Original Price</th>
                            <th>Discount Price</th>
                            <th>Image</th>
                            <th>Give Remarks</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(course => (
                            <tr key={course._id}>
                                <td>{course.name}</td>
                                <td>{course.duration}</td>
                                <td>{course.details}</td>
                                <td>{course.softwares}</td>
                                <td>{course.benefit}</td>
                                <td>{course.originalPrice}</td>
                                <td>{course.discountPrice}</td>
                                <td><img src={course.image} alt={course.name} style={{ width: '100px', height: 'auto' }}/></td>
                                <td><Link to={`/GiveRemarks/${course._id}`} className='btn btn-sm btn-info me-2'>Give Remarks</Link></td>
                                <td><button onClick={() => deleteCourse(course._id)} className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

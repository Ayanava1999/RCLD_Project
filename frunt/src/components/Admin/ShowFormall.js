import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowFormall.css'; 
import { Link } from 'react-router-dom';

export default function ShowFormall() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/student/")
            .then(res => setData(res.data))
            .catch(err => {
                console.log(err);
                setError(err);
            });
    }, []);

    const deleteStudent = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/student/${id}`);
            setData(data.filter(student => student._id !== id));
            setSuccessMessage('Student deleted successfully!');
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
            <h2 className="heading">Student Data</h2>
            {error && <div className="alert alert-danger">Error: {error.message}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Course</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Remarks</th>
                            <th>Give Remarks</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(student => (
                            <tr key={student._id}>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.mob}</td>
                                <td>{student.address}</td>
                                <td>{student.course}</td>
                                <td>{new Date(student.createdAt).toLocaleString()}</td>
                                <td>{new Date(student.updatedAt).toLocaleString()}</td>
                                <td>{student.remarks}</td>
                                <td><Link to={`/GiveRemarks/${student._id}`} className='btn btn-sm btn-info me-2'>Give Remarks</Link></td>
                                <td><button onClick={() => deleteStudent(student._id)} className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

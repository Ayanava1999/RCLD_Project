import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function GiveRemarks() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const { id } = useParams();
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/student/${id}`);
        setStudent(response.data);
        console.log("Student data:", response.data);
      } catch (err) {
        console.error("Error fetching student:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchStudent();
    } else {
      setLoading(false);
      setError(new Error('Student ID not found in URL.'));
    }
  }, [id]);

  const submitHandler = async (event) => {
    event.preventDefault();
    setShowSuccessAlert(false);
    setShowErrorAlert(false);

    try {
      await axios.patch(`http://localhost:8080/student/${id}`, { remarks });
      setShowSuccessAlert(true);
    } catch (err) {
      setShowErrorAlert(true);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching student: {error.message}</div>;
  }

  if (!student) {
    return <div>No student found.</div>;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', width: '80%', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ flex: '1', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)' }}>
          <h2>{student.name}</h2>
          <p>{student.email}</p>
          <p>{student.mob}</p>
          <p>{student.address}</p>
          <p>{student.course}</p>
        </div>
        <div style={{ flex: '1', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)' }}>
          <h2>Submit Remarks</h2>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="remarks">Remarks</label>
              <input
                type="text"
                className="form-control"
                id="remarks"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter Remarks"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2 btn-xl">
              Set Remarks
            </button>
            {showSuccessAlert && <div className="alert alert-success mt-2">Remarks submitted successfully!</div>}
            {showErrorAlert && <div className="alert alert-danger mt-2">Error submitting remarks!</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

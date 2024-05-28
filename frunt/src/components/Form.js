import React, { useState } from "react";
import axios from "axios";
import logo2 from "../images/istockphoto-1139913278-612x612-removebg-preview.png";
// import { useNavigate } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");
  // const [remarks, setRemarks] = useState("");

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  // const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setShowSuccessAlert(false);
    setShowErrorAlert(false);

    axios
      .post("http://localhost:8080/student/", {
        name,
        email,
        mob,
        address,
        course,
        // remarks
      })
      .then((response) => {
        console.log(response);
        setShowSuccessAlert(true);
      })
      .catch((error) => {
        console.log(error);
        setShowErrorAlert(true);
      });
  };

  return (
    <div>
      <style>
        {`
        .hidden {
          display: none;
        }
        .alert-float {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          width: auto;
          max-width: 500px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .container2 {
          width: 90%;
          background-color: rgba(255, 255, 255, 0.3); /* Semi-transparent background */
          backdrop-filter: blur(10px); /* Blur effect */
          color: white;
          border-radius: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          padding: 20px;
          flex-wrap: wrap;
          margin-left: auto;
          margin-right: auto;
          box-shadow: -12px 18px 35px 0px rgba(0, 0, 0, 0.75);
        }

        .imageContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 20px;
        }

        .formContainer {
          width: 100%;
        }

        .logo {
          height: 80px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-control {
          width: 100%;
        }
        .lable1 {
          color: black;
        }
        .btn-xl {
          padding: 10px 60px;
          border-radius: 10px;
        }
        @media (min-width: 768px) {
          .container2 {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .imageContainer {
            width: 40%;
            margin-bottom: 0;
          }

          .logo {
            margin-top: 20px;
            height: 250px;
          }

          .formContainer {
            width: 50%;
          }
        }
        `}
      </style>

      {showSuccessAlert && (
        <div className="alert alert-success alert-dismissible alert-float" role="alert">
          <strong>You have successfully registered!</strong> We will get back to you very soon.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => setShowSuccessAlert(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      {showErrorAlert && (
        <div className="alert alert-danger alert-dismissible alert-float" role="alert">
          <strong>Form submission failed!</strong> Please try again later.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => setShowErrorAlert(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      <div className="container2">
        <div className="imageContainer">
          <img src={logo2} alt="Logo" className="logo" />
          <h1 style={{ color: "blue" }}>Student Form</h1>
        </div>
        <div className="formContainer">


          
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label className="lable1">Name</label>
              <input
                type="text"
                className="form-control"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
            </div>

            <div className="form-group">
              <label className="lable1">Email</label>
              <input
                type="email"
                className="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
            </div>

            <div className="form-group">
              <label className="lable1">Mobile</label>
              <input
                type="number"
                className="form-control"
                required
                value={mob}
                onChange={(e) => setMob(e.target.value)}
                placeholder="Mobile"
              />
            </div>

            <div className="form-group">
              <label className="lable1">Address</label>
              <input
                type="text"
                className="form-control"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
              />
            </div>

            <div className="form-group">
              <label className="lable1">Course</label>
              <input
                type="text"
                className="form-control"
                required
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Enter Course"
              />
            </div>
            {/* <div className="form-group">
              <label className="lable1">remarks</label>
              <input
                type="text"
                className="form-control"
                required
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter Course"
              />
            </div> */}

            <button type="submit" className="btn btn-primary mb-2 btn-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;

import React, { useState } from 'react';

export default function AddCourses() {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [details, setDetails] = useState("");
  const [softwares, setSoftwares] = useState("");
  const [benefit, setBenefit] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [image, setImage] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  function convertToBase64(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
        console.log(reader.result);
      };
      reader.onerror = (error) => {
        console.error("Error: ", error);
      };
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    setShowSuccessAlert(false);
    setShowErrorAlert(false);
  
    const courseData = {
      name,
      duration,
      details,
      softwares,
      benefit,
      originalPrice,
      discountPrice,
      image,
    };

    fetch("http://localhost:8080/cources/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setShowSuccessAlert(true);
    })
    .catch((error) => {
      console.error("Error:", error);
      setShowErrorAlert(true);
    });
  }

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
            background-color: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
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
          .label1 {
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
          <strong>Course added successfully!</strong> We will review the details shortly.
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
          <strong>Failed to add course!</strong> Please try again later.
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
          {/* <img src={logo2} alt="Logo" className="logo" /> */}
          <h1 style={{ color: "blue" }}>Add Course</h1>
        </div>
        <div className="formContainer">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label className="label1">Course Name</label>
              <input
                type="text"
                className="form-control"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Course Name"
              />
            </div>

            <div className="form-group">
              <label className="label1">Duration (months)</label>
              <input
                type="number"
                className="form-control"
                required
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Enter Duration in months"
              />
            </div>

            <div className="form-group">
              <label className="label1">Course Details</label>
              <input
                type="text"
                className="form-control"
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Enter Course Details"
              />
            </div>

            <div className="form-group">
              <label className="label1">Software Used</label>
              <input
                type="text"
                className="form-control"
                required
                value={softwares}
                onChange={(e) => setSoftwares(e.target.value)}
                placeholder="Enter Software Used"
              />
            </div>

            <div className="form-group">
              <label className="label1">Benefits</label>
              <input
                type="text"
                className="form-control"
                required
                value={benefit}
                onChange={(e) => setBenefit(e.target.value)}
                placeholder="Enter Course Benefits"
              />
            </div>

            <div className="form-group">
              <label className="label1">Original Price</label>
              <input
                type="number"
                className="form-control"
                required
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                placeholder="Enter Original Price"
              />
            </div>

            <div className="form-group">
              <label className="label1">Discount Price</label>
              <input
                type="text"
                className="form-control"
                required
                value={discountPrice}
                onChange={(e) => setDiscountPrice(e.target.value)}
                placeholder="Enter Discount Price"
              />
            </div>

            <div className="form-group">
              <label className="label1">Upload Image</label>
              <input accept="image/*" type="file" onChange={convertToBase64} />
              {image && (
                <img width={100} height={100} src={image} alt="Uploaded" />
              )}
            </div>

            <button type="submit" className="btn btn-primary mb-2 btn-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

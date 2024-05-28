const express = require("express");

const {
  createStudent,
  getStudentAll,
  getstudentSingle,
  deleteStudentSingle,
  updateStudentRemarks
  
  
} = require("../controllers/studentControler");

const router = express.Router();



//post a new workout
router.post("/", createStudent);
//get all students
router.get("/",getStudentAll);
//get a singlestudent
router.get("/:id",  getstudentSingle);
//delete a singlestudent
router.delete("/:id",deleteStudentSingle);
//update 
router.patch("/:id",updateStudentRemarks);


module.exports = router;

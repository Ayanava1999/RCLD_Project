const express = require("express");
const {
  createCourse,
  getAllCourses,
  getCourse,
  deleteCourse,
} = require("../controllers/courceController");

const router = express.Router();

// Post a new course
router.post("/", createCourse);

// Get all courses
router.get("/", getAllCourses);

// Get a single course
router.get("/:id", getCourse);

// Delete a single course
router.delete("/:id", deleteCourse);

module.exports = router;

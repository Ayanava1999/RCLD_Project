const Course = require("../model/courcesModel");
const mongoose = require("mongoose");

// Create new course
const createCourse = async (req, res) => {
  const { name, duration, details, softwares, benefit, originalPrice, discountPrice, image } = req.body;

  // Validate if the image is in Base64 format
  const base64Pattern = /^data:image\/(png|jpeg|jpg);base64,/;
  if (!base64Pattern.test(image)) {
    return res.status(400).json({ error: "Invalid image format. The image must be a Base64 encoded string." });
  }

  try {
    const course = await Course.create({ name, duration, details, softwares, benefit, originalPrice, discountPrice, image });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({}).sort({ createdAt: -1 });
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get single course
const getCourse = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid course ID" });
  }
  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete course
const deleteCourse = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid course ID" });
  }
  try {
    const course = await Course.findByIdAndDelete(id);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted successfully", course });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourse,
  deleteCourse,
};

const Student = require("../model/studentModel");
const mongoose = require("mongoose");

// Create new student
const createStudent = async (req, res) => {
  const { name, email, mob, address, course, remarks } = req.body;
  try {
    const student = await Student.create({ name, email, mob, address, course, remarks });
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all students
const getStudentAll = async (req, res) => {
  const students = await Student.find({}).sort({ createdAt: -1 });
  res.status(200).json(students);
};

// Get single student
const getstudentSingle = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid student ID" });
  }
  const student = await Student.findById(id);
  if (!student) {
    return res.status(400).json({ error: "No such student" });
  } else {
    res.status(200).json(student);
  }
};

// Delete single student
const deleteStudentSingle = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid student ID" });
  }
  const student = await Student.findByIdAndDelete(id);
  if (!student) {
    return res.status(400).json({ error: "No such student" });
  } else {
    res.status(200).json(student);
  }
};

// Update student remarks
const updateStudentRemarks = async (req, res) => {
  const { id } = req.params;
  const { remarks } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid student ID" });
  }

  try {
    const student = await Student.findByIdAndUpdate(
      id,
      { $set: { remarks } },
      { new: true, runValidators: true }
    );

    if (!student) {
      return res.status(404).json({ error: "No such student" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createStudent,
  getStudentAll,
  getstudentSingle,
  deleteStudentSingle,
  updateStudentRemarks,
};

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const AddStudentResult = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    rollNo: "",
    name: "",
    semester: "",
    subjects: [
      { name: "", marks: "" },
      { name: "", marks: "" },
      { name: "", marks: "" },
      { name: "", marks: "" },
      { name: "", marks: "" },
      { name: "", marks: "" },
    ],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = [...formData.subjects];
    updatedSubjects[index][field] = value;
    setFormData({ ...formData, subjects: updatedSubjects });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Student result added successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h2>Add Student Result</h2>
      <form onSubmit={handleSubmit}>
        <label>Roll Number:</label>
        <input
          type="text"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
          required
        />

        <label>Student Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Semester:</label>
        <select
          name="semester"
          value={formData.semester}
          onChange={handleChange}
          required
        >
          <option value="">--Select Semester--</option>
          <option value="1">Semester 1</option>
          <option value="2">Semester 2</option>
          <option value="3">Semester 3</option>
          <option value="4">Semester 4</option>
          <option value="5">Semester 5</option>
          <option value="6">Semester 6</option>
        </select>

        <h3>Subjects & Marks</h3>
        {formData.subjects.map((subject, index) => (
          <div className="subject-row" key={index}>
            <input
              type="text"
              placeholder={`Subject ${index + 1} Name`}
              value={subject.name}
              onChange={(e) =>
                handleSubjectChange(index, "name", e.target.value)
              }
              required
            />
            <input
              type="number"
              placeholder="Marks"
              value={subject.marks}
              onChange={(e) =>
                handleSubjectChange(index, "marks", e.target.value)
              }
              required
            />
          </div>
        ))}

        <div className="form-buttons">
          <button type="button" onClick={() => navigate("/dashboard")}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentResult;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const EditResult = () => {
  const navigate = useNavigate();

  const [rollNo, setRollNo] = useState("");
  const [studentData, setStudentData] = useState(null);

  const searchResult = () => {
    const demoData = {
      name: "Shaista Ansari",
      exam: "Mid Term Exam",
      year: "2022-2023",
      class: "Computer Science - Year 2",
      semester: "Semester 1",
      totalMarks: 500,
      obtainedMarks: 425,
      subjects: [
        { name: "Data Structures", total: 100, obtained: 85 },
        { name: "Database Systems", total: 100, obtained: 92 },
        { name: "Software Engineering", total: 100, obtained: 78 },
      ],
      grade: "A",
      percentage: 85.0,
      remarks:
        "Excellent performance in all subjects. Student shows strong understanding of core concepts.",
    };

    setStudentData(demoData);
  };

  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = [...studentData.subjects];
    updatedSubjects[index][field] = value;
    setStudentData({ ...studentData, subjects: updatedSubjects });
  };

  const addSubject = () => {
    setStudentData({
      ...studentData,
      subjects: [
        ...studentData.subjects,
        { name: "", total: "", obtained: "" },
      ],
    });
  };

  const removeSubject = (index) => {
    const updatedSubjects = studentData.subjects.filter(
      (_, i) => i !== index
    );
    setStudentData({ ...studentData, subjects: updatedSubjects });
  };

  const handleUpdate = () => {
    console.log("Updated Data:", studentData);
    alert("Result updated successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h2>Edit Result</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search by Roll Number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        <button onClick={searchResult}>Search</button>
      </div>

      {studentData && (
        <>
          <div className="student-info">
            <label>Student Name:</label>
            <input
              type="text"
              value={studentData.name}
              onChange={(e) =>
                setStudentData({ ...studentData, name: e.target.value })
              }
            />

            <label>Examination:</label>
            <input
              type="text"
              value={studentData.exam}
              onChange={(e) =>
                setStudentData({ ...studentData, exam: e.target.value })
              }
            />

            <label>Academic Year:</label>
            <input
              type="text"
              value={studentData.year}
              onChange={(e) =>
                setStudentData({ ...studentData, year: e.target.value })
              }
            />

            <label>Class:</label>
            <input
              type="text"
              value={studentData.class}
              onChange={(e) =>
                setStudentData({ ...studentData, class: e.target.value })
              }
            />

            <label>Semester:</label>
            <input
              type="text"
              value={studentData.semester}
              onChange={(e) =>
                setStudentData({ ...studentData, semester: e.target.value })
              }
            />

            <label>Total Marks:</label>
            <input
              type="number"
              value={studentData.totalMarks}
              onChange={(e) =>
                setStudentData({
                  ...studentData,
                  totalMarks: e.target.value,
                })
              }
            />

            <label>Obtained Marks:</label>
            <input
              type="number"
              value={studentData.obtainedMarks}
              onChange={(e) =>
                setStudentData({
                  ...studentData,
                  obtainedMarks: e.target.value,
                })
              }
            />
          </div>

          <h3>Subject-wise Marks</h3>
          {studentData.subjects.map((sub, index) => (
            <div className="subject-row" key={index}>
              <input
                type="text"
                placeholder="Subject Name"
                value={sub.name}
                onChange={(e) =>
                  handleSubjectChange(index, "name", e.target.value)
                }
              />
              <input
                type="number"
                placeholder="Total Marks"
                value={sub.total}
                onChange={(e) =>
                  handleSubjectChange(index, "total", e.target.value)
                }
              />
              <input
                type="number"
                placeholder="Obtained Marks"
                value={sub.obtained}
                onChange={(e) =>
                  handleSubjectChange(index, "obtained", e.target.value)
                }
              />
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeSubject(index)}
              >
                ❌
              </button>
            </div>
          ))}

          <button type="button" onClick={addSubject}>
            + Add Subject
          </button>

          <label>Grade:</label>
          <input
            type="text"
            value={studentData.grade}
            onChange={(e) =>
              setStudentData({ ...studentData, grade: e.target.value })
            }
          />

          <label>Percentage:</label>
          <input
            type="number"
            value={studentData.percentage}
            onChange={(e) =>
              setStudentData({ ...studentData, percentage: e.target.value })
            }
          />

          <label>Remarks:</label>
          <textarea
            value={studentData.remarks}
            onChange={(e) =>
              setStudentData({ ...studentData, remarks: e.target.value })
            }
          />

          <div className="form-buttons">
            <button type="button" onClick={() => navigate("/dashboard")}>
              Cancel
            </button>
            <button type="button" onClick={handleUpdate}>
              Update Result
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EditResult;
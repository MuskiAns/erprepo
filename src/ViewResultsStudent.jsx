import React, { useState } from "react";

const ViewResultsStudent = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [student, setStudent] = useState(null);

  // Dummy data (replace with DB/API later)
  const results = [
    {
      roll: "101",
      name: "Shaista Ansari",
      class: "10A",
      subjects: [
        { name: "Maths", marks: 85 },
        { name: "Science", marks: 90 },
        { name: "English", marks: 78 },
        { name: "History", marks: 88 },
      ],
    },
    {
      roll: "102",
      name: "Ali Khan",
      class: "10A",
      subjects: [
        { name: "Maths", marks: 75 },
        { name: "Science", marks: 80 },
        { name: "English", marks: 70 },
        { name: "History", marks: 82 },
      ],
    },
  ];

  const handleSearch = () => {
    const found = results.find((s) => s.roll === rollNumber);
    setStudent(found || null);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🎓 Student Result Portal</h2>
      <input
        type="text"
        placeholder="Enter Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={handleSearch} style={{ padding: "8px 16px" }}>
        Search
      </button>

      {student ? (
        <div style={{ marginTop: 30, border: "1px solid #ccc", padding: 20, borderRadius: 8 }}>
          <h3>Result for {student.name}</h3>
          <p><b>Roll No:</b> {student.roll}</p>
          <p><b>Class:</b> {student.class}</p>

          <table border="1" cellPadding="10" style={{ marginTop: 20, borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr style={{ background: "#f2f2f2" }}>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {student.subjects.map((subj, i) => (
                <tr key={i}>
                  <td>{subj.name}</td>
                  <td>{subj.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={{ marginTop: 20 }}>
            <b>Total Marks:</b> {student.subjects.reduce((sum, s) => sum + s.marks, 0)} /{" "}
            {student.subjects.length * 100}
          </p>
          <p>
            <b>Percentage:</b>{" "}
            {(
              (student.subjects.reduce((sum, s) => sum + s.marks, 0) /
                (student.subjects.length * 100)) *
              100
            ).toFixed(2)}
            %
          </p>
        </div>
      ) : rollNumber !== "" ? (
        <p style={{ marginTop: 20, color: "red" }}>⚠️ No result found!</p>
      ) : null}
    </div>
  );
};

export default ViewResultsStudent;

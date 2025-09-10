import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const studentData = [
  { rollNo: "CS2021001", name: "Shaista Ansari", semester: "Semester 6", percentage: 92.5 },
  { rollNo: "CS2021002", name: "Swapnali", semester: "Semester 6", percentage: 87.8 },
  { rollNo: "ME2021015", name: "Disha", semester: "Semester 4", percentage: 75.1 },
  { rollNo: "ECE2021008", name: "Vaibhav", semester: "Semester 5", percentage: 89.2 },
  { rollNo: "CE2021012", name: "Afsan", semester: "Semester 3", percentage: 68.4 },
];

export default function ViewResults() {
  const [search, setSearch] = useState("");
  const [semester, setSemester] = useState("All Semesters");
  const [branch, setBranch] = useState("All Branches");

  const filteredData = studentData.filter(
    (s) =>
      (s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.rollNo.toLowerCase().includes(search.toLowerCase())) &&
      (semester === "All Semesters" || s.semester === semester) &&
      (branch === "All Branches" || s.rollNo.startsWith(branch))
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-semibold">View Results</h2>
      <p className="text-gray-500 mb-4">Manage and view student results</p>

      <div className="bg-white shadow rounded-lg p-4 mb-6 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Enter name or roll number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 flex-1"
        />

        <select
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="border rounded p-2"
        >
          <option>All Semesters</option>
          <option>Semester 3</option>
          <option>Semester 4</option>
          <option>Semester 5</option>
          <option>Semester 6</option>
        </select>

        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="border rounded p-2"
        >
          <option>All Branches</option>
          <option value="CS">CS</option>
          <option value="ME">ME</option>
          <option value="ECE">ECE</option>
          <option value="CE">CE</option>
        </select>

        <button
          onClick={() => {
            setSearch("");
            setSemester("All Semesters");
            setBranch("All Branches");
          }}
          className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
        >
          Reset Filters
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <p>
            Showing {filteredData.length} of {studentData.length} results
          </p>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Export
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Roll No</th>
              <th className="p-2">Name</th>
              <th className="p-2">Semester</th>
              <th className="p-2">Percentage</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((student, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-2">{student.rollNo}</td>
                <td className="p-2 flex items-center gap-2">
                  <img
                    src={`https://i.pravatar.cc/40?img=${i + 1}`}
                    alt={student.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {student.name}
                </td>
                <td className="p-2">{student.semester}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      student.percentage >= 85
                        ? "bg-green-500"
                        : student.percentage >= 70
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {student.percentage}%
                  </span>
                </td>
                <td className="p-2 flex gap-2">
                  <button className="p-2 border rounded hover:bg-gray-100">
                    <Pencil size={16} />
                  </button>
                  <button className="p-2 border rounded hover:bg-gray-100">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <p>Showing 1 to 5 of 45 results</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded bg-blue-500 text-white">
              1
            </button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="px-3 py-1 border rounded">3</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Edit, Trash2 } from "lucide-react";

const teachers = [
  {
    name: "Sarah Johnson",
    subject: "Mathematics",
    email: "sarah.johnson@school.edu",
    role: "Senior Teacher",
    roleColor: "bg-green-100 text-green-800",
  },
  {
    name: "Michael Chen",
    subject: "Physics",
    email: "michael.chen@school.edu",
    role: "Teacher",
    roleColor: "bg-blue-100 text-blue-800",
  },
  {
    name: "Emily Davis",
    subject: "English Literature",
    email: "emily.davis@school.edu",
    role: "Department Head",
    roleColor: "bg-purple-100 text-purple-800",
  },
  {
    name: "David Rodriguez",
    subject: "Chemistry",
    email: "david.rodriguez@school.edu",
    role: "Teacher",
    roleColor: "bg-blue-100 text-blue-800",
  },
];

export default function ManageTeachers() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Manage Teachers</h2>
            <p className="text-gray-500 text-sm">
              Add, edit, and manage teacher accounts
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md">
            + Add Teacher
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">All Teachers</h3>
          <input
            type="text"
            placeholder="Search teachers..."
            className="border px-3 py-2 rounded-lg w-64 shadow-sm"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-sm text-gray-600">
                <th className="p-3">Teacher Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <p className="font-semibold">{teacher.name}</p>
                    <p className="text-sm text-gray-500">{teacher.subject}</p>
                  </td>
                  <td className="p-3 text-sm">{teacher.email}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${teacher.roleColor}`}
                    >
                      {teacher.role}
                    </span>
                  </td>
                  <td className="p-3 flex gap-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 mt-4">
          <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-gray-100">
            Previous
          </button>
          <button className="px-3 py-1 border rounded-lg bg-blue-600 text-white">
            1
          </button>
          <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
            2
          </button>
          <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
            3
          </button>
          <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const ViewUser = () => {
  // Data contoh pengguna
  const allUsers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Editor' },
    // Tambahkan data pengguna lainnya jika diperlukan
  ];

  // State untuk pencarian, halaman, dan jumlah item per halaman
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter pengguna berdasarkan pencarian
  const filteredUsers = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hitung total halaman
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  // Ambil data pengguna untuk halaman saat ini
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-gray-50 border border-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">User List</h1>
        <div className="w-full sm:w-1/2">
          <nav className="flex justify-end">
            <ol className="flex space-x-2 text-gray-700">
              <li>
                <a href="#" className="text-blue-500 hover:underline">Home</a>
              </li>
              <li>/</li>
              <li className="text-gray-600">User List</li>
            </ol>
          </nav>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-2" />
      {/* Button Add User */}
      <div className="mb-4 flex justify-between">
        <Link to="/user/create">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            <FaPlus className="inline mr-2" />
            Add User
          </button>
        </Link>
      </div>

      {/* Input pencarian */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded-lg w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Role</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {paginatedUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-4 text-sm font-medium">{user.id}</td>
                <td className="px-6 py-4 text-sm">{user.name}</td>
                <td className="px-6 py-4 text-sm">{user.email}</td>
                <td className="px-6 py-4 text-sm">{user.role}</td>
                <td className="px-6 py-4 text-sm flex space-x-2">
                  <Link to={`/user/edit/${user.id}`}>
                    <button className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 transition">
                      <FaEdit className="w-5 h-5" />
                    </button>
                  </Link>
                  <button className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition">
                    <FaTrash className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-800">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ViewUser;

import React from 'react';

const CreateUser = () => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6">Create User</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="role">
            Role
          </label>
          <select
            id="role"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Editor">Editor</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;

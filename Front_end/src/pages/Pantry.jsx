import React, { useEffect, useState } from 'react';
import { getPantryStaff, addPantryStaff, updatePantryStaff, deletePantryStaff } from '../services/pantryService';

const Pantry = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [formData, setFormData] = useState({ name: '', contactInfo: '', location: '' });
  const [editing, setEditing] = useState(null); // Used for edit mode
  
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const data = await getPantryStaff();
        setStaff(data.staff);
      } catch (error) {
        setError("Error fetching pantry staff");
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddStaff = async () => {
    try {
      if (editing) {
        // Update existing staff
        await updatePantryStaff(editing._id, formData);
        setSuccessMessage('Staff updated successfully');
      } else {
        // Add new staff
        await addPantryStaff(formData);
        setSuccessMessage('Staff added successfully');
      }
      setFormData({ name: '', contactInfo: '', location: '' });
      setEditing(null);
      // Refresh staff list
      const data = await getPantryStaff();
      setStaff(data.staff);
    } catch (error) {
      setError('Error adding/updating staff');
    }
  };

  const handleEdit = (staffMember) => {
    setEditing(staffMember);
    setFormData({
      name: staffMember.name,
      contactInfo: staffMember.contactInfo,
      location: staffMember.location
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this staff?')) {
      try {
        await deletePantryStaff(id);
        setSuccessMessage('Staff deleted successfully');
        // Refresh staff list
        const data = await getPantryStaff();
        setStaff(data.staff);
      } catch (error) {
        setError('Error deleting staff');
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Pantry Staff</h1>
      
      {/* Success/Error Messages */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      
      {/* Staff Form */}
      <div className="my-4">
        <h2 className="text-xl">{editing ? 'Edit Staff' : 'Add New Staff'}</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="my-2">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="border px-4 py-2 w-full"
            />
          </div>
          <div className="my-2">
            <label>Contact Info:</label>
            <input
              type="text"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleInputChange}
              required
              className="border px-4 py-2 w-full"
            />
          </div>
          <div className="my-2">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              className="border px-4 py-2 w-full"
            />
          </div>
          <button
            type="button"
            onClick={handleAddStaff}
            className="bg-blue-500 text-white py-2 px-4 mt-4"
          >
            {editing ? 'Update Staff' : 'Add Staff'}
          </button>
        </form>
      </div>

      {/* Staff Table */}
      <table className="min-w-full mt-6 table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Location</th>
            <th className="py-2 px-4 text-left">Contact</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((staffMember) => (
            <tr key={staffMember._id}>
              <td className="py-2 px-4">{staffMember.name}</td>
              <td className="py-2 px-4">{staffMember.location}</td>
              <td className="py-2 px-4">{staffMember.contactInfo}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleEdit(staffMember)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(staffMember._id)}
                  className="bg-red-500 text-white py-1 px-3 ml-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pantry;

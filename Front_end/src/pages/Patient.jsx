import React, { useEffect, useState } from 'react';
import { getPatients, addPatient } from '../services/patientServices'; 

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    gender: '',
    diseases: [],
    allergies: [],
    roomNumber: '',
    bedNumber: '',
    floorNumber: '',
    contactInfo: '',
    emergencyContact: '',
    otherDetails: '',
  });

  useEffect(() => {
    const fetchPatients = async () => {
      const data = await getPatients();
     
      setPatients(data.patients);
    };
    fetchPatients();
  }, []);

  const handleAddPatient = async () => {
    try {
      await addPatient(newPatient);

      setNewPatient({
        name: '',
        age: '',
        gender: '',
        diseases: [],
        allergies: [],
        roomNumber: '',
        bedNumber: '',
        floorNumber: '',
        contactInfo: '',
        emergencyContact: '',
        otherDetails: '',
      });

      const updatedPatients = await getPatients();
      setPatients(updatedPatients);
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Patients</h1>

      {/* Add Patient Form */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Name"
          value={newPatient.name}
          onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
          className="p-2 border rounded mr-2 mb-2 w-64"
        />
        <input
          type="number"
          placeholder="Age"
          value={newPatient.age}
          onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
          className="p-2 border rounded mr-2 mb-2 w-64"
        />
        <input
          type="text"
          placeholder="Gender"
          value={newPatient.gender}
          onChange={(e) => setNewPatient({ ...newPatient, gender: e.target.value })}
          className="p-2 border rounded mr-2 mb-2 w-64"
        />
        <input
          type="text"
          placeholder="Diseases (comma separated)"
          value={newPatient.diseases.join(', ')}
          onChange={(e) => setNewPatient({
            ...newPatient,
            diseases: e.target.value.split(',').map(disease => disease.trim())
          })}
          className="p-2 border rounded mr-2 mb-2 w-64"
        />
        <input
          type="text"
          placeholder="Allergies (comma separated)"
          value={newPatient.allergies.join(', ')}
          onChange={(e) => setNewPatient({
            ...newPatient,
            allergies: e.target.value.split(',').map(allergy => allergy.trim())
          })}
          className="p-2 border rounded mr-2 mb-2 w-64"
        />
        <input
          type="text"
          placeholder="Room Number"
          value={newPatient.roomNumber}
          onChange={(e) => setNewPatient({ ...newPatient, roomNumber: e.target.value })}
          className="p-2 border rounded mr-2 mb-2 w-64"
        />
        <input
          type="text"
          placeholder="Bed Number"
          value={newPatient.bedNumber}
          onChange={(e) => setNewPatient({ ...newPatient, bedNumber: e.target.value })}
          className="p-2 border rounded mr-2 mb-2 w-64"
        />
        <input
          type="text"
          placeholder="Floor Number"
          value={newPatient.floorNumber}
          onChange={(e) => setNewPatient({ ...newPatient, floorNumber: e.target.value })}
          className="p-2 border rounded mr-2 mb-2 w-64"
        />
        <input
          type="text"
          placeholder="Contact Info"
          value={newPatient.contactInfo}
          onChange={(e) => setNewPatient({ ...newPatient, contactInfo: e.target.value })}
          className="p-2 border rounded mr-2 mb-2 w-64"
        />
        <input
          type="text"
          placeholder="Emergency Contact"
          value={newPatient.emergencyContact}
          onChange={(e) => setNewPatient({ ...newPatient, emergencyContact: e.target.value })}
          className="p-2 border rounded mr-2 mb-2 w-64"
        />
        <textarea
          placeholder="Other Details"
          value={newPatient.otherDetails}
          onChange={(e) => setNewPatient({ ...newPatient, otherDetails: e.target.value })}
          className="p-2 border rounded mr-2 mb-2 w-64"
        />

        <button
          onClick={handleAddPatient}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add Patient
        </button>
      </div>

      {/* Patients List */}
      <table className="w-full table-auto border">
        <thead>
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Gender</th>
            <th className="p-2 border">Room Number</th>
            <th className="p-2 border">Bed Number</th>
            <th className="p-2 border">Contact Info</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient._id}>
              <td className="p-2 border">{patient.name}</td>
              <td className="p-2 border">{patient.age}</td>
              <td className="p-2 border">{patient.gender}</td>
              <td className="p-2 border">{patient.roomNumber}</td>
              <td className="p-2 border">{patient.bedNumber}</td>
              <td className="p-2 border">{patient.contactInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;

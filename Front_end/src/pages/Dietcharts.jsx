import React, { useState, useEffect } from "react";
import { getDietCharts, addDietChart } from "../services/dietChartService";
import { getPatients } from "../services/patientServices";

const DietCharts = () => {
  const [dietCharts, setDietCharts] = useState([]);
  const [patients, setPatients] = useState([]); 
  const [newDietChart, setNewDietChart] = useState({
    patient: "",
    meals: { morning: "", evening: "", night: "" },
    instructions: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dietData = await getDietCharts();
        setDietCharts(dietData.dietCharts);

        const patientData = await getPatients(); 
        setPatients(patientData.patients);
      } catch (error) {
        console.error("Error fetching diet charts:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('meals')) {
      setNewDietChart((prev) => ({
        ...prev,
        meals: {
          ...prev.meals,
          [name]: value,
        },
      }));
    } else {
      setNewDietChart((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newDietChart.patient || !newDietChart.morning || !newDietChart.evening || !newDietChart.night || !newDietChart.instructions) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      await addDietChart(newDietChart);
      setNewDietChart({
        patient: "",
        meals: { morning: "", evening: "", night: "" },
        instructions: "",
      });
      const updatedDietCharts = await getDietCharts();
      setDietCharts(updatedDietCharts.dietCharts);
    } catch (error) {
      console.error("Error adding diet chart:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Diet Charts</h1>
      
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label htmlFor="patient" className="block text-sm font-medium">Patient</label>
          <select
            id="patient"
            name="patient"
            value={newDietChart.patient}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a patient</option>
            {patients.map((patient) => (
              <option key={patient._id} value={patient._id}>
                {patient.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="morning" className="block text-sm font-medium">Morning Meal</label>
          <input
            id="morning"
            name="morning"
            type="text"
            
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="evening" className="block text-sm font-medium">Evening Meal</label>
          <input
            id="evening"
            name="evening"
            type="text"
            
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="night" className="block text-sm font-medium">Night Meal</label>
          <input
            id="night"
            name="night"
            type="text"
            
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="instructions" className="block text-sm font-medium">Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            value={newDietChart.instructions}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create Diet Chart</button>
      </form>

      <table className="min-w-full mt-6 table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 text-left border-r">Patient Name</th>
            <th className="py-2 px-4 text-left border-r">Morning Meal</th>
            <th className="py-2 px-4 text-left border-r">Evening Meal</th>
            <th className="py-2 px-4 text-left border-r">Night Meal</th>
            <th className="py-2 px-4 text-left border-r">Instructions</th>
            <th className="py-2 px-4 text-left">Created On</th>
          </tr>
        </thead>
        <tbody>
  {dietCharts.length > 0 ? (
    dietCharts.map((dietChart) => {
      const patient = patients.find((patient) => patient._id === dietChart.patient);
      return (
        <tr key={dietChart._id} className="border-b hover:bg-gray-50">
          <td className="py-2 px-4 border-r">
            {patient ? patient.name : "Unknown"}
          </td>
          <td className="py-2 px-4 border-r">{dietChart.meals.morning}</td>
          <td className="py-2 px-4 border-r">{dietChart.meals.evening}</td>
          <td className="py-2 px-4 border-r">{dietChart.meals.night}</td>
          <td className="py-2 px-4 border-r">{dietChart.instructions || "N/A"}</td>
          <td className="py-2 px-4">{new Date(dietChart.createdAt).toLocaleDateString()}</td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan="6" className="text-center py-4">
        No diet charts found.
      </td>
    </tr>
  )}
</tbody>
      </table>
    </div>
  );
};

export default DietCharts;

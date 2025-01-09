import React, { useEffect, useState } from 'react';
import { getDeliveries } from '../services/deliverieService';

const Deliveries = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        const data = await getDeliveries();
        setDeliveries(data.deliveries);
      } catch (error) {
        console.error("Error fetching deliveries:", error);
      }
    };

    fetchDeliveries();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Deliveries</h1>
      <table className="min-w-full mt-6 table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">Diet Chart</th>
            <th className="py-2 px-4 text-left">Delivery Personnel</th>
            <th className="py-2 px-4 text-left">Delivery Status</th>
            <th className="py-2 px-4 text-left">Timestamp</th>
            <th className="py-2 px-4 text-left">Notes</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery._id}>
              {/* Populate details from the delivery object */}
              <td className="py-2 px-4">{delivery.dietChart?.name || 'N/A'}</td>
              <td className="py-2 px-4">{delivery.deliveryPersonnel?.name || 'N/A'}</td>
              <td className="py-2 px-4">{delivery.status}</td>
              <td className="py-2 px-4">{new Date(delivery.timestamp).toLocaleString()}</td>
              <td className="py-2 px-4">{delivery.notes || 'No notes'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Deliveries;

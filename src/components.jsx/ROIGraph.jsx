import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ROIGraph() {
  const data = [
    { name: 'Jan', roi: 20 },
    { name: 'Fev', roi: 35 },
    { name: 'Mar', roi: 50 },
    { name: 'Abr', roi: 40 },
    { name: 'Mai', roi: 60 },
  ];

  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">📊 ROI por Mês</h2>
      <div className="bg-white p-4 rounded border">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="roi" stroke="#4f46e5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
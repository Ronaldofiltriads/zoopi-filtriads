import React from 'react';

export default function NichoSugerido() {
  const nicho = 'Marketing Digital para Infoprodutores';

  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">🎯 Nicho Sugerido</h2>
      <div className="bg-indigo-100 text-indigo-800 px-4 py-3 rounded font-medium">
        {nicho}
      </div>
    </div>
  );
}
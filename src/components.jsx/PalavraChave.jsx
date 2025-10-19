import React from 'react';

export default function PalavrasChave() {
  const palavras = ['tráfego pago', 'funil de vendas', 'copywriting', 'lead qualificado'];

  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">🧠 Palavras-Chave Sugeridas</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        {palavras.map((palavra, index) => (
          <li key={index}>{palavra}</li>
        ))}
      </ul>
    </div>
  );
}
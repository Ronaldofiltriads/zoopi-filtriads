import React, { useState } from 'react';

export default function BuscaPalavraChave() {
  const [palavra, setPalavra] = useState('');

  const buscar = () => {
    // lógica de busca
    console.log('Buscando por:', palavra);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">🔍 Buscar Palavra-Chave</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={palavra}
          onChange={(e) => setPalavra(e.target.value)}
          placeholder="Digite uma palavra-chave"
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={buscar}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
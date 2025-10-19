import React from 'react';

export default function PaginaFiltriads() {
  const url = 'https://zoopi-filtriads.com/sua-pagina';

  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">🌐 Página Filtriads Gerada</h2>
      <div className="bg-white p-4 rounded border flex items-center justify-between">
        <span className="text-indigo-700 font-medium break-all">{url}</span>
        <button
          onClick={() => navigator.clipboard.writeText(url)}
          className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Copiar Link
        </button>
      </div>
    </div>
  );
}
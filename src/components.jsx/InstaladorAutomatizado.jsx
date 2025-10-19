import React, { useState } from 'react';

export default function InstaladorAutomatizado() {
  const [instalado, setInstalado] = useState(false);

  const instalar = () => {
    // lógica de instalação
    setInstalado(true);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">⚙️ Instalador Automatizado</h2>

      {!instalado ? (
        <button
          onClick={instalar}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Instalar Agora
        </button>
      ) : (
        <p className="text-green-700 font-medium">✅ Instalação concluída com sucesso!</p>
      )}
    </div>
  );
}
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function PainelPrincipal() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">🎯 Zoopi Filtriads</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Sair
        </button>
      </div>

      {/* Aqui você pode renderizar os módulos do painel */}
      <p className="text-gray-600">Bem-vindo ao seu painel de afiliado!</p>
    </div>
  );
}
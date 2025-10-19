import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Cadastro({ onCadastro }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');

  const handleCadastro = async () => {
    if (senha !== confirmacao) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      onCadastro();
    } catch (error) {
      alert('Erro ao cadastrar: ' + error.message);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-md shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">📝 Cadastro</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-3 border px-3 py-2 rounded"
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="w-full mb-3 border px-3 py-2 rounded"
      />
      <input
        type="password"
        placeholder="Confirmar Senha"
        value={confirmacao}
        onChange={(e) => setConfirmacao(e.target.value)}
        className="w-full mb-4 border px-3 py-2 rounded"
      />
      <button
        onClick={handleCadastro}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Criar Conta
      </button>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import PainelPrincipal from './components/PainelPrincipal';
import { auth } from './firebase';

export default function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUsuarioLogado(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            usuarioLogado ? (
              <PainelPrincipal />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={<Login onLogin={() => setUsuarioLogado(auth.currentUser)} />}
        />
        <Route
          path="/cadastro"
          element={<Cadastro onCadastro={() => setUsuarioLogado(auth.currentUser)} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
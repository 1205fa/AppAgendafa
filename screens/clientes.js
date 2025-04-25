import React, { useEffect } from 'react';

const ClientesScreen = () => {
  useEffect(() => {
    console.log('Clientes Screen carregado');
  }, []);

  return (
    <div>
      <h1>Clientes</h1>
      {/* Outros componentes ou conteúdos */}
    </div>
  );
};

export default ClientesScreen;


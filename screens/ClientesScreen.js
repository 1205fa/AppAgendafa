import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function ClientesScreen() {
  const [clientes, setClientes] = useState([]);

  // Exemplo de dados de clientes. Você pode substituir isso por dados reais de um banco de dados ou API
  useEffect(() => {
    const data = [
      { id: '1', nome: 'João Silva', email: 'joao@email.com', telefone: '1234-5678' },
      { id: '2', nome: 'Maria Oliveira', email: 'maria@email.com', telefone: '8765-4321' },
      { id: '3', nome: 'Carlos Pereira', email: 'carlos@email.com', telefone: '1122-3344' }
    ];

    setClientes(data); // Atualiza o estado com os dados dos clientes
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Clientes</Text>
      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>Nome: {item.nome}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Telefone: {item.telefone}</Text>
          </View>
        )}
      />
    </View>
  );
}

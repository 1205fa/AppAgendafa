import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function ClientesScreen() {
  // UseEffect para logar quando a tela for carregada
  useEffect(() => {
    console.log('Clientes Screen carregado');
  }, []); // O array vazio faz com que o log seja feito apenas uma vez, quando o componente for montado

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Clientes</Text>
    </View>
  );
}

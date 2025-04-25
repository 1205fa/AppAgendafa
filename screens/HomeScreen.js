// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Bem-vindo à tela inicial!</Text>
      <Button
        title="Ir para Clientes"
        onPress={() => navigation.navigate('Clientes')}
      />
    </View>
  );
};

export default HomeScreen;

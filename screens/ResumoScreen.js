import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResumoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Resumo de Vendas</Text>

      <View style={styles.buttonContainer}>
        <Button title="Voltar para o Início" onPress={() => navigation.navigate('Início')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  buttonContainer: { width: '100%', gap: 20 },
});

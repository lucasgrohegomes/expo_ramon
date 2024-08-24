import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Componente Saldo
const Saldo = ({ saldo }) => {
  return (
    <View style={styles.saldoContainer}>
      <Text style={styles.saldoTexto}>Saldo: R$ {saldo.toFixed(2)}</Text>
    </View>
  );
};

// Componente Ações
const Acoes = ({ onDepositar, onSacar, valor, setValor }) => {
  return (
    <View style={styles.acoesContainer}>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={setValor}
        placeholder="Digite o valor"
        keyboardType="numeric"
      />
      <View style={styles.botoesContainer}>
        <Button title="Depositar" onPress={onDepositar} />
        <Button title="Sacar" onPress={onSacar} />
      </View>
    </View>
  );
};

export default function App() {
  const [saldo, setSaldo] = useState(7320.92);
  const [valor, setValor] = useState('');

  const handleDepositar = () => {
    const valorNum = parseFloat(valor);
    if (!isNaN(valorNum) && valorNum > 0) {
      const bonus = valorNum * 0.01;
      setSaldo(saldo + valorNum + bonus);
      setValor('');
    }
  };

  const handleSacar = () => {
    const valorNum = parseFloat(valor);
    if (!isNaN(valorNum) && valorNum > 0 && valorNum <= saldo) {
      const multa = saldo * 0.025;
      setSaldo(saldo - valorNum - multa);
      setValor('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Conta Corrente Santander</Text>
      <Saldo saldo={saldo} />
      <Acoes 
        onDepositar={handleDepositar} 
        onSacar={handleSacar} 
        valor={valor} 
        setValor={setValor} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
  saldoContainer: {
    marginBottom: 20,
  },
  saldoTexto: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  acoesContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#D32F2F',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 20,
    borderRadius: 5,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

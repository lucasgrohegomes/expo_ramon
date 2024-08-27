import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Saldo = ({ saldo }) => {
    return (
        <View>
            <Text>Saldo : R$ {saldo.toFixed(2)}</Text>
        </View>
    );
};

const Acoes = ({ onDepositar, onSacar, valor, setValor }) => {
    return (
        <View>
            <TextInput 
                value={valor} 
                onChangeText={setValor} 
                placeholder='Digite o Valor' 
                keyboardType='numeric'>
            </TextInput>
            <View>
                <Button title='Depositar' onPress={onDepositar}></Button>
                <Button title='Sacar' onPress={onSacar}></Button>
            </View>
        </View>
    );
};

export default function App() {
    const [saldo, setSaldo] = useState(7320.93);
    const [valor, setValor] = useState('');

    const handleDepositar = () => {
        const valorNum = parseFloat(valor)
        if (!isNaN(valorNum) && valorNum > 0) {
            const bonus = valorNum * 0.01;
            setSaldo(saldo + valorNum + bonus);
            setValor('');
          };
    };

    const handleSacar = () => {
        const valorNum = parseFloat(valor);
        if (!isNaN(valorNum) && valorNum > 0 && valorNum <= saldo) {
          const multa = saldo * 0.025;
          setSaldo(saldo - valorNum - multa);
          setValor('');
        };
    };

      return (
        <View style={styles.container}>
          <Text>Conta Corrente Santander</Text>
          <Saldo saldo={saldo}/>
          <Acoes 
            onDepositar={handleDepositar} 
            onSacar={handleSacar} 
            valor={valor} 
            setValor={setValor} 
          />
        </View>
      );
};

const styles = StyleSheet.create ({
container:{
    display: 'flex',
    alignItems: 'center',
}

}
)
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

const Saldo = ({ saldo }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.saldoText}>Saldo: R$ {saldo.toFixed(2)}</Text>
        </View>
    );
};

const Acoes = ({ onDepositar, onSacar, valor, setValor }) => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                value={valor} 
                onChangeText={setValor} 
                placeholder='Digite o Valor' 
                keyboardType='numeric' 
            />
            <View style={styles.buttonsContainer}>
                <Button title='Depositar' onPress={onDepositar} />
                <Button title='Sacar' onPress={onSacar} />
            </View>
        </View>
    );
};

export default function App() {
    const [saldo, setSaldo] = useState(7320.93);
    const [valor, setValor] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [acaoSelecionada, setAcaoSelecionada] = useState(null);

    const handleDepositar = () => {
        setAcaoSelecionada('depositar');
        setModalVisible(true);
    };

    const handleSacar = () => {
        setAcaoSelecionada('sacar');
        setModalVisible(true);
    };

    const confirmarAcao = () => {
        const valorNum = parseFloat(valor);
        if (acaoSelecionada === 'depositar' && !isNaN(valorNum) && valorNum > 0) {
            const bonus = valorNum * 0.01;
            setSaldo(saldo + valorNum + bonus);
        } else if (acaoSelecionada === 'sacar' && !isNaN(valorNum) && valorNum > 0 && valorNum <= saldo) {
            const multa = saldo * 0.025;
            setSaldo(saldo - valorNum - multa);
        }
        setValor('');
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Conta Corrente Santander</Text>
            <Saldo saldo={saldo} />
            <Acoes 
                onDepositar={handleDepositar} 
                onSacar={handleSacar} 
                valor={valor} 
                setValor={setValor} 
            />

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Tem certeza que deseja {acaoSelecionada}?</Text>
                        <View style={styles.buttonsContainer}>
                            <Button title="Confirmar" onPress={confirmarAcao} />
                            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    saldoText: {
        fontSize: 18,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 10,
        width: 200,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
    },
});

// Inicial.jsx
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useLancheContext } from './LancheContext';

const snacks = [
    { id: '1', name: 'Hambúrguer', price: 10 },
    { id: '2', name: 'Pizza', price: 15 },
    { id: '3', name: 'Batata Frita', price: 5 },
];

const Inicial = ({ navigation }) => {
    const { addToCart } = useLancheContext();

    const handleAddToCart = (snack) => {
        addToCart(snack);
    };

    return (
        <View>
            <Text>Selecione seu Lanche</Text>
            <FlatList
                data={snacks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name} - R$ {item.price}</Text>
                        <Button title="Adicionar ao Carrinho" onPress={() => handleAddToCart(item)} />
                    </View>
                )}
            />
            <Button title="Ir para o Carrinho" onPress={() => navigation.navigate('Carrinho')} />
        </View>
    );
};

export default Inicial;

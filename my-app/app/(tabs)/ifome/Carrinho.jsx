// Carrinho.jsx
import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useLancheContext } from './LancheContext';

const Carrinho = () => {
    const { cart, clearCart } = useLancheContext();

    return (
        <View>
            <Text>Carrinho de Compras</Text>
            {cart.length === 0 ? (
                <Text>O carrinho está vazio</Text>
            ) : (
                <FlatList
                    data={cart}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Text>{item.name} - R$ {item.price}</Text>
                    )}
                />
            )}
            <Button title="Limpar Carrinho" onPress={clearCart} />
        </View>
    );
};

export default Carrinho;

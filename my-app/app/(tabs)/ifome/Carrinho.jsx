// Carrinho.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useLanche } from './LancheContext'; // Corrigido para './LancheContext'

const Carrinho = () => {
    const { carrinho } = useLanche();

    return (
        <View>
            <Text>Carrinho de Compras</Text>
            {carrinho.length === 0 ? (
                <Text>Seu carrinho está vazio!</Text>
            ) : (
                <FlatList
                    data={carrinho}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Text>{item.nome} - R$ {item.preco}</Text>
                    )}
                />
            )}
        </View>
    );
};

export default Carrinho;

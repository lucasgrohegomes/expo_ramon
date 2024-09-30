import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import { useLancheContext } from './LancheContext';

const snacks = [
    { id: '1', name: 'Hambúrguer', price: 10, image: 'https://sites.j2midia.com.br/wp-content/uploads/2020/04/5a35e0f35088d3.2888187115134804353299.png' },
    { id: '2', name: 'Pizza', price: 15, image: 'https://superprix.vteximg.com.br/arquivos/ids/206745-600-600/_MG_4828.png?v=637804585779330000' },
    { id: '3', name: 'Batata Frita', price: 5, image: 'https://files.passeidireto.com/fd43e5fc-a712-4551-aea4-282b1ef2cc79/fd43e5fc-a712-4551-aea4-282b1ef2cc79.png' },
];

const Inicial = ({ navigation }) => {
    const { addToCart } = useLancheContext();

    const handleAddToCart = (snack) => {
        addToCart(snack);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione seu Lanche</Text>
            <FlatList
                data={snacks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemText}>
                                {item.name} - R$ {item.price}
                            </Text>
                            <Button
                                title="Adicionar ao Carrinho"
                                onPress={() => handleAddToCart(item)}
                            />
                        </View>
                    </View>
                )}
            />
            <Button
                title="Ir para o Carrinho"
                onPress={() => navigation.navigate('Carrinho')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    itemDetails: {
        flex: 1,
    },
    itemText: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default Inicial;

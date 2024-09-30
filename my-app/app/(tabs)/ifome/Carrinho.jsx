import React from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet, Image, SafeAreaView } from 'react-native';
import { useLancheContext } from './LancheContext';

const Carrinho = () => {
    const { cart, clearCart } = useLancheContext();

    const handlePurchase = () => {
        if (cart.length === 0) {
            Alert.alert("Carrinho vazio", "Adicione itens ao carrinho antes de comprar.");
        } else {
            Alert.alert("Compra realizada!", "Obrigado pela sua compra.");
            clearCart(); // Limpa o carrinho após a compra
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Carrinho de Compras</Text>
            {cart.length === 0 ? (
                <Text style={styles.emptyCart}>O carrinho está vazio</Text>
            ) : (
                <FlatList
                    data={cart}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text style={styles.item}>
                                {item.name} - R$ {item.price}
                            </Text>
                        </View>
                    )}
                    // Define a altura máxima para a lista permitir o scroll
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            )}
            <View style={styles.buttonContainer}>
                <Button title="Limpar Carrinho" onPress={clearCart} />
                <Button title="Comprar" onPress={handlePurchase} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    emptyCart: {
        fontSize: 18,
        color: '#555',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    item: {
        fontSize: 18,
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});

export default Carrinho;

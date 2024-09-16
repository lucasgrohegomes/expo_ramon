import React from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Hub() {

    return (
            <View style={styles.container}>
                <Link href='sobre-mim/viagens/Viagens'>
                    <Text>Viagens</Text>
                </Link>
                <Link href='sobre-mim/filmes/Filmes'>
                    <Text>Filmes</Text>
                </Link>
                <Link href='Tabs'>
                    <Text>App</Text>
                </Link>
            </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
}
})
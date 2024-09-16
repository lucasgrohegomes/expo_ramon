import React from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Tabs() {

    return (
            <View style={styles.container}>
                <Link href='(tabs)/calculadora/Calculadora'>
                    <Text>Calculadora</Text>
                </Link>
                <Link href='(tabs)/conta/Conta'>
                    <Text>Conta</Text>
                </Link>
                <Link href='(tabs)/lista/Lista'>
                    <Text>Lista</Text>
                </Link>
                <Link href='(tabs)/registro/Registro'>
                    <Text>Registro</Text>
                </Link>
                <Link href='(tabs)/splashscreen/Splashscreen'>
                    <Text>Splashscreen</Text>
                </Link>
            </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
});

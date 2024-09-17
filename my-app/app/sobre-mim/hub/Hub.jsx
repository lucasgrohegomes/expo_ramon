import React from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Hub() {

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>
                        Sobre Mim!
                </Text>
            </View>
            <View style={styles.container}>
                <Link href='sobre-mim/viagens/Viagens'>
                    <Text>
                        Viagens
                    </Text>
                </Link>
            </View>
            <View style={styles.container}>
                <Link href='sobre-mim/filmes/Filmes'>
                    <Text>
                        Filmes
                    </Text>
                </Link>
            </View>
            <View style={styles.container}>
                <Link href='Tabs'>
                    <Text>App</Text>
                </Link>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '25px',
        gap: '25px',
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: 'gray',
        padding: '30px',
        
    },
    title: {
        fontWeight: 'bolder',
        fontSize: '40px',
        fontFamily: 'helvetica-neue',
        color: 'white',
    }
})
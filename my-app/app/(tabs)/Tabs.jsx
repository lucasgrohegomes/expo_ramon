import React from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Tabs() {

    return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Atividades Luquisticas
                    </Text>
                </View>
                <View style={styles.container}>
                    <Link href='(tabs)/calculadora/Calculadora'>
                        <Text>
                            Calculadora
                        </Text>
                    </Link>
                </View>
                <View style={styles.container}>
                    <Link href='(tabs)/conta/Conta'>
                        <Text>
                            Conta
                        </Text>
                    </Link>
                </View>
                <View style={styles.container}>
                    <Link href='(tabs)/lista/Lista'>
                        <Text>
                            Lista
                        </Text>
                    </Link>
                </View>
                <View style={styles.container}>
                    <Link href='(tabs)/registro/Registro'>
                        <Text>
                            Registro
                        </Text>
                    </Link>
                </View>
                <View style={styles.container}>
                    <Link href='(tabs)/splashscreen/Splashscreen'>
                        <Text>
                            Splashscreen
                        </Text>
                    </Link>
                </View>
            </View>
    )
};

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
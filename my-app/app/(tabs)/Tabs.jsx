import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Tabs() {
    const router = useRouter(); // Hook para navegação

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Atividades Luquisticas</Text>
            </View>

            <View style={styles.container}>
                <Pressable onPress={() => router.push('(tabs)/calculadora/Calculadora')}>
                    <Text style={styles.linkText}>Calculadora</Text>
                </Pressable>
            </View>

            <View style={styles.container}>
                <Pressable onPress={() => router.push('(tabs)/conta/Conta')}>
                    <Text style={styles.linkText}>Conta</Text>
                </Pressable>
            </View>

            <View style={styles.container}>
                <Pressable onPress={() => router.push('(tabs)/lista/Lista')}>
                    <Text style={styles.linkText}>Lista</Text>
                </Pressable>
            </View>

            <View style={styles.container}>
                <Pressable onPress={() => router.push('(tabs)/registro/Registro')}>
                    <Text style={styles.linkText}>Registro</Text>
                </Pressable>
            </View>

            <View style={styles.container}>
                <Pressable onPress={() => router.push('(tabs)/splashscreen/Splashscreen')}>
                    <Text style={styles.linkText}>Splashscreen</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25, // Corrigido para número
        gap: 25, // Corrigido para número
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: 'gray',
        padding: 30, // Corrigido para número
    },
    title: {
        fontWeight: 'bold', // Corrigido para 'bold'
        fontSize: 40,
        fontFamily: 'helvetica-neue',
        color: 'white',
    },
    linkText: {
        fontSize: 20,
        color: 'blue',
    },
});

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Hub() {
    const router = useRouter();

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Sobre Mim!</Text>
            </View>

            <View style={styles.aboutMeContainer}>
                <Text style={styles.aboutMeTitle}>Lucas:</Text>
                <Text style={styles.aboutMeText}>
                    Sou Lucas, estudante de Desenvolvimento de Sistemas no Ensino Técnico. Faço aprendizagem industrial no SENAI e sou Jovem Aprendiz na FIESC.
                </Text>
            </View>

            <View style={styles.container}>
                <Pressable onPress={() => router.push('/sobre-mim/viagens/Viagens')}>
                    <Text style={styles.linkText}>Viagens</Text>
                </Pressable>
            </View>

            <View style={styles.container}>
                <Pressable onPress={() => router.push('/sobre-mim/filmes/Filmes')}>
                    <Text style={styles.linkText}>Filmes</Text>
                </Pressable>
            </View>

            <View style={styles.container}>
                <Pressable onPress={() => router.push('/Tabs')}>
                    <Text style={styles.linkText}>App</Text>
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
        padding: 25,
        gap: 25,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: 'gray',
        padding: 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        fontFamily: 'helvetica-neue',
        color: 'white',
    },
    aboutMeContainer: {
        padding: 20,
        backgroundColor: '#e6e6e6',
        margin: 20,
        borderRadius: 10,
    },
    aboutMeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    aboutMeText: {
        fontSize: 18,
        lineHeight: 26,
    },
    linkText: {
        fontSize: 20,
        color: 'blue',
    },
});

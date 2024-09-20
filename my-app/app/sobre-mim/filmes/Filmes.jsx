import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

export default function Filmes() {
    const [imageVisibility, setImageVisibility] = useState({
        dora: false,
        terminator: false,
        kungfupanda: false,
    });

    const handlePress = (movie) => {
        setImageVisibility(prevState => ({
            ...prevState,
            [movie]: !prevState[movie],
        }));
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Filmes Luquisticos:
                </Text>
            </View>
            <View style={styles.container}>
                <Pressable
                    onPress={() => handlePress('dora')}
                    style={({ pressed }) => [
                        styles.pressable,
                        pressed && styles.pressablePressed
                    ]}
                >
                    <Text style={styles.pressableText}>Dora e a Cidade Perdida</Text>
                </Pressable>
                {imageVisibility.dora && (
                    <Image
                        source={{ uri: 'https://is2-ssl.mzstatic.com/image/thumb/Video113/v4/fb/00/b0/fb00b008-5481-bc54-8e2a-dbc19d05620f/pr_source.lsr/1200x675.jpg' }}
                        style={styles.image}
                    />
                )}
            </View>
            <View style={styles.container}>
                <Pressable
                    onPress={() => handlePress('terminator')}
                    style={({ pressed }) => [
                        styles.pressable,
                        pressed && styles.pressablePressed
                    ]}
                >
                    <Text style={styles.pressableText}>O Exterminador do Futuro</Text>
                </Pressable>
                {imageVisibility.terminator && (
                    <Image
                        source={{ uri: 'https://media.gazetadopovo.com.br/2015/07/9b942c1c4c7c40620414c0a7bbff572d-gpLarge.jpg' }}
                        style={styles.image}
                    />
                )}
            </View>
            <View style={styles.container}>
                <Pressable
                    onPress={() => handlePress('kungfupanda')}
                    style={({ pressed }) => [
                        styles.pressable,
                        pressed && styles.pressablePressed
                    ]}
                >
                    <Text style={styles.pressableText}>Kung Fu Panda 4</Text>
                </Pressable>
                {imageVisibility.kungfupanda && (
                    <Image
                        source={{ uri: 'https://recreio.com.br/media/uploads/2024/03/kung-fu-panda-4-capa.jpg' }}
                        style={styles.image}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    header: {
        backgroundColor: 'black',
        padding: 30,
    },
    title: {
        fontWeight: 'bolder',
        fontSize: 40,
        fontFamily: 'helvetica-neue',
        color: 'white',
    },
    pressable: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    pressablePressed: {
        backgroundColor: '#0056b3',
    },
    pressableText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 300,
        height: 150,
        marginTop: 10,
    },
});

import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

export default function Viagens() {
    const [imageVisibility, setImageVisibility] = useState({
        uruguaiana: false,
        santana: false,
        rivera: false,
    });

    const handlePress = (city) => {
        setImageVisibility(prevState => ({
            ...prevState,
            [city]: !prevState[city],
        }));
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Viagens Luquisticas:
                </Text>
            </View>
            <View style={styles.container}>
                <Pressable
                    onPress={() => handlePress('uruguaiana')}
                    style={({ pressed }) => [
                        styles.pressable,
                        pressed && styles.pressablePressed
                    ]}
                >
                    <Text style={styles.pressableText}>Uruguaiana</Text>
                </Pressable>
                {imageVisibility.uruguaiana && (
                    <Image
                        source={{ uri: 'https://agorars.com/wp-content/uploads/2022/09/ponte-internacional-uruguaiana.jpg' }}
                        style={styles.image}
                    />
                )}
            </View>
            <View style={styles.container}>
                <Pressable
                    onPress={() => handlePress('santana')}
                    style={({ pressed }) => [
                        styles.pressable,
                        pressed && styles.pressablePressed
                    ]}
                >
                    <Text style={styles.pressableText}>Sant'Ana do Livramento</Text>
                </Pressable>
                {imageVisibility.santana && (
                    <Image
                        source={{ uri: 'https://www.viagensecaminhos.com/wp-content/uploads/2014/03/santana-do-livramento-e-rivera-768x432.jpg' }}
                        style={styles.image}
                    />
                )}
            </View>
            <View style={styles.container}>
                <Pressable
                    onPress={() => handlePress('rivera')}
                    style={({ pressed }) => [
                        styles.pressable,
                        pressed && styles.pressablePressed
                    ]}
                >
                    <Text style={styles.pressableText}>Rivera</Text>
                </Pressable>
                {imageVisibility.rivera && (
                    <Image
                        source={{ uri: 'https://th.bing.com/th/id/OIP.yfLGOeLg5OtKwAMaMBBDXQHaFj?w=678&h=509&rs=1&pid=ImgDetMain' }}
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
        backgroundColor: 'gray',
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

import React from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Viagens() {

    return (
        <View>
            <View style={styles.title_container}>
                <Text>
                    Viagens Luquisticas:
                </Text>
            </View>
            <View style={styles.container}>
                <Text>
                    Uruguaiana
                </Text>
            </View>
            <View style={styles.container}>
                <Text>
                    Sant'Ana do Livramento
                </Text>
            </View>
            <View style={styles.container}>
                <Text>
                    Rivera
                </Text>
            </View>
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
title_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#DDF0FF',
        fontWeight: 'bold'
}
})
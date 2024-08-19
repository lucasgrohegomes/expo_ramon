import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App(){
    const logoL = 'https://images.squarespace-cdn.com/content/v1/6407777cef40625841f50c7d/1686652190081-RVE6YK760NLSRWXHUFSM/700003000000050-LETRA-L-ROSA-CLARO-5CM.jpg';

    return(
        <View style={styles.container}>
            <LinearGradient
            colors={['#ffb8e5', 'transparent']}
            style={styles.background}
            />
                <Image
                style={styles.logo}
                source={{
                uri: logoL
                }}
                /> 
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#050004'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500,
      },
    logo: {
        width: 250,
        height: 250,
        backgroundColor: 'transparent'
    },
});
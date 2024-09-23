// _layout.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LancheProvider } from './tabs/ifome/LancheContext';
import Carrinho from './tabs/ifome/Carrinho';
import Inicial from './tabs/ifome/Inicial';

const Stack = createNativeStackNavigator();

const Layout = () => {
    return (
        <LancheProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Inicial">
                    <Stack.Screen name="Inicial" component={Inicial} />
                    <Stack.Screen name="Carrinho" component={Carrinho} />
                </Stack.Navigator>
            </NavigationContainer>
        </LancheProvider>
    );
};

export default Layout;

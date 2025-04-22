import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TelaInicial" component={TelaInicial} />
            <Stack.Screen name="TelaResultado" component={TelaResultado} />
        </Stack.Navigator>
    );
}

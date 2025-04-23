import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../navigation/HomeScreen';
import AboutScreen from '../navigation/AboutScreen';
import InfoScreen from '../navigation/InfoScreen';
import FormScreen from '../navigation/FormScreen';
import LocationScreen from '../navigation/LocationScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />
            <Stack.Screen name="FormScreen" component={FormScreen} />
            <Stack.Screen name="InfoScreen" component={InfoScreen}/>
            <Stack.Screen name="LocationScreen" component={LocationScreen}/>
        </Stack.Navigator>
    );
}

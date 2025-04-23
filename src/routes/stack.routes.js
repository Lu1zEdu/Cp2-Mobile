import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/AboutScreen";
import Form from "../screens/FormScreen";
import Home from "../screens/HomeScreen";
import Info from "../screens/InfoScreen";
import Location from "../screens/LocationScreen";

const Stack = createNativeStackNavigator()

export default function StackRoutes() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true }}>
                <Stack.Screen name="stackAbout" component={About} />
                <Stack.Screen name="stackForm" component={Form}/>
                <Stack.Screen name="stackHome" component={Home} />
                <Stack.Screen name='stackInfo' component={Info} />
                <Stack.Screen name="stackLocation" component={Location}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
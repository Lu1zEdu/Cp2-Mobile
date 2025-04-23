import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/AboutScreen";
import Form from "../screens/FormScreen";
import Home from "../screens/HomeScreen";
import Info from "../screens/InfoScreen";
import Location from "../screens/LocationScreen";

const Stack = createNativeStackNavigator()

export default function StackRoutes() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="stackLocation" component={Location}/>
            <Stack.Screen name="stackAbout" component={About} />
            <Stack.Screen name="stackForm" component={Form}/>
            <Stack.Screen name="stackHome" component={Home} />
            <Stack.Screen name='stackInfo' component={Info} />
        </Stack.Navigator>
    )
}
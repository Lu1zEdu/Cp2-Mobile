import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "../screens/AboutScreen";
import Form from '../screens/FormScreen';
import Home from "../screens/HomeScreen";
import Info from '../screens/InfoScreen';

const Tab = createBottomTabNavigator()

export default function TabRoutes({ route }) {

    const initialRouteName = route?.params?.initialRouteName || 'tabHome';

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRouteName}>
            <Tab.Screen name='tabHome' component={Home}
                options={{
                    tabBarIcon: () => <Feather name='home' size={20} />,
                    tabBarLabel: "Início", tabBarActiveBackgroundColor: 'green', tabBarActiveTintColor: 'white'
                }}
            />
            <Tab.Screen name='tabAbout' component={About}
                options={{
                    tabBarIcon: () => <Feather name='user' size={20} />,
                    tabBarLabel: "Quem Somos", tabBarActiveBackgroundColor: 'green', tabBarActiveTintColor: 'white'
                }}
            />
            <Tab.Screen name='tabForm' component={Form}
                options={{
                    tabBarIcon: () => <Feather name='edit-2' size={20} />,
                    tabBarLabel: "Adicionar Local", tabBarActiveBackgroundColor: 'green', tabBarActiveTintColor: 'white'
                }}
            />
            <Tab.Screen name='tabInfo' component={Info}
                options={{
                    tabBarIcon: () => <Feather name='globe' size={20} />,
                    tabBarLabel: "Sobre Reciclagem", tabBarActiveBackgroundColor: 'green', tabBarActiveTintColor: 'white'
                }}
            />

            
        </Tab.Navigator>
    )
}
import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackRoutes from './stack.routes';
import TabRoutes from "./tab.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ title: 'Recicla +' }}>
            <Drawer.Screen name='home' component={TabRoutes}
                initialParams={{ initialRouteName: "tabHome" }}
                options={{
                    drawerIcon: () => <Feather name='home' size={20} />,
                    drawerLabel: "Início"
                }}
            />
            <Drawer.Screen name='about' component={TabRoutes} 
            initialParams={{ initialRouteName: "tabAbout" }}
                options={{
                    drawerIcon: () => <Feather name='user' size={20} />,
                    drawerLabel: "Sobre Nós"
                }}
            />
            <Drawer.Screen name='form' component={TabRoutes} 
            initialParams={{ initialRouteName: "tabForm" }}
                options={{
                    drawerIcon: () => <Feather name='edit-2' size={20} />,
                    drawerLabel: "Adicionar um Local"
                }}
            />
            <Drawer.Screen name='info' component={TabRoutes} 
            initialParams={{ initialRouteName: "tabInfo" }}
                options={{
                    drawerIcon: () => <Feather name='globe' size={20} />,
                    drawerLabel: "Sobre Reciclagem"
                }}
            />
            <Drawer.Screen 
                name='location' 
                component={StackRoutes}
                options={{
                    drawerIcon: () => <Feather name='user' size={20} />,
                    drawerLabel: "Location"
                }}
            />
        </Drawer.Navigator>
    );
}

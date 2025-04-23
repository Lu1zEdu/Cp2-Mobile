import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackRoutes from './stack.routes';
import TabRoutes from "./tab.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ title: '' }}>
            <Drawer.Screen 
                name='home' 
                component={TabRoutes}
                initialParams={{ inicialRouteName: "tabHome" }}
                options={{
                    drawerIcon: () => <Feather name='home' size={20} />,
                    drawerLabel: "Início"
                }}
            />
            <Drawer.Screen 
                name='about' 
                component={TabRoutes}
                initialParams={{ inicialRouteName: "tabAbout" }} 
                options={{
                    drawerIcon: () => <Feather name='log-in' size={20} />,
                    drawerLabel: "Sobre Nós"
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

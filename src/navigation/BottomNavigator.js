import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../screens/Home"
import ListItens from "../screens/ListItens"
import Perfil from "../screens/Perfil"
import colors from '../config/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ListStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Barbearias"
                component={ListItens}
                options={{
                    headerTitleAlign: 'center',
                    headerTintColor: colors.primary1,
                    headerStyle: {
                        backgroundColor: colors.primary
                    }
                }}
            />

        </Stack.Navigator>
    );
}

function PerfilStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    headerTitleAlign: 'center',
                    headerTintColor: colors.primary1,
                    headerStyle: {
                        backgroundColor: colors.primary,
                        elevation: 0,
                        shadowOpacity: 0,
                    }
                }}
            />
        </Stack.Navigator>
    );
}

function BottomNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Barbearias') {
                        iconName = 'map-search';
                    } else if (route.name === 'Perfil') {
                        iconName = 'account';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.primary,
                inactiveTintColor: colors.primary2,
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Barbearias" component={ListStack} />
            <Tab.Screen name="Perfil" component={PerfilStack} />
        </Tab.Navigator>
    );
}

export default BottomNavigator;
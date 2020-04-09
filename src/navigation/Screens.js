// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from "./../screens/Home"
import ListItens from "../screens/ListItens"
import Perfil from "./../screens/Perfil"
import MoreInfo from "./../screens/MoreInfo"
import PerfilEdit from "./../screens/PerfilEdit"
import Scan from "./../screens/Scan"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TabTop = createMaterialTopTabNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

function MoreInfoTabTop(props) {
    return (
        <TabTop.Navigator>
            <TabTop.Screen name="Home" component={HomeScreen} />
            <TabTop.Screen name="Settings" component={SettingsScreen} />
        </TabTop.Navigator>
    );
}

function HomeStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="QRCodeScan"
                component={Scan}
                options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#b58110'
                    }
                }}
            />
        </Stack.Navigator>
    );
}

function CardsStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Barbearias"
                component={ListItens}
                options={{
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#b58110'
                    }
                }}
            />
            <Stack.Screen
                name="Barbearia"
                component={MoreInfoTabTop}
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
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#b58110'
                    }
                }}
            />
            <Stack.Screen
                name="PerfilEdit"
                component={PerfilEdit}
            />
        </Stack.Navigator>
    );
}

export default function Screens() {
    return (
        <NavigationContainer>
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
                    activeTintColor: '#b58110',
                    inactiveTintColor: '#000000',
                }}
            >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Barbearias" component={CardsStack} />
                <Tab.Screen name="Perfil" component={PerfilStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

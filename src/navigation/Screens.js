// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from "./../screens/Home"
import ListItens from "../screens/ListItens"
import Perfil from "./../screens/Perfil"
import BarberInfo from "../screens/BarberInfo"
import PerfilEdit from "./../screens/PerfilEdit"
import Scan from "./../screens/Scan"

import colors from '../config/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TabTop = createMaterialTopTabNavigator();
const RootStack = createStackNavigator();

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function BarberInfoStack(props) {
    return (
        <TabTop.Navigator>
            <TabTop.Screen name="Home" component={BarberInfo} />
            <TabTop.Screen name="Settings" component={SettingsScreen} />
        </TabTop.Navigator>
    );
}

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

function TabScreens() {
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

function AppScreens() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal" >
                <RootStack.Screen
                    name="Main"
                    component={TabScreens}
                    options={{
                        headerShown: false,
                    }}
                />
                <RootStack.Screen
                    name="QRCodeScan"
                    component={Scan}
                    options={{
                        headerTitleAlign: 'center',
                        headerTintColor: colors.primary1,
                        headerStyle: {
                            backgroundColor: colors.primary,
                        },
                    }}
                />
                <RootStack.Screen
                    name="Info"
                    component={BarberInfo}
                    options={{
                        headerTitleAlign: 'center',
                        headerTintColor: colors.primary1,
                        headerStyle: {
                            backgroundColor: colors.primary,
                        },
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default AppScreens;
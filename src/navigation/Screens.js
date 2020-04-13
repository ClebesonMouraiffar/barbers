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
import MoreInfo from "./../screens/MoreInfo"
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

function MoreInfoTabTop(props) {
    return (
        <TabTop.Navigator>
            <TabTop.Screen name="Home" component={HomeScreen} />
            <TabTop.Screen name="Settings" component={SettingsScreen} />
        </TabTop.Navigator>
    );
}

function ScanStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="QRCodeScan"
                component={Scan}
                options={{
                    headerTintColor: colors.primary1,
                    headerStyle: {
                        backgroundColor: colors.primary,
                    },
                    headerLeft: () => (
                        <Button
                            onPress={() => navigation.goBack()}
                            icon={{
                                name: 'close',
                                type: 'material',
                                color: colors.primary1,
                              }}
                            type="clear"
                            titleStyle={{ color: colors.primary1 }}
                        />
                      ),
                }}
            />
        </Stack.Navigator>
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
                    headerTintColor: colors.primary1,
                    headerStyle: {
                        backgroundColor: colors.primary,
                        elevation: 0,
                        shadowOpacity: 0,
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
            <RootStack.Navigator mode="modal" headerMode="none">
                <RootStack.Screen name="Main" component={TabScreens} />
                <RootStack.Screen name="QRCodeScan" component={ScanStack} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default AppScreens;
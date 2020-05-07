// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigator from "./BottomNavigator"
import BarberInfo from "../screens/BarberInfo"
import Scan from "../screens/Scan"
import PerfilData from "../screens/PerfilData"
import colors from '../config/colors';

const RootStack = createStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal" >
                <RootStack.Screen
                    name="Main"
                    component={BottomNavigator}
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
                <RootStack.Screen
                    name="PerfilData"
                    component={PerfilData}
                    options={{
                        headerTitle: false,
                        headerTintColor: colors.primary1,
                        headerTransparent: true,
                        headerRight: () => (
                            <Button
                                type="clear"
                                onPress={() => alert('This is a button!')}
                                icon={{
                                    name: 'edit',
                                    type: 'material',
                                    color: colors.primary1,
                                }}
                            />
                        ),
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from "./TabNavigator"
import BarberInfo from "../screens/BarberInfo"
import Scan from "../screens/Scan"
import colors from '../config/colors';

const RootStack = createStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal" >
                <RootStack.Screen
                    name="Main"
                    component={TabNavigator}
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

export default RootNavigator;
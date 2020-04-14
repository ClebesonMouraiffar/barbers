// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import colors from '../config/colors';

const TabTop = createMaterialTopTabNavigator();

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

function TabNavigator(props) {
    return (
        <TabTop.Navigator>
            <TabTop.Screen name="Home" component={HomeScreen} />
            <TabTop.Screen name="Settings" component={SettingsScreen} />
        </TabTop.Navigator>
    );
}

export default TabNavigator;
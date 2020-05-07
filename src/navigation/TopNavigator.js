// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../config/colors';

const TabTop = createMaterialTopTabNavigator();

function SettingsScreen(item) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
function HomeScreen({ route, navigation }) {
    const { name } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Text>Nome: {name}</Text>
        </View>
    );
}

class TopNavigator extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <TabTop.Navigator>
                <TabTop.Screen
                    name="Home"
                    component={HomeScreen}
                    initialParams={{ name: item.name }}
                />
                <TabTop.Screen name="Settings" component={SettingsScreen} />
            </TabTop.Navigator>
        );
    }
}

export default TopNavigator;
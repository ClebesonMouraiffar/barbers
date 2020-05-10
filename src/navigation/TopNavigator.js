// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../config/colors';
import EvaluationsView from '../views/Evaluations.js';
import LocationView from '../views/Location.js';
import OcupationsView from'../views/Ocupations.js';

const TabTop = createMaterialTopTabNavigator();

class TopNavigator extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <TabTop.Navigator
                tabBarOptions={{
                    activeTintColor: colors.primary,
                    inactiveTintColor: colors.grey1,
                    indicatorStyle: {backgroundColor: colors.primary},
                }}
            >
                <TabTop.Screen
                    name="Ocupações"
                    component={OcupationsView}
                    initialParams={{ item: item }}
                />
                <TabTop.Screen
                    name="Localização"
                    component={LocationView}
                    initialParams={{ item: item }}
                />
                <TabTop.Screen
                    name="Avaliações"
                    component={EvaluationsView}
                    initialParams={{ item: item }}
                />
            </TabTop.Navigator>
        );
    }
}

export default TopNavigator;
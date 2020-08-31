// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../config/colors';
import EvPendView from '../views/EvPend.js';
import EvConfView from'../views/EvConf.js';

const TabTop = createMaterialTopTabNavigator();

class TopNavigatorEvaluation extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <TabTop.Navigator
                tabBarOptions={{
                    activeTintColor: colors.primary1,
                    inactiveTintColor: colors.grey1,
                    indicatorStyle: {backgroundColor: colors.primary1},
                    tabStyle: {backgroundColor: colors.primary},
                }}
            >
                <TabTop.Screen
                    name="Pendentes"
                    component={EvPendView}
                    initialParams={{ item: item }}
                />
                <TabTop.Screen
                    name="Confirmadas"
                    component={EvConfView}
                    initialParams={{ item: item }}
                />
                
            </TabTop.Navigator>
        );
    }
}

export default TopNavigatorEvaluation;
/**/
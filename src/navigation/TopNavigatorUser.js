// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../config/colors';
import PerfilView from '../views/Perfil.js';
import ServicesView from '../views/Services.js';
import DocumentsView from'../views/Documents.js';

const TabTop = createMaterialTopTabNavigator();

class TopNavigatorUser extends React.Component {
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
                    name="Sobre"
                    component={PerfilView}
                    initialParams={{ item: item }}
                />
                <TabTop.Screen
                    name="Serviços"
                    component={ServicesView}
                    initialParams={{ item: item }}
                />
                <TabTop.Screen
                    name="Documentos"
                    component={DocumentsView}
                    initialParams={{ item: item }}
                />
                
            </TabTop.Navigator>
        );
    }
}

export default TopNavigatorUser;
/**/
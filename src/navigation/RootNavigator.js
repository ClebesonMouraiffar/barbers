// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigator from "./BottomNavigator"
import BarberInfo from "../screens/BarberInfo"
import Scan from "../screens/Scan"
import PerfilUser from "../screens/PerfilUser"
import colors from '../config/colors'
import RegisterUser from '../screens/RegisterUser'
import RegisterService from '../screens/RegisterService'
import RegisterDocs from '../screens/RegisterDocs'
import EvaluationsManager from '../screens/EvaluationsManager'

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
                        headerTitle: false,
                        headerTransparent: true,
                        headerTintColor: colors.primary1,
                        headerStyle: {
                            backgroundColor: colors.primary,
                        },
                    }}
                />
                <RootStack.Screen
                    name="PerfilUser"
                    component={PerfilUser}
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

                <RootStack.Screen
                    name="RegisterUser"
                    component={RegisterUser}
                    options={{
                        headerTitle:"Dados do Perfil",
                        headerTintColor: colors.primary1,
                        headerStyle: {
                            backgroundColor: colors.primary,
                            elevation: 0,
                            shadowOpacity: 0,
                        },
                        headerRight: () => (
                            <Button
                                type="clear"
                                onPress={() => alert('Dados salvo com Sucesso!')}
                                icon={{
                                    name: 'done',
                                    type: 'material',
                                    color: colors.primary1,
                                }}
                            />
                        ),
                    }}
                />
                <RootStack.Screen
                    name="RegisterService"
                    component={RegisterService}
                    options={{
                        headerTitle: "Cadastro Serviços",
                        headerTintColor: colors.primary1,
                        headerStyle: {
                            backgroundColor: colors.primary,
                            elevation: 0,
                            shadowOpacity: 0,
                        },
                        headerRight: () => (
                            <Button
                                type="clear"
                                onPress={() => alert('Dados salvo com Sucesso!')}
                                icon={{
                                    name: 'done',
                                    type: 'material',
                                    color: colors.primary1,
                                }}
                            />
                        ),
                    }}
                />
                <RootStack.Screen
                    name="RegisterDocs"
                    component={RegisterDocs}
                    options={{
                        headerTitle: "Envio de Documentos",
                        headerTintColor: colors.primary1,
                        headerStyle: {
                            backgroundColor: colors.primary,
                            elevation: 0,
                            shadowOpacity: 0,
                        },
                        headerRight: () => (
                            <Button
                                type="clear"
                                onPress={() => alert('Dados salvo com Sucesso!')}
                                icon={{
                                    name: 'done',
                                    type: 'material',
                                    color: colors.primary1,
                                }}
                            />
                        ),
                    }}
                />
                <RootStack.Screen
                    name="EvaluationsManager"
                    component={EvaluationsManager}
                    options={{
                        headerTitle: "Avaliações",
                        headerTintColor: colors.primary1,
                        headerStyle: {
                            backgroundColor: colors.primary,
                            elevation: 0,
                            shadowOpacity: 0,
                        },
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
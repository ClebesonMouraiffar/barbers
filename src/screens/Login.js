import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    ImageBackground,
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';

import colors from '../config/colors';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const IMAGE_SIZE = SCREEN_WIDTH - 80;
const { height, width } = Dimensions.get('screen')
const Wallpaper = require("../assets/images/wallpaper.jpg");
const LogoWhite = require("../assets/images/logo_white.png")


class Login extends React.Component {

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" backgroundColor="#120f06" />
                <ImageBackground
                    source={Wallpaper}
                    style={{ flex: 1, height: height, width, zIndex: 1 }}
                >
                    <View style={styles.container}>
                        <View style={{ alignItems: 'center', marginBottom: 20 }}>
                            <Input
                                leftIcon={
                                    <Icon
                                        name="email-outline"
                                        type="material-community"
                                        color={colors.primary}
                                        size={25}
                                    />
                                }
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Email"
                                placeholderTextColor={colors.primary}
                                color={colors.primary1}
                            />
                            <Input
                                leftIcon={
                                    <Icon
                                        name="lock"
                                        type="simple-line-icon"
                                        color={colors.primary}
                                        size={25}
                                    />
                                }
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Senha"
                                placeholderTextColor={colors.primary}
                                color={colors.primary1}
                            />
                        </View>
                        <Button
                            containerStyle={{ marginVertical: 20 }}
                            style={styles.button}
                            buttonStyle={styles.buttonStyle}
                            title="ENTRAR NO BARBERS"
                            titleStyle={styles.titleStyle}
                            onPress={() => navigation.navigate('QRCodeScan')}
                            activeOpacity={0.5}
                        />
                        <Button
                            containerStyle={{ marginVertical: 20 }}
                            style={styles.button}
                            buttonStyle={styles.buttonStyle}
                            title="CADASTRAR NO BARBERS"
                            titleStyle={styles.titleStyle}
                            onPress={() => navigation.navigate('Barbearias')}
                            activeOpacity={0.5}
                        />
                    </View>

                </ImageBackground>
            </SafeAreaView>

        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.forImage,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        height: 50,
        width: SCREEN_WIDTH - 70,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    titleStyle: {
        fontFamily: 'regular',
        fontSize: 16,
        color: colors.primary1,
        textAlign: 'center',
        fontWeight: '700',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainerStyle: {
        marginTop: 16,
        height: 65,
        width: SCREEN_WIDTH - 50,

    },
});
/**/
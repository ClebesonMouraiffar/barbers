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
import { Button } from 'react-native-elements';

import colors from '../config/colors';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const IMAGE_SIZE = SCREEN_WIDTH - 80;
const { height, width } = Dimensions.get('screen')
const Wallpaper = require("../assets/images/wallpaper.jpg");
const LogoWhite = require("../assets/images/logo_white.png")
const log = () => console.log('this is an example method');

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
                        <Button
                            containerStyle={{ marginVertical: 20 }}
                            style={styles.button}
                            buttonStyle={styles.buttonStyle}
                            title="    QUERO SER CLIENTE"
                            titleStyle={styles.titleStyle}
                            onPress={() => navigation.navigate('QRCodeScan')}
                            activeOpacity={0.5}
                            icon={{
                                name: 'user-o',
                                type: 'font-awesome',
                                size: 30,
                                color: colors.primary1,
                            }}
                        />
                        <Button
                            containerStyle={{ marginVertical: 20 }}
                            style={styles.button}
                            buttonStyle={styles.buttonStyle}
                            title="    QUERO SER BARBEIRO"
                            titleStyle={styles.titleStyle}
                            onPress={() => navigation.navigate('Barbearias')}
                            activeOpacity={0.5}
                            icon={{
                                name:'cut',
                                type:'font-awesome',
                                size: 30,
                                color: colors.primary1,
                            }}
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
        height: 65,
        width: SCREEN_WIDTH - 40,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    titleStyle: {
        fontFamily: 'regular',
        fontSize: 18,
        color: colors.primary1,
        textAlign: 'center',
        fontWeight: '700',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

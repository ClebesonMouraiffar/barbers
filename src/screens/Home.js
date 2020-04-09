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

const SCREEN_WIDTH = Dimensions.get('screen').width;
const IMAGE_SIZE = SCREEN_WIDTH - 80;
const { height, width } = Dimensions.get('screen')
const Wallpaper = require("../assets/images/wallpaper.jpg");
const LogoWhite = require("../assets/images/logo_white.png")

export default class LoginScreen1 extends Component {
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
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={styles.tinyLogo}
                                source={LogoWhite}
                            />
                            <Button
                                containerStyle={{ marginVertical: 20 }}
                                style={styles.button}
                                buttonStyle={styles.buttonStyle}
                                title="ESTOU NA BARBEARIA"
                                titleStyle={styles.titleStyle}
                                onPress={() => navigation.navigate('QRCodeScan')}
                                activeOpacity={0.5}
                                icon={{
                                    name: 'qrcode-scan',
                                    type: 'material-community',
                                    size: 30,
                                    color: 'white',
                                }}
                                iconContainerStyle={{ marginRight: 10 }}
                            />
                            <Button
                                containerStyle={{ marginVertical: 20 }}
                                style={styles.button}
                                buttonStyle={styles.buttonStyle}
                                title="PROCURO UMA BARBEARIA"
                                titleStyle={styles.titleStyle}
                                onPress={() => navigation.navigate('Barbearias')}
                                activeOpacity={0.5}
                                icon={{
                                    name: 'search',
                                    type: 'font-awesome',
                                    size: 30,
                                    color: 'white',
                                }}
                                iconContainerStyle={{ marginRight: 10 }}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(18, 15, 6,0.85)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        height: 65,
        width: SCREEN_WIDTH - 40,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(181, 129, 16, 1)',
    },
    titleStyle: {
        fontFamily: 'regular',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

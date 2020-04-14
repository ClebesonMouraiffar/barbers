import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ImageBackground,
} from 'react-native';
import colors from '../config/colors';

const { height, width } = Dimensions.get('screen')


export default class BarberInfo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const params = this.props.route.params;

        return (
            <ImageBackground
                source={params.banner_src}
                style={{ flex: 1, height: 160, width, zIndex: 1 }}
            >
                <View style={styles.headerContainer}>
                    <Text style={styles.textservice}>{params.service}</Text>
                    <Text style={styles.textname}>{params.name}</Text>

                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.forImage,
        height: 160,
    },
    textname: {
        color: colors.primary1,
        marginTop: 10,
        fontSize: 24,
    },
    textservice: {
        color: colors.primary1,
        marginTop: 30,
        fontSize: 16,
        backgroundColor: colors.primary,
    },
})
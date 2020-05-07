import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ImageBackground,
    SafeAreaView,
} from 'react-native';
import {
    ListItem,
} from 'react-native-elements';
import colors from '../config/colors';
import TopNavigator from '../navigation/TopNavigator';

const { height, width } = Dimensions.get('screen')


export default class BarberInfo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const params = this.props.route.params;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground
                    source={params.banner_src}
                    style={{ height: 160, width, zIndex: 1, }}
                >
                    <View style={styles.headerContainer}>
                        <Text style={styles.textservice}>{params.service}</Text>
                        <Text style={styles.textname}>{params.name}</Text>

                    </View>
                </ImageBackground>
                <View style={styles.list}>
                    <ListItem
                        title="Tempo Estimado de Espera"
                        titleStyle={{ color: colors.primary, fontWeight: 'bold' }}
                        rightTitle={params.time}
                        rightTitleStyle={{ color: colors.primary, fontWeight: 'bold', fontSize: 20 }}
                        bottomDivider
                    />
                </View>
                <TopNavigator item={params}/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.forBanner,
        height: 160,
    },
    textname: {
        color: colors.primary1,
        marginTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    textservice: {
        color: colors.primary1,
        marginTop: 30,
        fontSize: 16,
        backgroundColor: colors.primary,
    },
})
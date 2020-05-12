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
    Avatar,
} from 'react-native-elements';
import colors from '../config/colors';
import TopNavigator from '../navigation/TopNavigator';
import { Rating } from 'react-native-ratings';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const { height, width } = Dimensions.get('screen')


export default class BarberInfo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const params = this.props.route.params;
        const STAR_OUTLINE = require('../assets/images/star_primary.png');

        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.headerContainer}>
                    <Avatar
                        size="xlarge"
                        rounded
                        source={{ uri: params.avatar_url }}
                    />
                    <Text style={styles.textname}>{params.name}</Text>
                    <View style={styles.ratingsViewRow}>
                        <Rating
                            type="custom"
                            ratingImage={STAR_OUTLINE}
                            showRating={false}
                            fractions={1}
                            startingValue={params.evaluation_note}
                            imageSize={22}
                            readonly
                            ratingColor={colors.primary1}
                            ratingBackgroundColor={colors.primary}
                        />
                        <Text style={styles.textrating}>{params.evaluation_note}</Text>
                        <Text style={styles.textnote}>/5</Text>
                    </View>
                </View>
                <View style={styles.list}>
                    <ListItem
                        title="Tempo Estimado de Espera"
                        titleStyle={{ color: colors.primary, fontWeight: 'bold' }}
                        rightTitle={params.time}
                        rightTitleStyle={{ color: colors.primary, fontWeight: 'bold', fontSize: 20 }}
                        bottomDivider
                    />
                </View>
                <TopNavigator item={params} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        backgroundColor: colors.primary,
    },
    ratingsViewRow: {
        flexDirection: 'row',
    },
    textname: {
        color: colors.primary1,
        fontSize: 24,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    textrating: {
        color: colors.primary2,
        fontSize: 20,
        paddingLeft: 5
    },
    textnote: {
        color: colors.primary2,
        fontSize: 15,
        paddingTop: 4,
    },
})
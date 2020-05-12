import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
    Text,
    Avatar,
    ListItem,
} from 'react-native-elements';
import { Rating } from 'react-native-ratings';

import colors from '../config/colors';

function EvaluationsView({ route, navigation }) {
    const { item } = route.params;
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.list}>
                {item.evaluations.map((evaluation, i) => (
                    <ListItem
                        leftAvatar={{ source: { uri: evaluation.user_avatar } }}
                        title={evaluation.user_name}
                        subtitle={evaluation.comment}
                        rightTitle="Avaliou com:"
                        rightTitleStyle={{ color: colors.primary, fontSize: 14, }}
                        rightSubtitle={
                            <View>
                                <Rating
                                    showRating={false}
                                    fractions={false}
                                    startingValue={evaluation.note}
                                    imageSize= {22}
                                    readonly
                                />
                            </View>
                        }
                        bottomDivider
                    />
                ))}
            </View>

        </ScrollView>
    );
}

export default EvaluationsView;
const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    text: {
        paddingLeft: 15,
        paddingTop: 20,
        paddingRight: 15,
        fontSize: 16,
        color: colors.grey1
    },
    list: {
        borderTopWidth: 1,
        borderColor: colors.greyOutline,
        backgroundColor: '#fff',
    },
    titleViewRow: {
        flexDirection: 'row',
    },
    titleText: {
        color: colors.grey2,
        fontWeight: 'bold',
        fontSize: 16,
    },
    nameText: {
        color: colors.grey2,
        fontSize: 13,
    },
    valueText: {
        color: colors.grey1,
        fontSize: 15,
    },
})
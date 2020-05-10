import * as React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import colors from '../config/colors';

function LocationView({ route }) {
    const { item } = route.params;
    return (
        <View style={styles.view}>
            <ScrollView>
                <Text style={styles.text}>{item.location}</Text>
            </ScrollView>
        </View>
    );
}

export default LocationView;

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
})
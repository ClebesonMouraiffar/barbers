import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
    Text,
    Avatar,
    ListItem,
} from 'react-native-elements';
import colors from '../config/colors';

function OcupationsView({ route }) {
    const { item } = route.params;
    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.list}>
                <ListItem
                    title={
                        <Text style={styles.titleText}>Sobre a(o) {item.name}</Text>
                    }
                    bottomDivider
                />
                <ListItem
                    title={
                        <Text style={styles.nameText}>{item.details}</Text>
                    }
                    bottomDivider
                />
                <ListItem
                    title={
                        <Text style={styles.titleText}>Serviços da(o) {item.name}</Text>
                    }
                    bottomDivider
                />
                <ListItem
                    title={
                        <View>
                            {item.services.map((service, i) => (
                                <View style={styles.titleViewRow}>
                                    <Text style={styles.nameText}>{service.service_name}: </Text>
                                    <Text style={styles.valueText}>R$ {service.service_value}</Text>
                                </View>
                            ))}
                        </View>

                    }
                    bottomDivider
                />
            </View>

        </ScrollView>
    );
}

export default OcupationsView;

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
        color: colors.primary2,
        fontSize: 15,
    },
    valueText: {
        color: colors.grey1,
        fontSize: 15,
    },
})
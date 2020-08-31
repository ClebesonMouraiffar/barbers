import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
    Text,
    Avatar,
    ListItem,
} from 'react-native-elements';
import colors from '../config/colors';

function PerfilView({ route }) {
    const { item } = route.params;
    return (
        <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.list}>
                        <ListItem
                            title={
                                <View style={styles.titleViewRow}>
                                    <Text style={styles.titleText}>Cpf: </Text>
                                    <Text style={styles.infoText}>{item.cpf}</Text>
                                </View>
                            }
                            bottomDivider
                        />
                        <ListItem
                            title={
                                <View style={styles.titleViewRow}>
                                    <Text style={styles.titleText}>Email: </Text>
                                    <Text style={styles.infoText}>{item.email}</Text>
                                </View>
                            }
                            bottomDivider
                        />
                        <ListItem
                            title={
                                <View style={styles.titleViewRow}>
                                    <Text style={styles.titleText}>Celular: </Text>
                                    <Text style={styles.infoText}>{item.fone}</Text>
                                </View>
                            }
                            bottomDivider
                        />
                        <ListItem
                            title={
                                <View style={styles.titleViewRow}>
                                    <Text style={styles.titleText}>Data Nascimento: </Text>
                                    <Text style={styles.infoText}>{item.nascimento}</Text>
                                </View>
                            }
                            bottomDivider
                        />
                        <ListItem
                            title={
                                <View style={styles.titleViewRow}>
                                    <Text style={styles.titleText}>Genêro: </Text>
                                    <Text style={styles.infoText}>{item.genero}</Text>
                                </View>
                            }
                            bottomDivider
                        />
                        <ListItem
                            title={
                                <Text style={styles.titleText}>Endereço: </Text>
                            }
                            subtitle={
                                <View style={styles.titleViewRow}>
                                    <Text style={styles.infoText}>
                                        {item.rua}, {item.numero}, {item.bairro}, {item.cidade}, {item.estado}
                                    </Text>
                                </View>
                            }
                            bottomDivider
                        />
                    </View>
                </ScrollView>
    );
}

export default PerfilView;

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
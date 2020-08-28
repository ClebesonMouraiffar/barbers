import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Button,
    StatusBar,
} from 'react-native';
import {
    Text,
    Avatar,
    ListItem,
} from 'react-native-elements';
import colors from '../config/colors';


class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const params = this.props.route.params;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" backgroundColor="#b58110" />
                <View style={styles.headerContainer}>
                    <Avatar
                        size="xlarge"
                        rounded
                        icon={{ name: 'user', type: 'font-awesome' }}
                    />
                    <Text style={styles.heading}>Texto</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.list}>
                        <ListItem
                            title={
                                <View style={styles.titleViewRow}>
                                    <Text style={styles.titleText}>Cpf: </Text>
                                    <Text style={styles.infoText}>{params.cpf}</Text>
                                </View>
                            }
                            bottomDivider
                        />
                        <ListItem
                            title={
                                <View style={styles.titleViewRow}>
                                    <Text style={styles.titleText}>Email: </Text>
                                    <Text style={styles.infoText}>{params.email}</Text>
                                </View>
                            }
                            bottomDivider
                        />
                        <ListItem
                            title={
                                <View style={styles.titleViewRow}>
                                    <Text style={styles.titleText}>Celular: </Text>
                                    <Text style={styles.infoText}>{params.fone}</Text>
                                </View>
                            }
                            bottomDivider
                        />
                        <ListItem
                            title={
                                <View style={styles.titleViewRow}>
                                    <Text style={styles.titleText}>Data Nascimento: </Text>
                                    <Text style={styles.infoText}>{params.nascimento}</Text>
                                </View>
                            }
                            bottomDivider
                        />
                        <ListItem
                            title={
                                <View style={styles.titleViewRow}>
                                    <Text style={styles.titleText}>Genêro: </Text>
                                    <Text style={styles.infoText}>{params.genero}</Text>
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
                                        {params.rua}, {params.numero}, {params.bairro}, {params.cidade}, {params.estado}
                                    </Text>
                                </View>
                            }
                            bottomDivider
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

export default Register;

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.primary,
    },
    heading: {
        color: 'white',
        marginTop: 20,
        fontSize: 22,
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
        color: colors.primary2,
        fontWeight: 'bold'
    },
    InfoText: {
        color: colors.grey1,
    },
})


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
    Input,
    Icon,
    Accessory
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
                        showEditButton
                        editButton={{ color:colors.primary1, underlayColor: colors.secondary}}
                    >
                    </Avatar>
                    

                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.list}>
                        <View style={{ alignItems: 'center', marginBottom: 20 }}>
                            <Input
                                leftIcon={
                                    <Icon
                                        name="account-outline"
                                        type="material-community"
                                        color={colors.grey1}
                                        size={25}
                                    />
                                }
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Nome Completo *"
                                placeholderTextColor={colors.grey2}
                                color={colors.grey1}
                            />
                            <Input
                                leftIcon={
                                    <Icon
                                        name="calendar-month-outline"
                                        type="material-community"
                                        color={colors.grey1}
                                        size={25}
                                    />
                                }
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Data de Nascimento *"
                                placeholderTextColor={colors.grey2}
                                color={colors.grey1}
                            />
                            <Input
                                leftIcon={
                                    <Icon
                                        name="cellphone-android"
                                        type="material-community"
                                        color={colors.grey1}
                                        size={25}
                                    />
                                }
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Celular *"
                                placeholderTextColor={colors.grey2}
                                color={colors.grey1} type=""
                            />
                            <Input
                                leftIcon={
                                    <Icon
                                        name="email-outline"
                                        type="material-community"
                                        color={colors.grey1}
                                        size={25}
                                    />
                                }
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Email *"
                                placeholderTextColor={colors.grey2}
                                color={colors.grey1}
                            />
                            <Input
                                leftIcon={
                                    <Icon
                                        name="lock"
                                        type="simple-line-icon"
                                        color={colors.grey1}
                                        size={25}
                                    />
                                }
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Senha *"
                                placeholderTextColor={colors.grey2}
                                color={colors.grey1}
                            />
                            <Input
                                leftIcon={
                                    <Icon
                                        name="lock"
                                        type="simple-line-icon"
                                        color={colors.grey1}
                                        size={25}
                                    />
                                }
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Confirmar Senha *"
                                placeholderTextColor={colors.grey2}
                                color={colors.grey1}
                            />
                            <Input
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                label="ENDEREÇO"
                                placeholder="Rua *"
                                placeholderTextColor={colors.grey2}
                                color={colors.grey1}
                            />
                            <Input
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Numero *"
                                placeholderTextColor={colors.grey2}
                                color={colors.grey1}
                            />

                            <Input
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Bairro *"
                                placeholderTextColor={colors.grey2}
                                color={colors.grey1}
                            />

                            <Input
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Cidade *"
                                placeholderTextColor={colors.grey2}
                                color={colors.grey1}
                            />

                            <Input
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Estado *"
                                placeholderTextColor={colors.grey2}
                                color={colors.grey1}
                            />
                        </View>
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
        padding: 5,
        backgroundColor: colors.primary,
    },
    heading: {
        color: 'white',
        marginTop: 10,
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

/*
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
*/
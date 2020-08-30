import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    StatusBar,
} from 'react-native';
import {
    Text,
    Button,
    ListItem,
    Icon
} from 'react-native-elements';
import colors from '../config/colors';

const SCREEN_WIDTH = Dimensions.get('screen').width;


class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const params = this.props.route.params;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" backgroundColor="#b58110" />
                <ScrollView
                    showsVerticalScrollIndicator={true}
                >
                    <View style={styles.list}>
                        <ListItem
                            leftIcon={
                                <Icon
                                    name="account-box-outline"
                                    type="material-community"
                                    color={colors.primary}
                                    size={40}
                                />
                            }
                            title="Foto em tempo real"
                            subtitle='Toque aqui para tirar uma foto em tempo real para verificar seu perfil'
                            subtitleStyle={{ color: colors.primary, fontSize: 12, }}
                            rightIcon={
                                <Icon
                                    name="check-outline"
                                    type="material-community"
                                    color="black"
                                />
                            }
                            bottomDivider
                        />
                        <ListItem
                            leftIcon={
                                <Icon
                                    name="idcard"
                                    type="antdesign"
                                    color={colors.primary}
                                    size={40}
                                />
                            }
                            title="Documento com foto "
                            subtitle='Toque aqui e envie um documento oficial com foto'
                            subtitleStyle={{ color: colors.primary, fontSize: 12, }}
                            rightIcon={
                                <Icon
                                    name="check-outline"
                                    type="material-community"
                                    color="black"
                                />
                            }
                            bottomDivider
                        />
                        <ListItem
                            leftIcon={
                                <Icon
                                    name="card-text-outline"
                                    type="material-community"
                                    color={colors.primary}
                                    size={40}
                                />
                            }
                            title="Verso do documento com foto "
                            subtitle='Toque aqui e envie o verso do documento oficial com foto'
                            subtitleStyle={{ color: colors.primary, fontSize: 12, }}
                            bottomDivider
                        />
                        <ListItem
                            leftIcon={
                                <Icon
                                    name="card-text-outline"
                                    type="material-community"
                                    color={colors.primary}
                                    size={40}
                                />
                            }
                            title="Documento com CPF "
                            subtitle='Toque aqui e envie um documento oficial com seu CPF'
                            subtitleStyle={{ color: colors.primary, fontSize: 12, }}
                            bottomDivider
                        />
                        <ListItem
                            leftIcon={
                                <Icon
                                    name="file-document-outline"
                                    type="material-community"
                                    color={colors.primary}
                                    size={40}
                                />
                            }
                            title="Comprovante de Residencia "
                            subtitle='Toque aqui e envie um comprovante de residencia'
                            subtitleStyle={{ color: colors.primary, fontSize: 12, }}
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
    list: {
        borderTopWidth: 1,
        borderColor: colors.greyOutline,
        backgroundColor: '#fff',
    },

})


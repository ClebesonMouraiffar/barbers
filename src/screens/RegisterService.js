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
    Input,
    Button,
    ListItem,
} from 'react-native-elements';
import colors from '../config/colors';

const SCREEN_WIDTH = Dimensions.get('screen').width;


class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const params = this.props.route.params;
        const { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" backgroundColor="#b58110" />
                <ScrollView
                    showsVerticalScrollIndicator={true}
                >
                    <View style={styles.list}>
                        <View style={{justifyContent: "center", alignItems: 'center', marginBottom: 20 }}>
                            <Input
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Nome *"
                                placeholderTextColor={colors.grey2}
                                color={colors.grey1}
                            />
                            <Input
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Valor *"
                                placeholderTextColor={colors.grey2}
                                color={colors.grey1}
                            />
                            <Input
                                leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                                containerStyle={styles.inputContainerStyle}
                                placeholder="Tempo *"
                                placeholderTextColor={colors.grey2}
                                color={colors.grey1} type=""
                            />
                            <Button
                                containerStyle={{ marginVertical: 20 }}
                                style={styles.button}
                                buttonStyle={styles.buttonStyle}
                                title="PRÓXIMO"
                                titleStyle={styles.titleStyle}
                                onPress={() => navigation.navigate('RegisterDocs')}
                                activeOpacity={0.5}
                                //disabled
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
    list: {
        borderTopWidth: 1,
        borderColor: colors.greyOutline,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainerStyle: {
        marginTop: 16,
        height: 65,
        width: SCREEN_WIDTH - 10,

    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        height: 50,
        width: SCREEN_WIDTH - 30,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
})


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
    Card,
    Tile,
    Icon,
    Avatar,
    ListItem,
} from 'react-native-elements';

import colors from '../config/colors';


class Perfil extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" backgroundColor="#b58110" />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.headerContainer}>
                        <Avatar
                            size="xlarge"
                            rounded
                            icon={{ name: 'user', type: 'font-awesome' }}
                        />
                        <Text style={styles.heading}>Clebeson Moura</Text>
                    </View>
                    <View style={styles.list}>
                        <ListItem
                            title="Meus Dados"
                            chevron
                            bottomDivider
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

export default Perfil;

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
})

/*<Button
                    onPress={() => navigation.navigate('PerfilEdit')}
                    title="Editar"
                />*/
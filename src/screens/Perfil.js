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
import { users } from './../constants';
import { itens } from './../constants'



class Perfil extends React.Component {
    onMoreP = (item) => {
        this.props.navigation.navigate('PerfilUser', item);
    };
    onMoreE = (item) => {
        this.props.navigation.navigate('EvaluationsManager', item);
    };
    render() {
        const { navigation } = this.props;
        const user = users[0];
        const itemp = itens[0];
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" backgroundColor="#b58110" />
                <View style={styles.headerContainer}>
                    <Avatar
                        size="xlarge"
                        rounded
                        icon={{ name: 'user', type: 'font-awesome' }}
                    />
                    <Text style={styles.heading}>{user.name}</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.list}>
                        <ListItem
                            title="Meus Dados"
                            onPress={() => this.onMoreP(user)}
                            chevron
                            bottomDivider
                        />
                        <ListItem
                            title="Avaliações"
                            onPress={() => this.onMoreE(itemp)}
                            chevron
                            bottomDivider
                        />
                        <ListItem
                            title="Sair"
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

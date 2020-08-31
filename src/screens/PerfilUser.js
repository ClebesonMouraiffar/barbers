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
import TopNavigatorUser from '../navigation/TopNavigatorUser';


class PerfilData extends React.Component {
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
                    <Text style={styles.heading}>{params.name}</Text>
                </View>
                <TopNavigatorUser item={params}/>
                
            </SafeAreaView >

        );
    }
}

export default PerfilData;

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        backgroundColor: colors.primary,
    },
    heading: {
        color: 'white',
        marginTop: 0,
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

/*<Button
                    onPress={() => navigation.navigate('PerfilEdit')}
                    title="Editar"
                />*/
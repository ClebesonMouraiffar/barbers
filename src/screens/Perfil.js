import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
} from 'react-native';

class Perfil extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" backgroundColor="#b58110" />
                <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Perfil!</Text>
                </View>
                <Button
                    onPress={() => navigation.navigate('PerfilEdit')}
                    title="Editar"
                />
            </ScrollView>
            </SafeAreaView>
            
        );
    }
}

export default Perfil;
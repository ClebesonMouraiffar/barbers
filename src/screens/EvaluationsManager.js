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
import TopNavigatorEvaluation from '../navigation/TopNavigatorEvaluation';


const SCREEN_WIDTH = Dimensions.get('screen').width;


class EvaluationsManager extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const params = this.props.route.params;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" backgroundColor="#b58110" />
                <TopNavigatorEvaluation item={params}/>
            </SafeAreaView>

        );
    }
}

export default EvaluationsManager;

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


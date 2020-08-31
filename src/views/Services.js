import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
    Text,
    Icon,
    ListItem,
} from 'react-native-elements';
import colors from '../config/colors';

function ServicesView({ route }) {
    const { item } = route.params;
    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.list}>
                <ListItem
                    title='Cabelo'
                    subtitle='R$ 15,00'
                    rightTitle='00:30'
                    rightIcon={
                        <Icon
                            name='timer-sand'
                            type='material-community'
                            color={colors.primary}
                            size={24}
                        />
                    }
                    bottomDivider
                />
                <ListItem
                    title='Barba'
                    subtitle='R$ 15,00'
                    rightTitle='00:20'
                    rightIcon={
                        <Icon
                            name='timer-sand'
                            type='material-community'
                            color={colors.primary}
                            size={24}
                        />
                    }
                    bottomDivider
                />
                <ListItem
                    title='Sombrancelha'
                    subtitle='R$ 10,00'
                    rightTitle='00:10'
                    rightIcon={
                        <Icon
                            name='timer-sand'
                            type='material-community'
                            color={colors.primary}
                            size={24}
                        />
                    }
                    bottomDivider
                />
            </View>

        </ScrollView>
    );
}

export default ServicesView;

const styles = StyleSheet.create({
    list: {
        borderTopWidth: 1,
        borderColor: colors.greyOutline,
        backgroundColor: '#fff',
    },
})
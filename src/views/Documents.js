import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
    Text,
    Icon,
    ListItem,
} from 'react-native-elements';
import colors from '../config/colors';

function DocumentsView({ route }) {
    const { item } = route.params;
    return (
        <ScrollView showsVerticalScrollIndicator={true}>
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
                    title="Documento com CPF "
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
                            name="file-document-outline"
                            type="material-community"
                            color={colors.primary}
                            size={40}
                        />
                    }
                    title="Comprovante de Residencia "
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
            </View>

        </ScrollView>
    );
}

export default DocumentsView;

const styles = StyleSheet.create({
    list: {
        borderTopWidth: 1,
        borderColor: colors.greyOutline,
        backgroundColor: '#fff',
    },
})
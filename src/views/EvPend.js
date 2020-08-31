import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
    Input,
    Button,
    Overlay,
    ListItem,
} from 'react-native-elements';
import { Rating } from 'react-native-ratings';

import colors from '../config/colors';

function EvPendView({ route, navigation }) {
    const { item } = route.params;
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.list}>
                {item.evaluations.map((evaluation, i) => (
                    <ListItem
                        leftAvatar={{ source: { uri: evaluation.user_avatar } }}
                        title={evaluation.user_name}
                        subtitle={evaluation.comment}
                        rightTitle="Avaliou com:"
                        rightTitleStyle={{ color: colors.primary, fontSize: 14, }}
                        rightSubtitle={
                            <View>
                                <Rating
                                    showRating={false}
                                    fractions={false}
                                    startingValue={evaluation.note}
                                    imageSize={22}
                                    readonly
                                />
                            </View>
                        }
                        onPress={toggleOverlay}
                        bottomDivider
                    />
                ))}

                
                <Overlay
                    isVisible={visible}
                    onBackdropPress={toggleOverlay}
                    overlayStyle={styles.overlay}
                >
                    <Button
                        icon={{
                            name: 'done',
                            type: 'material',
                           // size: 30,
                            color: colors.primary1,
                        }}
                        containerStyle={{ marginVertical: 5 }}
                        buttonStyle={styles.buttonStyle}
                        title="APROVAR"
                        onPress={toggleOverlay}
                        activeOpacity={0.5}
                    />
                    <Button
                        icon={{
                            name: 'close',
                            type: 'material',
                            color: colors.primary1,
                        }}
                        containerStyle={{ marginVertical: 5 }}
                        buttonStyle={styles.buttonStyle}
                        title="DENUNCIAR"
                        onPress={toggleOverlay}
                        activeOpacity={0.5}
                    />
                </Overlay>
            </View>
        </ScrollView>
    );
}

export default EvPendView;
const styles = StyleSheet.create({
    overlay: {
        //height: 120
        height: 240
    },
    buttonStyle: {
        borderRadius: 0,
        backgroundColor: colors.primary,
    },
    InfoText: {
        color: colors.primary,
    },
})
/*
<Overlay
                    isVisible={visible}
                    onBackdropPress={toggleOverlay}
                    overlayStyle={styles.overlay}
                >
                    <Input
                        leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                        multiline={true}
                        numberOfLines={5}
                        placeholder="Motivo *"
                        errorMessage="Informe aqui o motivo da sua denúncia."
                        placeholderTextColor={colors.grey2}
                        color={colors.grey1}
                        errorStyle={styles.InfoText}
                    />
                    <Button
                        containerStyle={{ marginVertical: 5 }}
                        buttonStyle={styles.buttonStyle}
                        title="CADASTRAR DENÚNCIA"
                        onPress={toggleOverlay}
                        activeOpacity={0.5}
                    />
                </Overlay>
*/
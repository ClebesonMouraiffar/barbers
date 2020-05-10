import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import {
    Card,
    Tile,
    Icon,
    Avatar,
    Divider,
    ListItem,
} from 'react-native-elements';

import colors from '../config/colors';
import { itens } from './../constants'

class ListItens extends React.Component {
    onLearnMore = (item) => {
        this.props.navigation.navigate('Info', item);
    };
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ flex: 1 }}>

                        {itens.map((item, i) => (
                            <ListItem
                                leftAvatar={{ title: item.name[0], source: { uri: item.avatar_url } }}
                                friction={90}
                                tension={100}
                                activeScale={0.95}
                                key={i}
                                onPress={() => this.onLearnMore(item)}
                                title={item.name}
                                subtitle={
                                    <View>
                                        <View style={styles.subtitleViewRow}>
                                            <Icon
                                                name='cut'
                                                type='font-awesome'
                                                color={colors.grey1}
                                                size={16}
                                            />
                                            {item.services.map((service, i) => (
                                                <Text style={styles.ratingText}>
                                                    {service.service_name},
                                                </Text>
                                            ))}

                                        </View>
                                        <Divider />
                                        <View style={styles.subtitleViewRow}>
                                            <Icon
                                                name='location-on'
                                                type='material'
                                                color={colors.primary}
                                                size={22}
                                            />
                                            <Text style={styles.locationText}>{item.location}</Text>
                                        </View>
                                        <View style={styles.subtitleViewRow}>
                                            <Icon
                                                name='timer-sand'
                                                type='material-community'
                                                color={colors.primary2}
                                                size={24}
                                            />
                                            <Text style={styles.timeText}>{item.time}</Text>
                                        </View>
                                    </View>
                                }
                                containerStyle={{
                                    marginHorizontal: 16,
                                    marginVertical: 8,
                                    borderRadius: 1,
                                }}
                            />
                        ))}

                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    subtitleViewRow: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5,
    },
    ratingText: {
        paddingLeft: 5,
        color: colors.grey1,
    },
    timeText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 4,
        color: colors.grey2,
    },
    locationText: {
        fontSize: 16,
        paddingLeft: 6,
        color: colors.primary2,
    },
})


export default ListItens;
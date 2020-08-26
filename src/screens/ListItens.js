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
import { Rating } from 'react-native-ratings';

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
                            <TouchableOpacity onPress={() => this.onLearnMore(item)}>
                                <Card
                                    containerStyle={{
                                        marginTop: 5,
                                        marginBottom: 5,
                                        paddingLeft: 1,
                                        paddingRight: 1,
                                        paddingTop: 1,
                                        paddingBottom: 5,
                                    }}
                                >
                                    <ListItem
                                        leftAvatar={{ title: item.name[0], source: { uri: item.avatar_url } }}
                                        title={item.name}
                                        subtitle={
                                            <View style={styles.subtitleViewRow}>
                                                <Icon
                                                    name='cut'
                                                    type='font-awesome'
                                                    color={colors.grey1}
                                                    size={16}
                                                />
                                                {item.services.map((service, i) => (
                                                    <Text style={styles.serviceText}>
                                                        {service.service_name},
                                                    </Text>
                                                ))}

                                            </View>
                                        }
                                        rightTitle={
                                            <View style={styles.subtitleViewRow}>
                                                <Rating
                                                    showRating={false}
                                                    fractions={1}
                                                    ratingCount={1}
                                                    startingValue={item.evaluation_note / 5}
                                                    imageSize={22}
                                                    readonly
                                                />
                                                <Text style={styles.ratingText}>{item.evaluation_note}</Text>
                                            </View>
                                        }
                                        rightSubtitle={''}
                                    />
                                    <View style={styles.containerView}>
                                        <Divider />
                                        <View style={styles.subtitleViewRow}>
                                            <Icon
                                                name='location-on'
                                                type='material'
                                                color={colors.primary}
                                                size={24}
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
                                </Card>
                            </TouchableOpacity>
                        ))}

                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    containerView: {
        marginLeft: 70,
        marginRight: 15,
    },
    subtitleViewRow: {
        flexDirection: 'row',
        paddingTop: 5,
    },
    serviceText: {
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
    ratingText: {
        fontSize: 16,
        paddingLeft: 4,
        color: colors.primary,
    },
})


export default ListItens;

/**
 *                                  <View>
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
                                        </View> F

                                    </View>
 */
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

const list2 = [
    {
        name: 'Barbearia Malheiro',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        service: 'Barba, Cabelo, Sombrancelha',
        location: 'R. Adolfo Sinnemann, 249',
        time: '00:30',
    },
    {
        name: 'Navalha Forte',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        service: 'Barba, Cabelo, Sombrancelha',
        location: 'R. Adolfo Sinnemann, 249',
        time: '02:30',
    },
    {
        name: 'Confrearia da Barba',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
        service: 'Barba, Cabelo, Sombrancelha',
        location: 'R. Adolfo Sinnemann, 249',
        time: '01:00',
    },
    {
        name: "Root's Barbearia",
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
        service: 'Barba, Cabelo, Sombrancelha',
        location: 'R. Adolfo Sinnemann, 249',
        time: '01:30',
    },
    {
        name: 'Melissa Jones',
        avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
        service: 'Barba, Cabelo, Sombrancelha',
        location: 'R. Adolfo Sinnemann, 249',
        time: '01:30',
    },
];
const log = () => console.log('this is an example method');

class ListItens extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ flex: 1 }}>

                        {list2.map((l, i) => (
                            <ListItem
                                leftAvatar={{ title: l.name[0], source: { uri: l.avatar_url } }}
                                friction={90}
                                tension={100}
                                activeScale={0.95}
                                key={i}
                                onPress={() => navigation.navigate('Barbearia')}
                                title={l.name}
                                subtitle={
                                    <View>
                                        <View style={styles.subtitleViewRow}>
                                            <Icon
                                                name='cut'
                                                type='font-awesome'
                                                color={colors.grey1}
                                                size={16}
                                            />
                                            <Text style={styles.ratingText}>{l.service}</Text>
                                        </View>
                                        <Divider />
                                        <View style={styles.subtitleViewRow}>
                                            <Icon
                                                name='location-on'
                                                type='material'
                                                color={colors.primary}
                                                size={22}
                                            />
                                            <Text style={styles.locationText}>{l.location}</Text>
                                        </View>
                                        <View style={styles.subtitleViewRow}>
                                            <Icon
                                                name='timer-sand'
                                                type='material-community'
                                                color={colors.primary2}
                                                size={24}
                                            />
                                            <Text style={styles.timeText}>{l.time}</Text>
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
import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Text, ListItem, } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import colors from '../config/colors';


const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;



function LocationView({ route }) {
    const { item } = route.params;
    const [position, setPosition] = useState({
        latitude: -28.303851,
        longitude: -53.491632,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    });

    return (
        <View style={styles.view}>

            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={position}
                    onPress={e =>
                        setPosition({
                            ...position,
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude,
                        })
                    }>
                    <Marker
                        coordinate={position}
                        title={'Marcador'}
                        description={'Testando o marcador no mapa'}
                    />
                </MapView>
            </View>
            <ListItem
                title={
                    <Text style={styles.text}>{item.location}</Text>
                }
                bottomDivider
            />
        </View>
    );
}

export default LocationView;

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    text: {
        paddingRight: 15,
        fontSize: 16,
        color: colors.grey1
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        height: SCREEN_HEIGHT -300,
        width: SCREEN_WIDTH,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})
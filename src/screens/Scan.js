import React, { Component, Fragment } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { CheckBox, Button } from 'react-native-elements'
import {
    TouchableOpacity,
    Text,
    StatusBar,
    SafeAreaView,
    View,
    Dimensions,
} from 'react-native';

import colors from '../config/colors';
import { qrinfo } from './../constants'

class Scan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scan: true,
            ScanResult: false,
            result: null,
            checkboxes: [{
                id: 1,
                title: 'one',
                checked: false,
            }, {
                id: 2,
                title: 'two',
                checked: false,
            }],
        };
    }
    toggleCheckbox(id) {
        const changedCheckBox = this.state.checkboxes.find((cb) => cb.id === id);

        changedCheckBox.checked = !changedCheckBox.checked;

        const checkboxes = Object.assign({}, this.state.checkboxes, changedCheckBox);

        this.setState({ checkboxes });
    }

    onSuccess = (e) => {
        const check = e.data.substring(0, 4);
        console.log('scanned data' + check);
        this.setState({
            result: e,
            scan: false,
            ScanResult: true
        })
        /*  if (check === 'http') {
              Linking
                  .openURL(e.data)
                  .catch(err => console.error('An error occured', err));
  
  
          } else {
              this.setState({
                  result: e,
                  scan: false,
                  ScanResult: true
              })
          }*/

    }

    activeQR = () => {
        this.setState({
            scan: true
        })
    }
    scanAgain = () => {
        this.setState({
            scan: true,
            ScanResult: false
        })
    }
    componentDidMount() {
        const { scan, ScanResult, result } = this.state
        {
            !scan && !ScanResult &
                this.activeQR
        }
    }
    render() {
        const { scan, ScanResult, result } = this.state
        const { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" backgroundColor="#b58110" />
                <View style={styles.scrollViewStyle}>
                    <Fragment>
                        {ScanResult &&
                            <Fragment>
                                <View style={ScanResult ? styles.scanCardView : styles.cardView}>
                                    {qrinfo.map((item, i) => (
                                        <View>
                                            <Text>Bem Vindo a(o) {item.name}</Text>
                                            <Text>Por gentileza escolha os serviços que deseja hoje:</Text>
                                            {item.services.map((service, i) => (
                                                <CheckBox
                                                    title={service.name + ' R$ ' + service.value}
                                                    checked={this.state.checked}
                                                    onPress={() => this.setState({ checked: !this.state.checked })}
                                                />
                                            ))}

                                        </View>
                                    ))}
                                    {this.state.checkboxes.map((cb) => {
                                        return (
                                            <CheckBox
                                                key={cb.id}
                                                title={cb.title}
                                                checked={cb.checked}
                                                onPress={() => this.toggleCheckbox(cb.id)}
                                            />
                                        )
                                    })}
                                </View>
                            </Fragment>
                        }


                        {scan &&
                            <QRCodeScanner
                                reactivate={true}
                                showMarker={true}
                                ref={(node) => { this.scanner = node }}
                                onRead={this.onSuccess}
                            />
                        }
                    </Fragment>
                </View>
            </SafeAreaView>

        );
    }
}
/*
<Text style={styles.textTitle1}>Result !</Text>
                                <View style={ScanResult ? styles.scanCardView : styles.cardView}>
                                    <Text>Type : {result.type}</Text>
                                    <Text>Result : {result.data}</Text>
                                    <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                                    <TouchableOpacity onPress={this.scanAgain} style={styles.buttonTouchable}>
                                        <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
                                    </TouchableOpacity>

                                </View>
                                <TouchableOpacity onPress={this.scanAgain} style={styles.buttonTouchable}>
                                        <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
                                    </TouchableOpacity>

                                    <CheckBox
                                        title='Cabelo'
                                        checked={this.state.checked}
                                        onPress={() => this.setState({ checked: !this.state.checked })}
                                    />
                                    <CheckBox
                                        title='Barba'
                                        checked={this.state.checked}
                                    />
                                    <CheckBox
                                        title='Sombrancelha'
                                        checked={this.state.checked}
                                    />
                                    <View style={styles.buttonsContainer}>
                                        <Button
                                            onPress={() => navigation.navigate('Home')}
                                            title="Confirmar"
                                            titleStyle={{ fontWeight: '700' }}
                                            buttonStyle={{
                                                backgroundColor: 'rgba(127, 220, 103, 1)',
                                                borderColor: 'transparent',
                                                borderWidth: 0,
                                                borderRadius: 0,
                                            }}
                                            containerStyle={{ width: 130 }}
                                        />
                                        <Button
                                            onPress={this.scanAgain}
                                            title="Re-Escanear"
                                            titleStyle={{ fontWeight: '700' }}
                                            buttonStyle={{
                                                backgroundColor: 'rgba(214, 61, 57, 1)',
                                                borderColor: 'transparent',
                                                borderWidth: 0,
                                                borderRadius: 0,
                                            }}
                                            containerStyle={{ width: 150 }}
                                        />
                                    </View>
*/



export default Scan;

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const styles = {
    scrollViewStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#120f06'
    },

    textTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 16,
        color: 'white'
    },
    textTitle1: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 16,
        color: 'black'
    },
    cardView: {
        width: deviceWidth - 32,
        height: deviceHeight / 2,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: 'white'
    },
    scanCardView: {
        width: deviceWidth - 22,
        height: deviceHeight / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: 'white'
    },
    buttonScan: {
        width: 42,

    },
    descText: {
        padding: 16,
        textAlign: 'justify',
        fontSize: 16
    },


    highlight: {
        fontWeight: '700',
    },

    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonTouchable: {
        fontSize: 21,
        backgroundColor: '#120f06',
        marginTop: 32,

        width: deviceWidth - 62,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44
    },
    buttonTextStyle: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
}
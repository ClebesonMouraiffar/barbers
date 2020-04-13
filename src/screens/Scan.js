import React, { Component, Fragment } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { CheckBox, Button } from 'react-native-elements'

import styles from '../assets/styles/scanStyle'
import colors from '../config/colors';
import {
    TouchableOpacity,
    Text,
    StatusBar,
    SafeAreaView,
    View
} from 'react-native';

class Scan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scan: true,
            ScanResult: false,
            result: null,
            checked: false
        };
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
*/



export default Scan;
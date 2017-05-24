import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import OAuthManager from 'react-native-oauth';
import QRCodeScanner from 'react-native-qrcode-scanner';

const manager = new OAuthManager('epel');

export default class ScannerScreen extends Component {
    render() {
        const { creds } = this.props.navigation.state.params;

        return (
          <View style={styles.container}>
              <View style={styles.topPanel}>
                <Text style={styles.name}>{creds.name}</Text>
                <Image source={{uri: creds.pic}} style={styles.img} />
                <Button onPress={this.logOut.bind(this)} title="Log Out" color="#fff" accessibilityLabel="Log Out"/>
              </View>
              <View style={styles.scanner}>
                  <QRCodeScanner onRead={this.onCodeRead.bind(this)} fadeIn={true} reactivate={false} />
              </View>
              <View style={styles.skip}>
                  <Button onPress={this.skip.bind(this)} title="Skip" color="#fff" accessibilityLabel="Skip"/>
              </View>
          </View>
        );
    }

    onCodeRead(e) {
        console.log('QR:::', e.data);
        const { navigate } = this.props.navigation;

        navigate('Requests');
    }

    skip() {
        const { navigate } = this.props.navigation;

        navigate('Requests');
    }

    logOut() {
        const { navigate } = this.props.navigation;

        manager.deauthorize('facebook')
            .then(() => {
                navigate('Login');
            })
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0e3240',
  },
  topPanel: {
    height: 50,
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'space-around',
  },
  name: {
    color: '#fff',
    flex: 1,
  },
  img: {
    width: 50,
    height: 50,
  },
  scanner: {
      flex: 1,
  },
  skip: {
      flex: 1,
  }
});
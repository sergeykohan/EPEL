import React, { Component } from 'react';
import { TouchableHighlight, Image, StyleSheet, View } from 'react-native';

import OAuthManager from 'react-native-oauth';

const manager = new OAuthManager('epel');
manager.configure({
  facebook: {
    client_id: '1946514608894971',
    client_secret: 'ce57b1640f9fd9b60adee46c6839b350'
  }
});

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        return (
          <View style={styles.container}>
                <TouchableHighlight onPress={this.fbLogin.bind(this)}>
                    <Image source={require('./facebook-logo.png')} style={styles.fbLogin} />
                </TouchableHighlight>
          </View>
        );
    }

    fbLogin() {
        const { navigate } = this.props.navigation;

        manager.authorize('facebook')
            .then((resp) => {
                console.log(resp);
                const { authorized } = resp.response;

                if (authorized) {
                    manager.makeRequest('facebook', '/me?fields=id,name,picture&type=square')
                        .then((resp) => {
                            console.log(resp.data);
                            const props = {
                                creds: {
                                    name: resp.data.name,
                                    pic: resp.data.picture.data.url
                                }
                            };
                            navigate('Scanner', props);
                        });
                }
            })
            .catch((err) => {
                console.log('There was an error', err);
            });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e3240',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  fbLogin: {
      width: 150,
      height: 150
  }
});
import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class SplashScreen extends Component {
    componentDidMount() {
      const { navigate } = this.props.navigation;

      setTimeout(() => {
        navigate('Login');
      }, 3000);
    }

    render() {
        return (
          <View style={styles.container}>
              <Text style={styles.welcome}>Welcome ETEL!</Text>
              <Text style={styles.wait}>Please wait</Text>
              <ActivityIndicator
                animating={true}
                style={styles.spinner}
                size="large"
              />
          </View>
        );
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
  wait: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  spinner: {
    height: 80,
  }
});
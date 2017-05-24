/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SplashScreen from './components/splash-screen/splash-screen';
import LoginScreen from './components/login-screen/login-screen';
import ScannerScreen from './components/scanner-screen/scanner-screen';
import RequestsScreen from './components/requests-screen/requests-screen';

const App = StackNavigator({
  Splash: { screen: SplashScreen },
  Login: { screen: LoginScreen },
  Scanner: { screen: ScannerScreen },
  Requests: { screen: RequestsScreen }
}, {
  initialRouteName: 'Splash',
});

/*export default class app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome ETEL!
        </Text>
      </View>
    );
  }
}*/

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

AppRegistry.registerComponent('app', () => App);

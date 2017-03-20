import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import col from './constants/colors'
import Router from './routing/Router';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [require('./assets/images/logo.png')],
        fonts: [
          { 'ssp-mono': require('./assets/fonts/SourceSansPro-Regular.ttf') }
        ],
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: app.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.appIsReady ?
        (
          <NavigationProvider router={Router}>
            <StackNavigation initialRoute="home" />
          </NavigationProvider>
        ) : null
      }
      </View>
    );
  }

  _handlePress = () => {
    console.log ("A press")
    this.props.navigator.push('mapview');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: col.midGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);

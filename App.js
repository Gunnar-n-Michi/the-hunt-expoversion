import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Col from './constants/colors'
import Router from './routing/Router';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

export default class App extends React.Component {

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
      store.dispatch({ type: 'START' })

    }
  }


  componentWillUnmount() {
    console.log ("unmount")
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
        {
          <NavigationProvider router={Router}>
            <StackNavigation initialRoute="sessionView" />
          </NavigationProvider>
        }
        </View>
      </Provider>
    );
  }

  _handlePress = () => {
    this.props.navigator.push('mapView');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Col.midGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import { Components } from 'expo';
import Col from '../constants/colors'

export default class MapView extends React.Component {

  render() {
    return (
      <Components.MapView
      style={styles.container}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      />
    );
  }

  _handlePress = () => {
    this.props.navigator.pop();
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

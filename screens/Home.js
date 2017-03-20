import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import col from '../constants/colors'

export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={{ fontFamily: 'ssp-mono', fontSize: 15}} >
          The Home Screen motherlover
          </Text>
          <Button onPress={this._handlePress} title="Got to Second" />
        </TouchableOpacity>
      </View>
    );
  }

  _handlePress = () => {
    console.log ("A press");
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

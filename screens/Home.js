import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Button, Image } from 'react-native';
import col from '../constants/colors'

export default class Home extends React.Component {
  constructor(props) {
   super(props);
   this.state = { text: 'Name' };
 }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
        <TextInput
          style={{height: 40, width: 90, alignItems: 'center', borderColor: 'gray', borderWidth: 3}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableOpacity>
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

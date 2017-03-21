import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Button, Image } from 'react-native';
import Col from '../constants/colors'
import Auth from '../modules/Auth'
import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import { connect } from 'react-redux';

class SessionView extends React.Component {
  constructor(props) {
   super(props);
   this.state = { text: 'Name' };
   var initFirebase = new Auth
   setTimeout(function () {
     console.log(initFirebase.getUserId());
    //  initFirebase.storeData()
  }, 2000);
 }

  render() {
    const { state, actions } = this.props;
    return (
      state.appIsReady ?
      (
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
      ) : null
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

export default connect(state => ({
    state: state.appStates
  }),
  (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
  })
)(SessionView);

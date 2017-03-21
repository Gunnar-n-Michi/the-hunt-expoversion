import * as firebase from 'firebase';

export default class Auth {
  constructor() {

    this.uid = null

    const firebaseConfig = {
      apiKey: "AIzaSyDGJ2zie6mpdFyTEmwb5v-ibXAzIIJwHfk",
      authDomain: "the-hunt-9775d.firebaseapp.com",
      databaseURL: "https://the-hunt-9775d.firebaseio.com",
      storageBucket: "the-hunt-9775d.appspot.com",
      messagingSenderId: "127434009828"
    };

    firebase.initializeApp(firebaseConfig);

    firebase.auth().signInAnonymously().catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;

    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var isAnonymous = user.isAnonymous;
        this.uid = user.uid;
      } else {
        console.log ("user signed out");
      }
    });
  }

  getUserId = () => {
    return this.uid
  }

  storeData = () => {
    let userId = this.uid
    var newPostKey = firebase.database().ref().child('posts').push().key;
    var updates = {};
    updates['/posts/' + newPostKey] = {"test": "123"};
    updates['/user-posts/' + uid + '/' + newPostKey] = {"test": "123"};
    return firebase.database().ref().update(updates);
  }
}

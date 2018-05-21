/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
require("firebase/firestore");

import React, { Component } from 'react';
import * as Firebase from "firebase";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

const firebaseConfig = {
    apiKey: "AIzaSyDno4-23hwYwUeuDOfYC9r43WvqajL9EUo",
    authDomain: "kandu-204700.firebaseapp.com",
    databaseURL: "https://kandu-204700.firebaseio.com",
    projectId: "kandu-204700",
    storageBucket: "kandu-204700.appspot.com",
    messagingSenderId: "438503554770"
  };
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
Firebase.initializeApp({
	projectId: firebaseConfig.projectId,
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
    databaseURL: firebaseConfig.databaseURL,
    storageBucket: firebaseConfig.storageBucket
});
let db = Firebase.firestore();
db.settings({timestampsInSnapshots:true});
let users = db.collection('users');
type Props = {};
export default class App extends Component<Props> {
	constructor() {
		super();
	}
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={users}
					renderItem={({user}) => <Text>{user.firstName}</Text>}
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
	    backgroundColor: '#F5FCFF',
	},
	  instructions: {
	    textAlign: 'center',
	    color: '#333333',
	    marginBottom: 5,
	}
});

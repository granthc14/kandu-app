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
Firebase.initializeApp(firebaseConfig);

let db = Firebase.firestore();
db.settings({timestampsInSnapshots:true});

type Props = {};
export default class App extends Component<Props> {
	state = {
		users: []	
	};
	constructor() {
		super();
		this.getUsers();
	}
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.users}
					renderItem={({user}) => <Text>{user.firstName}</Text>}
				/>
			</View>
		);
	}
	getUsers() {
		let self = this;
		db.collection('users').get().then((users) => {
			self.state.users = users;
		});
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

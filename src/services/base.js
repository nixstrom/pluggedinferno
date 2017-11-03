// import Rebase from 're-base';
//
// const Base = Rebase.createClass({
// 	apiKey: "AIzaSyD34Ku_PFWIaXOqOXDYc_exEBIeolqf8W0",
// 	authDomain: "pluggedinferno.firebaseapp.com",
// 	databaseURL: "https://pluggedinferno.firebaseio.com",
// });
//
// export default Base;

// import C from "./constants";
import * as firebase from "firebase";

firebase.initializeApp({
	apiKey: "AIzaSyD34Ku_PFWIaXOqOXDYc_exEBIeolqf8W0",
	authDomain: "pluggedinferno.firebaseapp.com",
	databaseURL: "https://pluggedinferno.firebaseio.com",
});

export const auth = firebase.auth();
export const database = firebase.database();

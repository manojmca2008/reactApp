import React, { Component } from 'react';
import {firebaseAuth} from '../config/constants';
import firebase from 'firebase'

//class AuthServices extends Component {
  export function  signup(email ,password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  export function login(email , password) {
   return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
  }
   export function loginWithFacebook() {
    let self = this;
    let facebookProvider = new firebase.auth.FacebookAuthProvider();
    // facebookProvider.setCustomParameters({
    //   'display': 'popup'
    // });
  return  firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      //let token = result.credential.accessToken;
      // The signed-in user info.
      return result.user.providerData[0];
      //let userData = result.user.providerData[0];
      //localStorage.setItem('auth', 'true');
      //localStorage.setItem('userdata', JSON.stringify(userData));
      //localStorage.setItem('isLogin', true);
     // console.log(result);
      // ...
    }).catch(function (error) {
      console.log(error);
      // Handle Errors here.
      //var errorCode = error.code;
      //var errorMessage = error.message;
      // The email of the user's account used.
      //var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      //var credential = error.credential;
      // ...
    });
  }
  export function loginWithGoogle() {
    let googleProvider = new firebase.auth.GoogleAuthProvider();
    return new firebase.auth().signInWithPopup(googleProvider).then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // let token = result.credential.accessToken;
      // The signed-in user info.
      //let user = result.user;
      return result.user.providerData[0];
      // ...
    }).catch(function (error) {
      console.log(error);
    });
  }
  export function loginWithTwitter() {
    let twitterProvider = new firebase.auth.TwitterAuthProvider();
   return new firebase.auth().signInWithPopup(twitterProvider).then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // let token = result.credential.accessToken;
      // The signed-in user info.
      //let user = result.user;
      return result.user.providerData[0];
      // ...
    }).catch(function (error) {
      console.log(error);
    });
  }

 export function logout() {
    firebase.auth().signOut();
    localStorage.setItem('isLogin', false);
  }
 export function forgotPassword(email){
    return firebaseAuth.auth().sendPasswordResetEmail(email).then(function (result){
      console.log(result);
    }).catch((error) => console.log(error))
  }
  export function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}
//} 
//export default AuthServices;
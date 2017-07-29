import React, { Component } from 'react';
import { fb as firebase, provider } from './Firebase';

class SignIn extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)
        
    }
handleClick() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(result.user)
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}
    render() {
        return (
        <div>
            <p>Wow this is sent to index.js and is displayed on index.html!</p>
            <button onClick={this.handleClick}>Sign In</button>
        </div>
        )
    }
}

export default SignIn;
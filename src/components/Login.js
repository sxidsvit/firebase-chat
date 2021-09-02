import React from 'react'
import { GoogleOutlined, GithubOutlined } from '@ant-design/icons'
import firebase from 'firebase/app'

const Login = () => {

  const handleGitHubLogin = () => {

    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider)

    firebase.auth()
      .getRedirectResult()
      .then((result) => {
        if (result.credential) {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          var token = credential.accessToken;
          // ...
        }

        // The signed-in user info.
        var user = result.user;
      }).catch((error) => {
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

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider)
  }

  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2> Welcome to Firebase Chat !!!</h2>
        <div
          className='login-button google'
          onClick={() => handleGoogleLogin()}
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <br /> <br />
        <div
          className='login-button github'
          onClick={() => handleGitHubLogin()}
        >
          <GithubOutlined /> Sign In with GitHub
        </div>
      </div>
    </div >
  )
}

export default Login
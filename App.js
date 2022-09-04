/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { firebase } from '@react-native-firebase/auth';

const App = () => {

  GoogleSignin.configure(
    {
      webClientId: '841884214826-9uqet1ulnn8nio3nqhf86ii31r0j7asf.apps.googleusercontent.com',
    }
  );

  const signInWithGoogleAsync = async () => {
    
      // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  const user_sign_in = auth().signInWithCredential(googleCredential);

  user_sign_in.then((user)=>{

    console.log(user);
  }
  )

  .catch((error)=>{
    console.log(error);
  }
  )

  }


  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <Button
      title='Sign in with Gooogle'
      onPress={signInWithGoogleAsync}
      />
    </View>
  );
};

export default App;

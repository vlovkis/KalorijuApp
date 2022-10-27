import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import SignInScreen from '../src/screens/SignInScreen';
import CustomInput from '../src/components/CustomInput';
import SignUpScreen from '../src/screens/SignUpScreen';
import ConfirmEmailScreen from '../src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../src/screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../src/screens/ResetPasswordScreen';
import Navigation from '../src/Navigation';
import 'react-native-gesture-handler';
import Amplify from 'aws-amplify';

import awsconfig from '../src/aws-exports';
import React from 'react';


Amplify.configure(awsconfig);
const App = () => {
  //Auth.signOut();
  return (
    //<View style={styles.container}>
    <React.Fragment>
      <Navigation style={styles.container}/>
      </React.Fragment>
    //</View>
    //<StatusBar style="auto" />
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
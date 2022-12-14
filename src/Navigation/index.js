import React, {useEffect, useState} from "react";
import {View, Text, ActivityIndicator} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import AdditionalInfoScreen from "../screens/AdditionalInfoScreen";
import HomeScreen from "../screens/HomeScreen";
import PrivacyScreen from "../screens/PrivacyScreen";
import TermsScreen from "../screens/TermsScreen";
import 'react-native-gesture-handler';
import {Auth, Hub} from 'aws-amplify';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    const [user, setUser] = useState(undefined);
  
    const checkUser = async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
        setUser(authUser);
      } catch (e) {
        setUser(null);
      }
    };
  
    useEffect(() => {
      checkUser();
    }, []);
  
    useEffect(() => {
      const listener = data => {
        if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
          checkUser();
        }
      };
  
      Hub.listen('auth', listener);
      return () => Hub.remove('auth', listener);
    }, []);
    if (user === undefined) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      );
    }
  
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {user ? (
                  <Stack.Group>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                  </Stack.Group>
                ) : ( 
                <Stack.Group>
                 <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="AdditionalInfo" component={AdditionalInfoScreen} />
                <Stack.Screen name="Privacy" component={PrivacyScreen}/>
                <Stack.Screen name="Terms" component={TermsScreen}/>
                <Stack.Screen name="ForgotPass" component={ForgotPasswordScreen} />
                <Stack.Screen name="ResetPass" component={ResetPasswordScreen} />
              </Stack.Group>
             
                )}
            </Stack.Navigator>
        </NavigationContainer>
    

    
    );
}



export default Navigation
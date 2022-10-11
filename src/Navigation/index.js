import React from "react";
import {View, Text} from 'react-native';
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

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPass" component={ForgotPasswordScreen} />
                <Stack.Screen name="ResetPass" component={ResetPasswordScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AdditionalInfo" component={AdditionalInfoScreen} />
                <Stack.Screen name="Privacy" component={PrivacyScreen}/>
                <Stack.Screen name="Terms" component={TermsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default Navigation
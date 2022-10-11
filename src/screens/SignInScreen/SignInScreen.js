import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions, TextInput, minLength} from 'react-native';
import Logo from '../../../assets/images/Calorise.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
const SignInScreen = () => {
 

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control, handleSubmit,formState: {errors}} = useForm();
    
    const onSignInPress = (data) => {
        //console.log(data);
        navigation.navigate('Home');
    }

    const onForgotPasswordPress = () => {
        navigation.navigate("ForgotPass");
    }

    const onSignUpPress = () => {
        navigation.navigate("SignUp")
    }

    return (
        <View style={styles.root}>
            <Image source={Logo}
            style={[styles.logo, {height: height * 0.3}]}
             resizeMode ="contain" 
             />
        <Text style={styles.Text}>Login</Text>
        <Text style={styles.SmallText}>please sign in to continue</Text>

        <CustomInput
        type="text"
            name="username"
            placeholder={"Username"}
            control={control}
            rules={{required: 'Username is required'}}
            />
        <CustomInput
        type="text"
            name="password"
            placeholder={"Password"}
            control={control}
            secureTextEntry
            rules={{required: 'Password is required', 
            minLength: {
                value: 3,
                message: 'Password should be more than 3 characters long'
            }
        }}
            />
             
            
        <CustomButton
            text="Log in ->"
            onPress={onSignInPress} />

        <CustomButton 
            text="Forgot Password"
            onPress={onForgotPasswordPress}
            type="TERTIARY" />

             <Text style={styles.SignUpText}>
                Don't have an account?
        <CustomButton
            text="Sign Up" 
            onPress={onSignUpPress} 
            type="SIGNUP" /> 
        </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },
    logo: {
        width: 500,
        maxWidth: 500,
        height:100,
        maxHeight: 200,
        marginTop: -50,
        marginBottom: 10,
    
    },
    Text:{
        fontSize: 50,
        fontWeight: "bold",
        paddingRight: 150,
        marginBottom: 5,
        paddingLeft: 20,
    },
    SmallText:{
        color: '#818181',
        paddingRight: 109,
        marginBottom: 80,
        paddingLeft: 20,
    },
    SignUpText:{
        display: 'flex',
        alignSelf: 'center',
        paddingLeft: 50,


    }
});
export default SignInScreen
import React, {useState} from "react";
import {View, Text, StyleSheet, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import {Auth} from 'aws-amplify';
const ForgotPassword = () => {
    const {control, handleSubmit} = useForm();
    const navigation = useNavigation();

    const onConfirmPress = async data => {
        try{
            await Auth.forgotPassword(data.username);
            navigation.navigate("ResetPass");
        } catch (e) {
            Alert.alert('Oops', e.message);
        }
    };
    const onSignInPress = () => {
        navigation.navigate("SignIn");
    }
    const onResend = () => {
        console.warn("Resend")
    }
    return (
        <View style={styles.root}>
        
             <Text style={styles.title}>Forgot your password</Text>

             <CustomInput
             
             name="username"
             control={control}
             placeholder={"Username"}
             rules={{
                required: 'Username is required'
             }}
             />
             <CustomButton
             text="RESET ->"
             onPress={handleSubmit(onConfirmPress)}
             />
            <Text style={styles.SignInText}> Back to</Text>
            <Text style={styles.SignInButton} onPress={onSignInPress}>Sign In</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        top: 80,
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
        paddingRight: 25,
        marginTop: 20,
        marginBottom: -30,
        paddingLeft: 25,
    },
    title:{
        fontSize: 50,
        fontWeight: "bold",
        paddingRight: 100,
        marginBottom: 30,
        paddingLeft: 20,
    },
    link:{
        color:"#FCA13A",
    },
    SignInButton:{
        paddingTop:15,
        color: "#FCA13A",
    },
    SignInText:{
        marginTop: 80,
        display: 'flex',
        alignSelf: 'center',
        color: '#818181',
    },
    
});
export default ForgotPassword
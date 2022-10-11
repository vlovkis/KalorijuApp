import React, {useState} from "react";
import {View, Text, StyleSheet,} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
const ForgotPassword = () => {
    const {control, handleSubmit} = useForm();
    const navigation = useNavigation();

    const onConfirmPress = (data) => {
        console.warn(data);
        navigation.navigate("ResetPass");

    }
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
            <Text style={styles.SignInText}> Back to <CustomButton text="Sign In" onPress={onSignInPress} type="SIGNUP" /></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
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
    SignInText:{
        marginTop: -10,
        display: 'flex',
        alignSelf: 'center',
        paddingLeft: 50,
    },
    
});
export default ForgotPassword
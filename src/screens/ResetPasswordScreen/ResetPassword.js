import React, {useState} from "react";
import {View, Text, StyleSheet, Alert,} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import {Auth} from 'aws-amplify';


const ResetPassword = () => {
    const {control, handleSubmit} = useForm();
   
    const navigation = useNavigation();

    const onConfirmPress = async data => {
        try{
            await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
            navigation.navigate('SignIn');
        } catch (e) {
            Alert.alert('Oops', e.message);
        }
    };
    
    const onSignInPress = () => {
        navigation.navigate("SignIn");
    };
    return (
        <View style={styles.root}>
        
             <Text style={styles.title}>Reset your password</Text>
             
             <CustomInput
                name="username"
                placeholder="Username"
                control={control}
                rules={{required: 'Username is required'}}
                />

             <CustomInput
             name="code"
             control={control}
             placeholder={"Code"}
             rules={{
                required: 'Code is required'
             }}
             
             />
               <CustomInput
               name="password"
               control={control}
                placeholder={"Enter your new password"}
                secureTextEntry
                rules={{required: 'Password is required',
                minLength: {
                 value: 7,
                 message: 'Password should be at least 7 characters long',
             },
             }}
             
             />
             <CustomButton
             text="Submit ->"
             onPress={handleSubmit(onConfirmPress)}
             />
            <Text style={styles.SignInText}> Back to <CustomButton text="Sign In" onPress={handleSubmit(onSignInPress)} type="SIGNUP" /></Text>
             

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
export default ResetPassword;
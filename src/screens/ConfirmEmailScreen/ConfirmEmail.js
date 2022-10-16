import React, {useState} from "react";
import {View, Text, StyleSheet, Alert,} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from "@react-navigation/native";
import {useForm} from 'react-hook-form';
import { useRoute } from "@react-navigation/native";
import {Auth} from 'aws-amplify';
const ConfirmEmail = () => {
    const route = useRoute();
    const {control, handleSubmit, watch} = useForm({
        defaultValues: {username: route?.params?.username}
    });
    const username = watch('username');

    const navigation = useNavigation();

    const onConfirmNext = async data => {
        try{
        const response = await Auth.confirmSignUp(data.username, data.code);
        navigation.navigate('AdditionalInfo');
        } catch (e){
            Alert.alert("Oops", e.message);
        }
        
    };
    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }
    const onResend = async () => {
        try {
            await Auth.resendSignUp(username);
            Alert.alert('Success', 'Code was resent to your email');
        } catch (e) {
            Alert.alert('Oops', e.message);
        }
    };
    return (
        <View style={styles.root}>
        
             <Text style={styles.title}>Confirm Email</Text>
             <CustomInput
             placeholder={"Username"}
             name="username"
             control={control}
             rules={{
                required: 'Username is required'
             }}
             />
             <CustomInput
             placeholder={"Enter your confirmation code"}
             name="code"
             control={control}
             rules={{
                required: 'Confirmation code is required'
             }}
             />
             <CustomButton
             text="NEXT"
             onPress={handleSubmit(onConfirmNext)}
             />
            <CustomButton  text="Resend code" onPress={onResend} type="SECONDARY" />
            <Text style={styles.SignInText}> Already have an account?<CustomButton text="Sign In" onPress={onSignInPress} type="SIGNUP" /></Text>
             

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
export default ConfirmEmail
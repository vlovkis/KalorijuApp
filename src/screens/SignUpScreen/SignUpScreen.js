import React, {useState} from "react";
import {View, Text, StyleSheet, minLength, maxLength} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
    const navigation = useNavigation();
    const onNextPress = () => {
        console.warn("Next")
        navigation.navigate("ConfirmEmail");
    }
    const onTermsOfUsePressed = () => {
        navigation.navigate("Terms")
    }
    const onPrivacyPolicyPressed = () => {
        navigation.navigate("Privacy")
    }
    const onSignIn = () => {
        console.warn("Sign In")
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.root}>
        
             <Text style={styles.title}>Create an account</Text>

             <CustomInput
             name="username"
             control={control}
             placeholder={"Username"}
             rules={{required: 'Username is required',
            minLength: {
                value: 3,
                message: 'Username should be at least 3 characters long',
            },
            maxLength: {
                value: 24,
                message: 'Username should be max 24 characters long',
            },
            }}
             />
             <CustomInput
             name="email"
            placeholder={"Email"}
           control={control}
           rules={{
            required: 'Email is required',
            patern: {value: EMAIL_REGEX, message: 'Email is invalid'},
        }}
            />
             <CustomInput
             name="password"
             placeholder={"Password"}
             control={control}
             secureTextEntry
             rules={{required: 'Password is required',
             minLength: {
                 value: 7,
                 message: 'Password should be at least 7 characters long',
             },
             }}
             />
             <CustomInput
             name="confirm-password"
             placeholder={"Confirm Password"}
             control={control}
             secureTextEntry
             rules={{
                validate: value => value === pwd || 'Password does not match',
             }}
             />
             <Text style={styles.SmallText}>By registering, you confirm that you accept our 
             <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of use</Text> 
             <Text style={styles.SmallText}> and </Text>
             <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy policy</Text>
             </Text>
             <CustomButton
             text="NEXT ->"
             onPress={handleSubmit(onNextPress)}
             />
              <Text style={styles.SignInText}> Already have an account?</Text>
              <Text style={styles.SignInButton} onPress={onSignIn}>Sign In</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        top: 80,
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
        paddingRight: 25,
        marginTop: 20,
        marginBottom: -30,
        paddingLeft: 25,
    },
    SignInButton:{
        paddingTop:15,
        color: "#FCA13A",
    },
    title:{
        fontSize: 50,
        fontWeight: "bold",
        paddingRight: 100,
        marginBottom: 10,
        paddingLeft: 20,
    },
    link:{
        color:"#FCA13A",
    },
    SignInText:{
        marginTop: 80,
        display: 'flex',
        alignSelf: 'center',
        color: '#818181',
        
    }
});
export default SignUpScreen
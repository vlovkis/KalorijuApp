import React, {useState} from "react";
import {View, Text, StyleSheet, minLength, maxLength, Alert, ScrollView, SafeAreaView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import {Auth} from 'aws-amplify';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
    const navigation = useNavigation();
    
    const onNextPress = async(data) =>{
        const {username, password, email, age, weight, fullname, height, weightGoal, name }  = data;
            try {
                const response = await Auth.signUp({
                    username,
                    password,
                    attributes: {email, 'custom:fullname': fullname, preferred_username: username, 'custom:Age': age, 'custom:Weight': weight, 'custom:Height': height, 'custom:WeightGoal': weightGoal, name},
                });
                navigation.navigate("ConfirmEmail", {username});
            } catch (e){
                Alert.alert('Oops', e.message);
            }    
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
        <SafeAreaView style={styles.root}>
        <ScrollView style={styles.scrollView}>
        
             <Text style={styles.title}>Create an account</Text>
             <SafeAreaView style={styles2.root}>
             <CustomInput
              style={styles.custom}
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
              style={styles.custom}
             name="fullname"
             control={control}
             placeholder={"Full name"}
             rules={{required: 'Full Name is required'}}
             />
            <CustomInput
             style={styles.custom}
             name="age"
             type="number"
             control={control}
             placeholder={"Age"}
             rules={{required: 'Age is required'}}
             />
            <CustomInput
             style={styles.custom}
             name="weight"
             keyboardType="numeric"
             control={control}
             placeholder={"Weight"}
             rules={{required: 'Weight is required'}}
             />
            <CustomInput
             style={styles.custom}
             name="height"
             keyboardType="numeric"
             control={control}
             placeholder={"Height"}
             rules={{required: 'Height is required'}}
             />
                         <CustomInput
             style={styles.custom}
             name="weightGoal"
             keyboardType="numeric"
             control={control}
             placeholder={"Weight Goal"}
             rules={{required: 'Weight goal is required'}}
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
              style={styles.custom}
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
            style={styles.custom}
             name="confirm-password"
             placeholder={"Confirm Password"}
             control={control}
             secureTextEntry
             rules={{
                validate: value => value === pwd || 'Password does not match',
             }}
             />
             </SafeAreaView>
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

              </ScrollView>
        </SafeAreaView>
    );
};
const styles2 = StyleSheet.create({
    root: {
        left: 30,
    }
});
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        top: 50,
        left: 1,
    },
    scrollView: {
        
        paddingVertical: 20,
        top: 5,
        left: 10,
        
       
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
        paddingLeft: 15,
    },
    SignInButton:{
        paddingTop:10,
        color: "#FCA13A",
    },
    title:{
        fontSize: 50,
        fontWeight: "bold",
        paddingRight: 100,
        marginBottom: 10,
        paddingLeft: 10,
        
    },
    link:{
        color:"#FCA13A",
    },
    SignInText:{
        marginTop: 80,
        display: 'flex',
        alignSelf: 'center',
        color: '#818181',
        top: 50,

    },
});
export default SignUpScreen
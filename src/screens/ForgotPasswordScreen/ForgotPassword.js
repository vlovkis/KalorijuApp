import React, {useState} from "react";
import {View, Text, StyleSheet,} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from "@react-navigation/native";
const ForgotPassword = () => {
    const [Username, setUsername] = useState('');
    const navigation = useNavigation();

    const onConfirmPress = () => {
        //check if user exists
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
             placeholder={"Username"}
             value={Username}
             setValue={setUsername}
             />
             <CustomButton
             text="RESET ->"
             onPress={onConfirmPress}
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
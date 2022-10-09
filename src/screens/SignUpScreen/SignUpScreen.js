import React, {useState} from "react";
import {View, Text, StyleSheet,} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from "@react-navigation/native";
const SignUpScreen = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [Email, setEmail] = useState('');

    const navigation = useNavigation();
    const onNextPress = () => {
        console.warn("Next")
        navigation.navigate("ConfirmEmail");
    }
    const onTermsOfUsePressed = () => {
        console.warn("Terms of use")
    }
    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy Policy")
    }
    const onSignIn = () => {
        console.warn("Sign In")
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.root}>
        
             <Text style={styles.title}>Create an account</Text>

             <CustomInput 
             placeholder={"Username"}
             value={Username}
             setValue={setUsername}
             />
             <CustomInput
            placeholder={"Email"}
            value={Email}
            setValue={setEmail}
            />
             <CustomInput
             placeholder={"Password"}
             value={Password}
             setValue={setPassword}
             secureTextEntry={true}
             />
             <CustomInput
             placeholder={"Confirm Password"}
             value={ConfirmPassword}
             setValue={setConfirmPassword}
             secureTextEntry={true}
             />
             <Text style={styles.SmallText}>By registering, you confirm that you accept our 
             <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of use</Text> 
             <Text style={styles.SmallText}> and </Text>
             <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy policy</Text>
             </Text>
             <CustomButton
             text="NEXT ->"
             onPress={onNextPress}
             />
              <Text style={styles.SignInText}> Already have an account?<CustomButton text="Sign In" onPress={onSignIn} type="SIGNUP" /></Text>
             

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
        paddingRight: 25,
        marginTop: 20,
        marginBottom: -30,
        paddingLeft: 25,
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
        marginTop: 10,
        display: 'flex',
        alignSelf: 'center',
        paddingLeft: 50,
    }
});
export default SignUpScreen
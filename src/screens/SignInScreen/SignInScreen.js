import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../../KalorijuApp/assets/images/Calorise.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
const SignInScreen = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPress = () => {
        console.warn("Sign in");
    }

    const onForgotPasswordPress = () => {
        console.warn("Forgot Password");
    }

    const onSignUpPress = () => {
        console.warn("Sign Up")
    }

    return (
        <View style={styles.root}>
            <Image source={Logo}
            style={[styles.logo, {height: height * 0.3}]}
             resizeMode ="contain" 
             />
             <Text style={styles.Text}>Login</Text>
             <Text style={styles.SmallText}>please sign in to continue</Text>

             <CustomInput placeholder={"Username"} value={Username} setValue={setUsername}/>
            
             <CustomInput placeholder={"Password"} value={Password} setValue={setPassword} secureTextEntry={true}/>
             <CustomButton text="Log in ->" onPress={onSignInPress} />

             <CustomButton text="Forgot Password" onPress={onForgotPasswordPress} type="TERTIARY" />

             <Text style={styles.SignUpText}>Don't have an account?<CustomButton text="Sign Up" onPress={onSignUpPress} type="SIGNUP" /> </Text>
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
    },
    SmallText:{
        color: '#818181',
        paddingRight: 109,
        marginBottom: 80,
    },
    SignUpText:{
        display: 'flex',
        alignSelf: 'center',


    }
});
export default SignInScreen
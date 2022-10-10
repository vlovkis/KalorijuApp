import React, {useState} from "react";
import {View, Text, StyleSheet,} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from "@react-navigation/native";
const ConfirmEmail = () => {
    const [code, setCode] = useState('');
    const navigation = useNavigation();

    const onConfirmNext = () => {
        navigation.navigate('AdditionalInfo')
    }
    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }
    const onResend = () => {
        console.warn("Resend")
    }
    return (
        <View style={styles.root}>
        
             <Text style={styles.title}>Confirm Email</Text>

             <CustomInput
             placeholder={"Enter your confirmation code"}
             value={code}
             setValue={setCode}
             />
             <CustomButton
             text="NEXT"
             onPress={onConfirmNext}
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
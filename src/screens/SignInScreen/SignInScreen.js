import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../../KalorijuApp/assets/images/Calorise.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
const SignInScreen = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const {height} = useWindowDimensions();

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
             <CustomButton />
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
    }
});
export default SignInScreen
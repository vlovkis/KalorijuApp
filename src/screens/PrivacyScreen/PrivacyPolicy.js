import React from 'react';
import {View, Text} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


const PrivacyPolicy = () => {
    const navigation = useNavigation();

    const onPressBack = () => {
        navigation.navigate("SignUp")
    }
    return (
        <View style={{ alignSelf:'center', top:180}}>
       <Ionic name="arrow-back" onPress={onPressBack} style={{fontSize: 30, bottom:110, right: 50}}/>
<Text style={{right:40, bottom:80, fontSize: 40, fontWeight:'bold'}}>Privacy Policy</Text>
        </View>

    )

}


export default PrivacyPolicy
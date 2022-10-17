import React, {useState} from "react";
import {View, Text, StyleSheet, minLength, maxLength, Alert, TextInput} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useForm } from "react-hook-form";
import { Auth } from 'aws-amplify';

import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';
import awsExports  from '../../../aws-exports';
Amplify.configure(awsExports);


const AdditionalInfo = () => {
    try{
    
    async function AddInfo() {
        const data = {
            body: {
                fullName: formState.fullName,
                age: formState.age,
                height: formState.height,
                weight: formState.weight,
                weightGoal: formState.weightGoal,

            }
        };

        const apiData = await API.post('tableMap', '/table', data);
        alert('Information added!');
    }

    const formState = {age: '', fullName: '', height: '', weight: '', weightGoal: ''};

    function updateFormState(key, value){
        formState[key] = value;
    }
}catch (err){ console.log(err)}

const navigation = useNavigation();

const onFinishPress = () =>{
    navigation.navigate("Home");
}

const onBackPress = () =>{
    navigation.navigate("ConfirmEmail")
}

    return (
        <View style={styles.root}>
    <Text style={styles.Text}>Additional Information</Text>
    <Text style={styles.SmallText}>Fill out information to continue.</Text>
            <View style={styles.Inputs}>
                <TextInput style={styles.Input} placeholder="First Name and Last Name" onChange={e => updateFormState('fullName', e.target)}/>
                <TextInput style={styles.Input} keyboardType='numeric' maxLength={2} placeholder="Age" onChange={e => updateFormState('age', e.target.valueOf)}/>
                <TextInput style={styles.Input} keyboardType='numeric' maxLength={3} placeholder="Weight (Kg)" onChange={e => updateFormState('weight', e.target.valueOf)}/>
                <TextInput style={styles.Input} keyboardType='numeric' maxLength={3} placeholder="Height (Cm)" onChange={e => updateFormState('height', e.target.valueOf)}/>
                <TextInput style={styles.Input} keyboardType='numeric' maxLength={3} placeholder="Weight Goal (Kg)" onChange={e => updateFormState('weightGoal', e.target.valueOf)}/>
                <CustomButton onPress={AddInfo} text="Add Information"/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },
    Text:{
        fontSize: 40,
        fontWeight: "bold",
        paddingRight: 150,
        marginBottom: 5,
        paddingLeft: 20,
        top: 90,
    },
    SmallText:{
        color: '#818181',
        alignSelf: "stretch",
        top: 100,
        paddingLeft: 20,
    },
    Inputs:{
        top:150,
        },
    ButtonPlacement:{
        top: 130,
        left:5,
    },
    Input:{
        height: 40,
        backgroundColor: '#fff',
        marginHorizontal: 7,
        marginVertical: 5,
        padding: 5,
        width: 250,
        borderRadius: 10,
    },
    InputLabel:{
        left: 10,
    }
});
export default AdditionalInfo
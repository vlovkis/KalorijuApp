import React, {useState} from "react";
import {View, Text, StyleSheet, minLength, maxLength} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useForm } from "react-hook-form";

const AdditionalInfo = () => {
    const {control, handleSubmit} = useForm();

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
    <CustomInput 
    placeholder={"Full Name"} 
    name="FullName"
    control={control}
    rules={{
        required: 'Full name is required'
    }}
    />
    <CustomInput 
    name="Birthday"
    placeholder={"Date Of Birth"}
    control={control}
    type="date"
    rules={{
        required: 'Date of birth is required',
    }}

    
    />
    <CustomInput
    name="Height"
    placeholder={"Height in cm"}
    control={control}
    rules={{
        required: 'Height is required',
        minLength: {
            value: 3,
            message: 'There should be 3 digits'
        },
        maxLength: {
            value: 3,
            message: 'There should be 3 digits'
        }
    }}
    
    />
    <CustomInput
    name="Weight"
    placeholder={"Weight in kg"}
    control={control}
    rules={{
        required: "Weight is required",
        minLength: {
            value: 2,
            message: 'There should be at least 2 digits'
        },
        maxLength: {
            value: 3,
            message: '3 digits max'
        }

    }}
    
    />
    <CustomInput
    name="WeightGoal"
    placeholder={"Weight Goal"}
    control={control}
    rules={{
        required: "Weight goal is required",
        minLength: {
            value: 2,
            message: 'There should be at least 2 digits'
        },
        
        maxLength: {
            value: 3,
            message: '3 digits max'
        },

    }}
    
    />
            </View>
            <View style={styles.ButtonPlacement}>
            <CustomButton text="Finish" onPress={handleSubmit(onFinishPress)} />
            <CustomButton text="Back" onPress={onBackPress} type="SECONDARY"/>
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
});
export default AdditionalInfo
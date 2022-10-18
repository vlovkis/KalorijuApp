import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";


const AdditionalInfo = () => {
    const [ageInputValue, setAgeInputValue] = React.useState('');
    const [weightInputValue, setWeightInputValue] = React.useState('');
    const [weightGoalInputValue, setWeightGoalInputValue] = React.useState('');
    const [heightInputValue, setHeightInputValue] = React.useState('');
    const [fullNameInputValue, setFullNameInputValue] = React.useState('');

    saveToAsync = async () => {
        try {
          await AsyncStorage.setItem("@age", ageInputValue);
          await AsyncStorage.setItem("@weight", weightInputValue);
          await AsyncStorage.setItem("@weightG", weightGoalInputValue);
          await AsyncStorage.setItem("@height", heightInputValue);
          await AsyncStorage.setItem("@fullN", fullNameInputValue);
          alert("Information saved");
        } catch (error) {
          // Error saving data
        }
      };

   
const navigation = useNavigation();

const onFinishPress = () =>{
    navigation.navigate("Sign");
}

const onBackPress = () =>{
    navigation.navigate("ConfirmEmail")
}

    return (
        <View style={styles.root}>
    <Text style={styles.Text}>Additional Information</Text>
    <Text style={styles.SmallText}>Fill out information to continue.</Text>
            <View style={styles.Inputs}>
                <TextInput style={styles.Input} placeholder="First Name and Last Name" onChangeText={(text) => setFullNameInputValue(text)}/>
                <TextInput style={styles.Input} keyboardType='numeric' maxLength={2} placeholder="Age" onChangeText={(text) => setAgeInputValue(text)}/>
                <TextInput style={styles.Input} keyboardType='numeric' maxLength={3} placeholder="Weight (Kg)" onChangeText={(text) => setWeightInputValue(text)}/>
                <TextInput style={styles.Input} keyboardType='numeric' maxLength={3} placeholder="Height (Cm)" onChangeText={(text) => setHeightInputValue(text)}/>
                <TextInput style={styles.Input} keyboardType='numeric' maxLength={3} placeholder="Weight Goal (Kg)" onChangeText={(text) => setWeightGoalInputValue(text)}/>
                <TouchableOpacity onPress={() => this.saveToAsync()}>
                    <Text>Save</Text>
                </TouchableOpacity>
                <CustomButton onPress={onFinishPress}>
                    <Text>Home</Text>
                </CustomButton>
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
import React, {useState, Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {Auth} from 'aws-amplify';
import AsyncStorage from "react-native";

const Profile = () => {
   
    const signOut = () => {
        Auth.signOut();
    };

    return (
        
        <View>
<Text style={{ fontSize: 24, alignSelf:'center', top:100}}>Profile settings</Text>
<View style={styles.Inputs}>
                <TextInput style={styles.Input} placeholder="First Name and Last Name" onChangeText={(text) => setFullNameInputValue(text)}/>
                <TextInput style={styles.Input} keyboardType='numeric' maxLength={2} placeholder="Age" onChangeText={(text) => setAgeInputValue(text)}/>
                <TextInput style={styles.Input} keyboardType='numeric' maxLength={3} placeholder="Weight (Kg)" onChangeText={(text) => setWeightInputValue(text)}/>
                <TextInput style={styles.Input} keyboardType='numeric' maxLength={3} placeholder="Height (Cm)" onChangeText={(text) => setHeightInputValue(text)}/>
                <TextInput style={styles.Input} keyboardType='numeric' maxLength={3} placeholder="Weight Goal (Kg)" onChangeText={(text) => setWeightGoalInputValue(text)}/>
                <TouchableOpacity onPress={handleSubmit()}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
<Text
    style={{ fontSize: 24, alignSelf:'center', color: 'red', top:150}}// Reik pagrąžint
    onPress={signOut}
> Sign Out </Text>
        </View>

    )
}

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
        left:60
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

export default Profile
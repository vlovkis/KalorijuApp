import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Auth} from 'aws-amplify';
import CustomSignOut from '../../components/CustomSignOut';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { Input } from '@rneui/base';
import { ScrollView } from 'react-native-gesture-handler';
const Profile = () => {
   


    const signOut = () => {
        Auth.signOut();
    };




    return (
        
        <View style={{flex:1, height: 100,}}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.username}>xXSlayerGamerXx</Text>
        <Text style={styles.component}>Full name</Text>
        <Text style={styles.data}>Jeff Bezos</Text>
        <Text style={styles.input}>___________________________________________</Text>
        <Text style={styles.component}>Age</Text>
        <Text style={styles.data}>21</Text>
        <Text style={styles.input}>___________________________________________</Text>
        <Text style={styles.component}>Height (cm)</Text>
        <Text style={styles.data}>68</Text>
        <Text style={styles.input}>___________________________________________</Text>
        <Text style={styles.component}>Weight (kg) </Text>
        <Text style={styles.data}>360</Text>
        <Text style={styles.input}>___________________________________________</Text>
        <Text style={styles.component}>Weight Goal (kg)</Text>
        <Text style={styles.data}>420</Text>
        <Text style={styles.input}>___________________________________________</Text>

        <CustomSignOut text="Sign Out" onPress={signOut}></CustomSignOut>
       
        </View>

    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },

    title:{
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 40,
        top: 60,
        alignSelf: 'center',
        
    },
    data:{
        fontWeight: 'bold',
        paddingLeft: 55,
        top: 40,
        fontSize: 19,
    },
    input:{
        top: 30,
        paddingLeft: 50,
    },
    component:{
        color: "#818181",
        fontWeight: 'bold',
        paddingBottom: 20,
        top: 50,
        paddingLeft: 50,

    },
    signOutText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    username: {
            backgroundColor: '#FDA23B',
            top: 45,
            height: 80,
            alignSelf: 'center',
            width: 360,
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: "#fff",
            borderRadius: 41,
            marginBottom: 20,
    },
    signOut: {
        width:250,
        padding: 10,
        alignSelf:'center', 
        backgroundColor: 'red',
        borderColor: 'red',
        borderRadius: 25, 
        top: '82%',
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
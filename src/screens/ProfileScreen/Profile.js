import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Auth} from 'aws-amplify';
    

    
const Profile = () => {
   
    const signOut = () => {
        Auth.signOut();
    };




    return (
        
        <View>
        <Text style={{ fontSize: 24, alignSelf:'center', top:100}}>User profile</Text>




        <TouchableOpacity style={styles.signOut} onPress={signOut}>
            <Text style={styles.signOutText}>
            Sign Out
            </Text>
        </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },
    signOutText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    signOut: {
        width:250,
        padding: 10,
        alignSelf:'center', 
        backgroundColor: 'red',
        borderColor: 'red',
        borderRadius: '25px', 
        top: 650
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
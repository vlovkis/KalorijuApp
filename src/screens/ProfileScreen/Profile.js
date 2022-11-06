import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Auth} from 'aws-amplify';
import CustomSignOut from '../../components/CustomSignOut';
const Profile = () => {
   


    const signOut = () => {
        Auth.signOut();
    }


    return (
        
        <View style={{flex:1, height: 100, top: 20}}>
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
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 40,
        top: 60,
        alignSelf: 'center',
        
    },
    data:{
        fontWeight: 'bold',
        paddingLeft: 55,
        top: 40,
        right:20,
        fontSize: 19,
    },
    input:{
        top: 30,
        paddingLeft: 50,
        right: 20
    },
    component:{
        color: "#818181",
        fontWeight: 'bold',
        paddingBottom: 20,
        top: 50,
        paddingLeft: 50,
        right: 20

    },
    username: {
            top: 45,
            padding: 20,
            alignSelf: 'center',
            width: 360,
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: "orange",
            borderRadius: 41,
            borderWidth: 2,
            borderColor: 'orange',
            marginBottom: 20,
    },
});

export default Profile
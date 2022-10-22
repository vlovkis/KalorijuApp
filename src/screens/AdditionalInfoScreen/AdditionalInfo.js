import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import {Auth} from 'aws-amplify'



const AdditionalInfo = () => {
    const route = useRoute();
    const {control, handleSubmit, watch} = useForm({
        defaultValues: {username: route?.params?.username,
                        password: route?.params?.password,
                        email: route?.params?.email,
                        age: route?.params?.age,
                    }
                   
    });

const navigation = useNavigation();

const onFinishPress = async(data) =>{
    const {username, password, email, age, weight, fullname, height, weightGoal, name }  = data;
        try {
            const response = await Auth.signUp({
                username,
                password,
                attributes: {email, 'custom:fullname': fullname, preferred_username: username, 'custom:Age': age, 'custom:Weight': weight, 'custom:Height': height, 'custom:WeightGoal': weightGoal, name},
            });
            navigation.navigate("ConfirmEmail", {username});
        } catch (e){
            Alert.alert('Oops', e.message);
        }    
}

const onBackPress = () =>{
    navigation.navigate("ConfirmEmail")
}

    return (
        <View style={styles.root}>
    <Text style={styles.Text}>Additional Information</Text>
    <Text style={styles.SmallText}>Fill out information to continue.</Text>
            <View style={styles.Inputs}>
                
                <TextInput style={styles.Input}
                control={control}
                name="fullName"
                placeholder="First Name and Last Name"
                rules={{
            minLength: {
                value: 3,
                message: 'Name should be at least 3 characters long',
            },
            maxLength: {
                value: 24,
                message: 'Name should be max 24 characters long',
            },
            }}
            />
                <TextInput style={styles.Input} 
                keyboardType='numeric' 
                maxLength={2}
                name="age"
                placeholder="Age"
                rules={{
                    minLength: {
                        value: 1,
                        message: 'Wrong age',
                    },
                    maxLength: {
                        value: 3,
                        message: 'Wrong age',
                    },
                    }}
                />
                <TextInput style={styles.Input} name="weight" keyboardType='numeric' maxLength={3} placeholder="Weight (Kg)" />
                <TextInput style={styles.Input} name="height" keyboardType='numeric' maxLength={3} placeholder="Height (Cm)" />
                <TextInput style={styles.Input} name= "weightGoal" keyboardType='numeric' maxLength={3} placeholder="Weight Goal (Kg)"/>
                <CustomButton onPress={handleSubmit(onFinishPress)}>
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
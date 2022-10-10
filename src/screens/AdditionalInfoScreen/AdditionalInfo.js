import React, {useState} from "react";
import {View, Text, StyleSheet,} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const AdditionalInfo = () => {
    const [FullName, setFullName] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState('');
    const [Height, setHeight] = useState('');
    const [Weight, setWeight] = useState('');
    const [WeightGoal, setWeightGoal] = useState('');

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
    <CustomInput placeholder={"Full Name"} value={FullName} setValue={setFullName}/>
    <CustomInput placeholder={"Date Of Birth"} value={DateOfBirth} setValue={setDateOfBirth}/>
    <CustomInput placeholder={"Height"} value={Height} setValue={setHeight}/>
    <CustomInput placeholder={"Weight"} value={Weight} setValue={setWeight}/>
    <CustomInput placeholder={"Weight Goal"} value={WeightGoal} setValue={setWeightGoal}/>
            </View>
            <View style={styles.ButtonPlacement}>
            <CustomButton text="Finish" onPress={onFinishPress} />
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
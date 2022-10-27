import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionic from 'react-native-vector-icons/Ionicons';


const FatsAndSugar = () => {

   const navigation = useNavigation();

   
    return(

        <View>
            <Ionic name="arrow-back" onPress={() => navigation.goBack()} style={{fontSize: 30, bottom:110, left: 20, paddingTop: 180}}/>
            <Text style={styles.mainText}>Fats and Sugars</Text>
            
        </View>

    )
}

const styles = StyleSheet.create({

mainText:{
    fontSize: 40,
    fontWeight: "bold",
    paddingRight: 20,
    marginBottom: 30,
    paddingLeft: 20,
    bottom: 100,
    left:25, 
},
});

export default FatsAndSugar
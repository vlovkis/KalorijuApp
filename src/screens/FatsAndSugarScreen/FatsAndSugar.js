import React from "react";
import {View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default class FatsAndSugar extends React.Component {

    navigation = useNavigation();

    render(){
        return(

            <View>
                <Text>Fats and sugars</Text>
            </View>

        );
    }
}
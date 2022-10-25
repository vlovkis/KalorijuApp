import React from "react";
import {View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default class FruitsAndVeg extends React.Component {

    navigation = useNavigation();

    render(){
        return(

            <View>
                <Text>Fruits and Vegetables</Text>
            </View>

        );
    }
}
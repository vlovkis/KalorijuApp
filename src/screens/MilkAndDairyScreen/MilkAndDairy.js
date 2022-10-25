import React from "react";
import {View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default class MilkAndDairy extends React.Component {

    navigation = useNavigation();

    render(){
        return(

            <View>
                <Text>Milk and Dairy</Text>
            </View>

        );
    }
}
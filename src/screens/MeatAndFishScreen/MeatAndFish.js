import React from "react";
import {View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default class MeatAndFish extends React.Component {

    navigation = useNavigation();

    render(){
        return(

            <View>
                <Text>Meat and Fish page</Text>
            </View>

        );
    }
}
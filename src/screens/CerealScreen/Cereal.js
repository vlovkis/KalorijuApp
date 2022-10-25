import React from "react";
import {View, Text} from 'react-native';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";


const Cereal = () => {

   const navigation = useNavigation();

        return(

            <View>
                <Text>Cereal page</Text>
            </View>

        )
}

export default Cereal
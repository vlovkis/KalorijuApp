import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionic from 'react-native-vector-icons/Ionicons';

import CerealScreen from '../CerealScreen/Cereal';


const index = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Cereal" component={CerealScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    

    )
};
export default index
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useState, Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CerealScreen from '../CerealScreen'
import MilkAndDairy from '../MilkAndDairyScreen'
import MeatAndFish from '../MeatAndFishScreen'
import FatsAndSugar from '../FatsAndSugarScreen'
import FruitsAndVeg from '../FruitsAndVegScreen'
import Fruit from '../FruitScreen'

const AddFood = (props) => {

  const Stack = createNativeStackNavigator();

  function MainScreen({navigation}) {
    return (
      <View>
      <View style = {styles.button}>
      <Button title = "Cereal" onPress={() => navigation.navigate('Cereal')} />
      <Button title = 'Milk and Dairy' onPress={() => navigation.navigate('MilkAndDairy')} />
      <Button title = 'Meat and Fish' onPress={() => navigation.navigate('MeatAndFish')} />
      <Button title = 'Fruits and Vegetables' onPress={() => navigation.navigate('FruitsAndVeg')} />
      <Button title = 'Fats and Sugars' onPress={() => navigation.navigate('FatsAndSugar')} />
      <Button title = 'Fruit' onPress={() => navigation.navigate('Fruit')} />
      </View>
      </View>
  );
}
  
 
    return (

      <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions = {{headerShown: false}}>
      <Stack.Screen name = "Main" component = {MainScreen}/>
      <Stack.Screen name = 'Cereal' component={CerealScreen} />
      <Stack.Screen name = 'MeatAndFish' component= {MeatAndFish} />
      <Stack.Screen name = "MilkAndDairy" component = {MilkAndDairy}/>
      <Stack.Screen name = 'FruitsAndVeg' component={FruitsAndVeg} />
      <Stack.Screen name = 'FatsAndSugar' component={FatsAndSugar} />
      <Stack.Screen name = 'Fruit' component={Fruit} />
      </Stack.Navigator>
      </NavigationContainer>
    

    )
}

const styles = StyleSheet.create({
  row:{ 
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 20,
    top:"30%",
  },
  touch:{
    borderRadius: 20,
    
    backgroundColor: "orange",
    margin: 5,
  },
  button: {
    color: "black",
    fontSize:20,
    justifyContent: "center",
    display: 'flex',
    textAlign: 'left',
    fontWeight: 'bold',
    padding: 17,
    borderRadius: 20,
    top:20,

    
  },
});

export default AddFood
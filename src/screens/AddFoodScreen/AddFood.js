import { useNavigation, NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useState, Component, useRef, usePrevious} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomNavButton from '../../components/CustomNavButton';
import CerealScreen from '../CerealScreen'
import MilkAndDairy from '../MilkAndDairyScreen'
import MeatAndFish from '../MeatAndFishScreen'
import FatsAndSugar from '../FatsAndSugarScreen'
import FruitsAndVeg from '../FruitsAndVegScreen'
import Fruit from '../FruitScreen'
import HomePage from '../HomeScreen/HomePage';
import CustomSubmit from '../../components/CustomSubmit';
import { Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";


 

const AddFood = (props) => {
  
  const Stack = createNativeStackNavigator();

  function MainScreen({navigation, route}) { 

    const calories= route.params?.kcals;
    let ref = useRef();
    ref.current = isNaN(ref.current) ? calories : ref.current + calories;


    function onPressHomeSubmit() {
      props.navigation.navigate('Home',{kcals: ref.current})
      console.log(ref.current)
      Alert.alert('Calorise',"Calories added");
      
    }


    // Suma kalorijų
    //Reikia dabar padaryti funkciją onSubmit siųsti parametrus tų skaičių,
    // bet reikia daryt su if'ais, nes žmogus gal pasirinktų tik vieną produktą arba du. 

              //<Text style={styles.text}>1st pick:{route.params?.kcals} kcals</Text>
              //<Text style={styles.text}>2nd pick:{prevKcal} kcals</Text>
    return (
      <View style={styles.root}>
      <Text style={styles.title}>Pick a food type</Text>
            <Text style={styles.totCal}>Current selected calories: {calories}kcals</Text>
      <View style={styles.row}>      
      <CustomNavButton type="ADDFOOD" text="Cereal" title = "Cereal" onPress={() => navigation.navigate('Cereal')} style={styles.button}/>
      <CustomNavButton type="ADDFOOD" text="Milk and Dairy" title = 'Milk and Dairy' onPress={() => navigation.navigate('MilkAndDairy')} />
      </View>
      <View style={styles.row}>
      <CustomNavButton type="ADDFOOD" text="Meat and fish" title = 'Meat and Fish' onPress={() => navigation.navigate('MeatAndFish')} />
      <CustomNavButton type="ADDFOOD" text="Vegies and Fruits" title = 'Fruits and Vegetables' onPress={() => navigation.navigate('FruitsAndVeg')} />
      </View>
      <View style={styles.row}>
      <CustomNavButton type="ADDFOOD" text="Fats and Sugars" title = 'Fats and Sugars' onPress={() => navigation.navigate('FatsAndSugar')} />
      <CustomNavButton type="ADDFOOD" text="Fruit" title = 'Fruit' onPress={() => navigation.navigate('Fruit')}/>
      </View>
      <View style={{top:60}}>
      <CustomSubmit text="Submit" onPress={onPressHomeSubmit} />
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
      <Stack.Screen name = 'Home' component={HomePage} />
      </Stack.Navigator>
      </NavigationContainer>
    

    )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    paddingRight: 20,
    paddingLeft: 20,
    top: 40,
    alignSelf: 'center',

  },
  totCal:{
    top:"120%",
    alignSelf:'center',
    fontSize:25,
    fontWeight: "bold",
    textAlign: "center"
  },
  text: {
    top: "83%",
    textAlign: 'center',
    fontSize: 15,
  },
  submit: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',

  },
  submitTouch: {
    left: "27%",
    top: "11%",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#32a852",
    width: 180,
    padding: 10,
    backgroundColor: "#32a852",
    
  },
  root : {
    top:"5%",

  },
  row:{ 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 5,
    borderRadius: 20,
    top:"15%",
  },
  touch:{
    borderRadius: 20,
    
    backgroundColor: "orange",
    margin: 5,
  },

});

export default AddFood
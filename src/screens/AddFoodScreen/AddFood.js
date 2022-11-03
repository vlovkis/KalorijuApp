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


 

const AddFood = (props) => {
  const [totalKcals, setTotalKcals] = useState(null);

  const Stack = createNativeStackNavigator();

  function MainScreen({navigation, route}) { 

    const calories= route.params?.kcals;
    function onPressHomeSubmit(){
      navigation.navigate('Home', {
        kcals : calories,
      })

      Alert.alert('Calorise','Calories added sucessfully',[{text: 'OK', onPress: () => navigation.goBack()}], {cancelable: false});
      
    }


    // Suma kalorijų
    //Reikia dabar padaryti funkciją onSubmit siųsti parametrus tų skaičių,
    // bet reikia daryt su if'ais, nes žmogus gal pasirinktų tik vieną produktą arba du. 

              //<Text style={styles.text}>1st pick:{route.params?.kcals} kcals</Text>
              //<Text style={styles.text}>2nd pick:{prevKcal} kcals</Text>
    return (
      <View style={styles.root}>
      <Text style={styles.title}>Pick a food type</Text>
            <Text>Current: {calories}</Text>
      <CustomNavButton text="Cereal" title = "Cereal" onPress={() => navigation.navigate('Cereal')}>
        <Text style={styles.name}>Cereal</Text>
      </CustomNavButton>
      <CustomNavButton text="Milk and Dairy" title = 'Milk and Dairy' onPress={() => navigation.navigate('MilkAndDairy')} />
      <CustomNavButton text="Meat and fish" title = 'Meat and Fish' onPress={() => navigation.navigate('MeatAndFish')} />
      <CustomNavButton text="Vegies and Fruits" title = 'Fruits and Vegetables' onPress={() => navigation.navigate('FruitsAndVeg')} />
      <CustomNavButton text="Fats and Sugars" title = 'Fats and Sugars' onPress={() => navigation.navigate('FatsAndSugar')} />
      <CustomNavButton text="Fruit" title = 'Fruit' onPress={() => navigation.navigate('Fruit')} />
      <CustomSubmit text="Submit"  onPress={onPressHomeSubmit}></CustomSubmit>
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
    marginBottom: 10,
    paddingLeft: 20,
    top: 20,
    alignSelf: 'center',

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

});

export default AddFood
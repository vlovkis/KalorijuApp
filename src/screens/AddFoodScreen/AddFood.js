import { useNavigation, NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useState, Component} from 'react';
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


 

const AddFood = (props) => {
  const Stack = createNativeStackNavigator();

  function MainScreen({navigation, route}) { 
    
    const [kcalsTotal, setkcalsTotal] = useState(null);
    useEffect(() => {
      if (route.params?.kcals) {
        console.log('Sent Successfully');
        
      }
     }, [route.params?.kcals]);

     alert([route.params?.kcals]);
     // Reikia kažkokiais būdais sugalvot kaip reikia sumuot ateinančias kalorijas.
     // Tada reiks sukurt mygtuką su onclick kuris submitina susumuotas kalorijas ir siunčia į homescreeną.
     // [route.params?.kcals] paima atsiūstus duomenis, bet ištrina praeitą portionSize jei pasirenki naują.
    return (
      <View style={styles.root}>
      <Text style={styles.title}>Pick a food type</Text>
      <Text style={styles.text}>Turimos kcal</Text>
      <CustomNavButton text="Cereal" title = "Cereal" onPress={() => navigation.navigate('Cereal')}>
        <Text style={styles.name}>Cereal</Text>
      </CustomNavButton>
      <CustomNavButton text="Milk and Dairy" title = 'Milk and Dairy' onPress={() => navigation.navigate('MilkAndDairy')} />
      <CustomNavButton text="Meat and fish" title = 'Meat and Fish' onPress={() => navigation.navigate('MeatAndFish')} />
      <CustomNavButton text="Vegies and Fruits" title = 'Fruits and Vegetables' onPress={() => navigation.navigate('FruitsAndVeg')} />
      <CustomNavButton text="Fats and Sugars" title = 'Fats and Sugars' onPress={() => navigation.navigate('FatsAndSugar')} />
      <CustomNavButton text="Fruit" title = 'Fruit' onPress={() => navigation.navigate('Fruit')} />
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
  title: {
    fontSize: 40,
    fontWeight: "bold",
    paddingRight: 20,
    marginBottom: 30,
    paddingLeft: 20,
    top: 20,
    alignSelf: 'center',

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
    paddingBottom: 10,

    
  },
});

export default AddFood
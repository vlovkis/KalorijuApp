import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import 'react-native-gesture-handler';

const CerealStack = createNativeStackNavigator();
function CerealStackScreen(){
  return(
    <CerealStack.Navigator>
      <CerealStack.Screen
          name="Cereal"
          component={CerealScreen}
>
      </CerealStack.Screen>
    </CerealStack.Navigator>
  );
}

const AddFood = () => {
  const navigation = useNavigation();

  const onPressCereal = () => {
    navigation.navigate("Cereal");
  }

    return (
      
        <View>
        
<Text style={{ fontSize: 40, top:100, fontWeight:'bold', left:40, width: "60%", lineHeight: 40}}>SELECT CATEGORY</Text>

      <View style={styles.row}>

<TouchableOpacity style={styles.touch} onPress={onPressCereal}> 
   <Text style={styles.button}>
       Cereal
   </Text>
</TouchableOpacity >

<TouchableOpacity style={styles.touch}> 
   <Text style={styles.button}>
       Meat and fish
   </Text>
</TouchableOpacity >

<TouchableOpacity style={styles.touch}> 
   <Text style={styles.button}>
       Fruits and vegetables
   </Text>
</TouchableOpacity >

<TouchableOpacity style={styles.touch}> 
   <Text style={styles.button}>
       Milk and dairy
   </Text>
</TouchableOpacity >

<TouchableOpacity style={styles.touch}> 
   <Text style={styles.button}>
       Fats and sugars
   </Text>
</TouchableOpacity >

<TouchableOpacity style={styles.touch}> 
   <Text style={styles.button}>
       Fruit
   </Text>
</TouchableOpacity >

</View>
</View>
        

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
    color: "white",
    fontSize:20,
    justifyContent: "center",
    display: 'flex',
    textAlign: 'left',
    fontWeight: 'bold',
    height: 60,
    padding: 17,
    borderRadius: 20,

    
  },
});

export default AddFood
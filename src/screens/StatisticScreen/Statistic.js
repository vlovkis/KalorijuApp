import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, UseState} from 'react-native';


const Statistic = () => {




    return (
        <View style={{ alignSelf:'center', top:180}}>
<Text style={{right:40, bottom:80, fontSize: 40, fontWeight:'bold'}}>STATISTICS</Text>


            <View style={styles.row}>
            <TouchableOpacity> 
                <Text style={styles.button}>
                    Day
                </Text>
            </TouchableOpacity >
            <TouchableOpacity> 
                <Text style={styles.button}>
                    Week
                </Text>
            </TouchableOpacity >
            <TouchableOpacity> 
                <Text style={styles.button}>
                    Month
                </Text>
            </TouchableOpacity >
            <TouchableOpacity> 
                <Text style={styles.button}>
                    Year
                </Text>
            </TouchableOpacity >
            </View>
        </View>


    )

}

const styles = StyleSheet.create({
    row:{ 
      flexDirection: 'row',
      padding: 5,
      bottom: 60
    },
    touch:{
      margin: 5,
    },
    button: {
      fontSize:18,
      justifyContent: "center",
      fontWeight: 'bold',
      padding: 5,
      color:"#818181",
  
      
    },
  });


export default Statistic
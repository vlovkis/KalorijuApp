import React, { useState } from 'react';
import { Pressable } from 'react-native';
import {View, Text, TouchableOpacity, StyleSheet, UseState, Dimensions} from 'react-native';
import { LineChart } from 'react-native-chart-kit';


const Statistic = () => {




    return (
        <View style={{ alignSelf:'center', top:180}}>
<Text style={{ bottom:100, fontSize: 40, fontWeight:'bold', left: 80}}>STATISTICS</Text>


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
                <Text style={styles.pressed}>
                    Month
                </Text>
            </TouchableOpacity >
            <TouchableOpacity> 
                <Text style={styles.button}>
                    Year
                </Text>
            </TouchableOpacity >
            </View>
<View style={{bottom: 30}}>
            <LineChart
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [
            600,
            700,
            800,
            600,
            650,
            420
          ]
        }
      ]
    }}
    width={380} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix="kcal"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#F9FBFC",
      backgroundGradientFrom: "",
      backgroundGradientTo: "",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(207, 112, 29, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(207, 112, 29, ${opacity})`,
      style: {
        borderRadius: 1,
        position: 'absolute'
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
    <View style={styles.overview}>
      
    </View>
        </View>


    )

}

const styles = StyleSheet.create({
    row:{ 
      flexDirection: 'row',
      padding: 5,
      bottom: 80,
      left: 70
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
    pressed: {
      fontSize:18,
      justifyContent: "center",
      fontWeight: 'bold',
      padding: 5,
      color:"orange",
  
      
    },
  });


export default Statistic
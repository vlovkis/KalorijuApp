import React, { useState } from 'react';
import { Pressable } from 'react-native';
import {View, Text, TouchableOpacity, StyleSheet, UseState, Dimensions} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Ionic from 'react-native-vector-icons/Ionicons';


const Statistic = () => {

  function Alert(){
    alert("Not enough info about calories")
  }


    return (
        <View style={{ alignSelf:'center', top:140, width: 350,}}>
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

            <View style={styles.selectMonthAndDay}>
                <Text style={styles.month}>
                 <TouchableOpacity onPress={Alert}><Ionic name="arrow-back-outline" style={styles.arrows}/></TouchableOpacity> November <TouchableOpacity onPress={Alert}><Ionic name="arrow-forward-outline" style={styles.arrows}/></TouchableOpacity>
                </Text>
              
            </View>
            <View style={styles.selectMonthAndDay}>
                <Text style={styles.month}>
                 <TouchableOpacity onPress={Alert}><Ionic name="arrow-back-outline" style={styles.arrows}/></TouchableOpacity> 1-6 <TouchableOpacity onPress={Alert}><Ionic name="arrow-forward-outline" style={styles.arrows}/></TouchableOpacity>
                </Text>
              
            </View>
<View style={{bottom: 30, paddingLeft: 5,}}>
            <LineChart
    data={{
      labels: ["1st", "2nd", "3rd", "4th", "5th", "6th"],
      datasets: [
        {
          data: [
            600,
            700,
            800,
            600,
            650,
            420,
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
      backgroundColor: "#f2f2f2",
      backgroundGradientFrom: "#f2f2f2",
      backgroundGradientTo: "#f2f2f2",
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
      marginVertical: 0,
      borderRadius: 16
    }}
  />
</View>
    <View style={styles.overview}>
      <Text style={styles.total}>Total calories burned:</Text><Text style={styles.number}>6420</Text><View style={styles.hairline} />
      <Text style={styles.total}>Total calories gained:</Text><Text style={styles.number}>3795</Text><View style={styles.hairline} />
      <Text style={styles.total}>Total calories (excl. everything):</Text><Text style={styles.number}>15672</Text><View style={styles.hairline} />
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
    selectMonthAndDay:{
      bottom: 80,
      alignSelf: "center",
    },
    month:{
      color: "#818181"
    },
    total:{
    paddingTop: 10,
    fontSize: 18,
    top: 15,
    left: 10
    
    },
    number:{
      alignSelf: "flex-end",
      bottom: 10,
      fontSize: 20,
      right: 10,
      fontWeight: 'bold'
    },
    hairline: {
      backgroundColor: 'orange',
      height: 2,
      width: "100%"
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
    arrows:{
      color:"#818181",
      top:2
    },
  });


export default Statistic
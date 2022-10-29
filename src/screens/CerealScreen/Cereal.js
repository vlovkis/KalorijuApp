import React, { useState } from "react";
import {View, Text, Button, StyleSheet, SafeAreaView, Image, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Ionic from 'react-native-vector-icons/Ionicons';
import { ImageBackground } from "react-native";
const DATA = [
    {
        title : "Bagel",
        portionSize : 140,
        imageUrl: 'https://images.unsplash.com/photo-1601640790698-5a509963cf01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        id : 1,
        
    },
    {
        title : "Cornflakes" ,
        portionSize : 130 ,
        imageUrl: 'https://images.unsplash.com/photo-1601640790698-5a509963cf01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        id : 2,
        
    },
    {
        title : "Muesli" ,
        portionSize : 195 ,
        imageUrl: 'https://images.unsplash.com/photo-1601640790698-5a509963cf01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        id : 3,
    },
    {
        title : "Crumpets" ,
        portionSize : 93 ,
        imageUrl: 'https://images.unsplash.com/photo-1601640790698-5a509963cf01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        id : 4,
    },
    {
        title : "Chapatis" ,
        portionSize: 250 ,
        imageUrl: 'https://images.unsplash.com/photo-1601640790698-5a509963cf01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        id : 5,
    },
    {
        title : "basic fruit mix" ,
        portionSize : 320 ,
        imageUrl: 'https://images.unsplash.com/photo-1601640790698-5a509963cf01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        id : 6,
    },
];

const Item = ({ item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Image source={{uri:item.imageUrl}} style={{width:90, height:70, alignSelf:'center'}}/>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
        <Text style={[styles.SmallText, textColor]}>{item.portionSize}kcal per 100g</Text>
    </TouchableOpacity>
);
const Cereal = () => {
const [selectedId, setSelectedId] = useState(null);

const renderItem =({item}) => {
    const backgroundColor = item.id === selectedId ? "orange" : "#fff";
    const color = item.id === selectedId ? 'white' : 'black';
    
    return(
    <Item
     item={item}
     onPress={()=> setSelectedId(item.id)}
     backgroundColor={{backgroundColor}}
     textColor={{color}}
     />
    );
};
const navigation = useNavigation();


        return(

            <View>
                <Ionic name="arrow-back" onPress={() => navigation.goBack()} style={{fontSize: 30, bottom:110, left: 20, paddingTop: 180}}/>
                <Text style={styles.mainText}>Cereal</Text>

                <SafeAreaView style={styles.container}>
                    <FlatList style={{margin:5}}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    />
                </SafeAreaView>
            </View>

        )
}

const styles = StyleSheet.create({

    mainText:{
        fontSize: 40,
        fontWeight: "bold",
        paddingRight: 20,
        marginBottom: 30,
        paddingLeft: 20,
        bottom: 100,
        left:25, 
    },
    container: {
        marginTop: -105,
      },
      item: {
        borderStyle: "solid",
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 8,
        width: 150,
        padding: 15,
        marginVertical: 4,
        marginHorizontal: 100,
      },
      title: {
        alignSelf: 'center',
        fontSize: 15,
      },
      row: {
        flex: 1,
        justifyContent: "space-around"
      },
      SmallText:{
        fontsize: 2,
        color: '#818181',
       alignSelf: 'center'
    },
});

export default Cereal;
import React, { useState } from "react";
import {View, Text, Button, StyleSheet, SafeAreaView, Image, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionic from 'react-native-vector-icons/Ionicons';
import { useRoute } from "@react-navigation/native";


//Bagel foto
const bagel = Image.resolveAssetSource(require('./assets/images/bagel.png')).uri;

//Cornflakes foto
const cornflakes = Image.resolveAssetSource(require('./assets/images/cornflakes.png')).uri;

//Muesli foto
const muesli = Image.resolveAssetSource(require('./assets/images/muesli.png')).uri;

//Crumpets foto
const crumpets = Image.resolveAssetSource(require('./assets/images/crumpets.png')).uri;

//Chapatis foto
const chaptis = Image.resolveAssetSource(require('./assets/images/chaptis.png')).uri;

//FruitMix foto
const fruitMix = Image.resolveAssetSource(require('./assets/images/fruitMix.png')).uri;

const DATA = [
    

    {
        title : "Bagel",
        portionSize : 140,
        imageUrl: bagel,
        id : 1,
        
    },
    {
        title : "Cornflakes" ,
        portionSize : 130 ,
        imageUrl: cornflakes,
        id : 2,
        
    },
    {
        title : "Muesli" ,
        portionSize : 195 ,
        imageUrl: muesli,
        id : 3,
    },
    {
        title : "Crumpets" ,
        portionSize : 93 ,
        imageUrl: crumpets,
        id : 4,
    },
    {
        title : "Chapatis" ,
        portionSize: 250 ,
        imageUrl: chaptis,
        id : 5,
    },
    {
        title : "basic fruit mix" ,
        portionSize : 320 ,
        imageUrl: fruitMix,
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
const [selectedPortion, setSelectedPortion] = useState(null);

const renderItem =({item}) => {
    const backgroundColor = item.id === selectedId ? "orange" : "#fff";
    const color = item.id === selectedId ? 'white' : 'black';

    
    return(
    <Item
     item={item}
     onPress={()=> {setSelectedId(item.id)
     setSelectedPortion(item.portionSize)}}
     backgroundColor={{backgroundColor}}
     textColor={{color}}
     />
    );
};
const navigation = useNavigation();

        return(

            <View>
                <Ionic name="arrow-back" onPress={() => navigation.goBack()} style={{fontSize: 30, bottom:110, left: 20, paddingTop: 180}}/>
                <Ionic name="checkmark" style={{fontSize: 40, position: "absolute", left: "80%", top:75, color: "green"}} 
                onPress={() => {navigation.navigate({
                    name: 'Main',
                    params : {kcals: selectedPortion}, 
                    merge: true})}}
                />
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
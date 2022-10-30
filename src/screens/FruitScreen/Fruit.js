import React, { useState } from "react";
import {View, Text, StyleSheet, SafeAreaView, Image, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionic from 'react-native-vector-icons/Ionicons';
import index from '../HomeScreen/HomePage'

//Anchovies foto
const apricot = Image.resolveAssetSource(require('./assets/images/apricot.png')).uri;

//Bacon average fried foto
const avocado = Image.resolveAssetSource(require('./assets/images/avocado.png')).uri;

//Bacon average grilled foto
const blackcurrant = Image.resolveAssetSource(require('./assets/images/blackcurrant.png')).uri;

//Beef(roast) foto
const damson = Image.resolveAssetSource(require('./assets/images/damson.png')).uri;

//Beef burgers frozen
const gooseberries = Image.resolveAssetSource(require('./assets/images/gooseberries.png')).uri;

//Chicken foto
const kiwi = Image.resolveAssetSource(require('./assets/images/kiwi.png')).uri;

const DATA = [
    

    {
        title : "Apricot",
        portionSize : 30,
        imageUrl: apricot,
        id : 1,
        
    },
    {
        title : "Avocado" ,
        portionSize : 150 ,
        imageUrl: avocado,
        id : 2,
        
    },
    {
        title : "Blackcurrant" ,
        portionSize : 1 ,
        imageUrl: blackcurrant,
        id : 3,
    },
    {
        title : "Damson" ,
        portionSize : 28 ,
        imageUrl: damson,
        id : 4,
    },
    {
        title : "Gooseberries" ,
        portionSize: 3 ,
        imageUrl: gooseberries,
        id : 5,
    },
    {
        title : "Kiwi" ,
        portionSize : 34 ,
        imageUrl: kiwi,
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


const Fruit = () => {

 

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
                <Ionic name="checkmark" style={{fontSize: 40, position: "absolute", left: "80%", top:75, color: "green"}} onPress={() => {navigation.goBack(navigation.navigate('Home'))}}/>
                <Text style={styles.mainText}>Fruit</Text>

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

export default Fruit
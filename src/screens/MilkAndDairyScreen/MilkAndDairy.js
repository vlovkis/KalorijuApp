import React, { useState } from "react";
import {View, Text, StyleSheet, SafeAreaView, Image, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionic from 'react-native-vector-icons/Ionicons';

//Anchovies foto
const cheese = Image.resolveAssetSource(require('./assets/images/cheese.png')).uri;

//Bacon average fried foto
const cottageCheese = Image.resolveAssetSource(require('./assets/images/cottageCheese.png')).uri;

//Bacon average grilled foto
const creamCheese = Image.resolveAssetSource(require('./assets/images/creamCheesew.png')).uri;

//Beef(roast) foto
const iceCream = Image.resolveAssetSource(require('./assets/images/iceCream.png')).uri;

//Beef burgers frozen
const milkWhole = Image.resolveAssetSource(require('./assets/images/milk.png')).uri;

//Chicken foto
const soyaMilk = Image.resolveAssetSource(require('./assets/images/soyaMilk.png')).uri;

const DATA = [
    

    {
        title : "Cheese average",
        portionSize : 440,
        imageUrl: cheese,
        id : 1,
        
    },
    {
        title : "Cottage cheese" ,
        portionSize : 98 ,
        imageUrl: cottageCheese,
        id : 2,
        
    },
    {
        title : "Cream cheese" ,
        portionSize : 428 ,
        imageUrl: creamCheese,
        id : 3,
    },
    {
        title : "Ice cream" ,
        portionSize : 180 ,
        imageUrl: iceCream,
        id : 4,
    },
    {
        title : "Milk whole" ,
        portionSize: 70 ,
        imageUrl: milkWhole,
        id : 5,
    },
    {
        title : "Soya Milk" ,
        portionSize : 36 ,
        imageUrl: soyaMilk,
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
const MilkAndDairy = () => {

  

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
                <Text style={styles.mainText}>Milk and Dairy</Text>

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

export default MilkAndDairy
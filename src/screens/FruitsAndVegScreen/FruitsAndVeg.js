import React, { useState } from "react";
import {View, Text, StyleSheet, SafeAreaView, Image, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionic from 'react-native-vector-icons/Ionicons';

//Anchovies foto
const apple = Image.resolveAssetSource(require('./assets/images/apple.png')).uri;

//Bacon average fried foto
const banana = Image.resolveAssetSource(require('./assets/images/banana.png')).uri;

//Bacon average grilled foto
const blackberries = Image.resolveAssetSource(require('./assets/images/blackberries.png')).uri;

//Beef(roast) foto
const carrot = Image.resolveAssetSource(require('./assets/images/carrot.png')).uri;

//Beef burgers frozen
const cucumber = Image.resolveAssetSource(require('./assets/images/cucumber.png')).uri;

//Chicken foto
const grapes = Image.resolveAssetSource(require('./assets/images/grapes.png')).uri;

const DATA = [
    

    {
        title : "Apple",
        portionSize : 44,
        imageUrl: apple,
        id : 1,
        
    },
    {
        title : "Banana" ,
        portionSize : 65 ,
        imageUrl: banana,
        id : 2,
        
    },
    {
        title : "Blackberries" ,
        portionSize : 25 ,
        imageUrl: blackberries,
        id : 3,
    },
    {
        title : "Carrot" ,
        portionSize : 25 ,
        imageUrl: carrot,
        id : 4,
    },
    {
        title : "Cucumber" ,
        portionSize: 10 ,
        imageUrl: cucumber,
        id : 5,
    },
    {
        title : "Grapes" ,
        portionSize : 62 ,
        imageUrl: grapes,
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


const FruitsAndVeg = () => {

 

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
                <Ionic name="checkmark" style={{fontSize: 40, position: "absolute", left: "80%", top:75, color: "green"}}/>
                <Text style={styles.mainText}>Vegies and Fruits</Text>

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

export default FruitsAndVeg
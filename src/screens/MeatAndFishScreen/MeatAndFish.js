import React, { useState } from "react";
import {View, Text, StyleSheet, SafeAreaView, Image, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionic from 'react-native-vector-icons/Ionicons';

//Anchovies foto
const anchovies = Image.resolveAssetSource(require('./assets/images/anchovies.png')).uri;

//Bacon average fried foto
const baconFried = Image.resolveAssetSource(require('./assets/images/baconFried.png')).uri;

//Bacon average grilled foto
const baconGrilled = Image.resolveAssetSource(require('./assets/images/baconFried.png')).uri;

//Beef(roast) foto
const beefRoast = Image.resolveAssetSource(require('./assets/images/beefRoast.png')).uri;

//Beef burgers frozen
const beefBurger = Image.resolveAssetSource(require('./assets/images/burger.png')).uri;

//Chicken foto
const chicken = Image.resolveAssetSource(require('./assets/images/chicken.png')).uri;

const DATA = [
    

    {
        title : "Anchovies tinned",
        portionSize : 300,
        imageUrl: anchovies,
        id : 1,
        
    },
    {
        title : "Bacon average fried" ,
        portionSize : 500 ,
        imageUrl: baconFried,
        id : 2,
        
    },
    {
        title : "Bacon average grilled" ,
        portionSize : 150 ,
        imageUrl: baconGrilled,
        id : 3,
    },
    {
        title : "Beef (roast)" ,
        portionSize : 380 ,
        imageUrl: beefRoast,
        id : 4,
    },
    {
        title : "Beef burgers frozen" ,
        portionSize: 280 ,
        imageUrl: beefBurger,
        id : 5,
    },
    {
        title : "Chicken" ,
        portionSize : 200 ,
        imageUrl: chicken,
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



const MeatAndFish = () => {


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
                <Text style={styles.mainText}>Meat and Fish</Text>

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

export default MeatAndFish
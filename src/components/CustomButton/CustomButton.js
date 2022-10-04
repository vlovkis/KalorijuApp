import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomButton = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login -></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCA13A',
        width: 107,
        textAlign: 'center',
        padding:15,
        marginTop: 50,
        marginVertical: 5,
        borderRadius: 35,
        marginLeft: 170,
        

    },
    text: {paddingHorizontal: 10,
    color: 'white'},

});;
export default CustomButton;
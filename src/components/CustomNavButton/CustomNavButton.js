import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomNavButton = ( {onPress, text, type = "PRIMARY"} ) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 290,
        textAlign: 'center',
        padding:15,
        marginTop: 20,
        borderRadius: 35,
        alignSelf: 'center',
        

    },

    container_PRIMARY: {
        backgroundColor: '#FCA13A',
    },

    container_TERTIARY: {
        width: 200,
        marginTop: 0,
        position: 'relative',
        bottom: 154,
        left:30,
    },
    container_SECONDARY: {
        borderColor: '#FCA13A',
        borderWidth: 1,
        right: 160,
        position: 'relative',
        bottom: 106,
        width: 138,
    },

    text: {alignSelf: 'center',
    fontSize: 24,
    color: 'white'},

    text_TERTIARY: {
        color: '#FCA13A',
        fontSize: 10,
    },

    text_SIGNUP: {
        color: '#FCA13A',
        top: 13,
        position: 'absolute',
    },
    text_SECONDARY: {
        color: '#FCA13A',
        
    },

});;
export default CustomNavButton;
import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { Controller } from "react-hook-form";

const CustomInput = ({control, name, rules = {}, placeholder, secureTextEntry}) => {
    return (
            <Controller 
              control={control}
              name={name}
              rules={rules}
              render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( 
                <>
              <View style={[styles.container, {borderColor: error ? 'red' : '#e8e8e8' }]}>
              <TextInput 
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder} 
                style={styles.input}
                secureTextEntry={secureTextEntry}
                />
                </View>
                {error && (
                <Text style={{color: 'red', alignSelf: 'stretch', left: 40}}>{error.message || 'Error'}</Text>
                )}
                </>
              )}
             />
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 275,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,


        padding:10,
        marginVertical: 5,
        paddingLeft: 20,
        
    },
    input: {},
});
export default CustomInput
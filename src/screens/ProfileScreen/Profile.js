import React from 'react'
import {View, Text} from 'react-native'
import {Auth} from 'aws-amplify'

const Porfile = () => {
    const signOut = () => {
        Auth.signOut();
    };

    return (
        <View>
<Text style={{ fontSize: 24, alignSelf:'center', top:100}}>Profile settings</Text>

<Text
    style={{ fontSize: 24, alignSelf:'center', color: 'red', top:150}}// Reik pagrąžint
    onPress={signOut}
> Sign Out </Text>
        </View>

    )
}

export default Porfile
import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import StatisticsScreen from '../StatisticScreen/Statistic';
import AddFoodScreen from '../AddFoodScreen/AddFood';
import ProfileScreen from '../ProfileScreen/Profile';
import HomeScreen from '../HomeScreen/HomePage';


const index = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
             screenOptions={({route}) =>({
                tabBarIcon: ({focused, size, color}) => {
                    let iconName;
                    if(route.name === 'Home'){
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    } else if(route.name === 'Statistics') {
                        iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                    }else if(route.name === 'Add') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }else if(route.name === 'Profile') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return <Ionic name={iconName} size={size} color={color} />;
                },
             })}
             tabBarOptions={{
                activeTintColor: '#FCA13A',
                inactiveTintColor: '#818181',
                style: {
                    backgroundColor: '#f9f9f9',
                    
                },
             }}
             >
                <Tab.Screen name= "Home" component={HomeScreen}/>
                <Tab.Screen name="Statistics" component={StatisticsScreen}/>
                <Tab.Screen name="Add" component={AddFoodScreen}/>
                <Tab.Screen name="Profile" component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
};
export default index
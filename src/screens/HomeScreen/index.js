import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import StatisticsScreen from '../StatisticScreen/Statistic';
import AddFoodScreen from '../AddFoodScreen/AddFood';
import ProfileScreen from '../ProfileScreen/Profile';
import HomeScreen from '../HomeScreen/HomePage';
import { useRoute } from '@react-navigation/native';

const index = () => {
    const Tab = createBottomTabNavigator();
    const route = useRoute();
   
    return (
        
        <NavigationContainer independent={true} >
            <Tab.Navigator
            initialRouteName='Home'
             screenOptions={({route}) =>({
                headerShown: false,
                tabBarIcon: ({focused, size, color, display}) => {
                    let iconName;
                    if(route.name === 'Home'){
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    } else if(route.name === 'Statistics') {
                        iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                    }else if(route.name === 'Add') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                        display: "none";
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
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Statistics" component={StatisticsScreen}/>
                <Tab.Screen name="Add" component={AddFoodScreen}/>
                <Tab.Screen name="Profile" component={ProfileScreen}/>
            </Tab.Navigator>
            
             
        </NavigationContainer>
    )
};

export default index
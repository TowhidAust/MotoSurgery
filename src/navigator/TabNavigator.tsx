/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Signup from '../screens/Auth/Signup';
import Login from '../screens/Auth/Login';
import HomeStackScreen from './stackScreens/Home/HomeStackScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'home';
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Login') {
            iconName = focused ? 'person' : 'person';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        // tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontFamily: 'Telenor-Regular',
          fontSize: 12,
        },

        tabBarStyle: {
          paddingTop: 8,
          paddingBottom: 8,
          height: 55,
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
    </Tab.Navigator>
  );
}

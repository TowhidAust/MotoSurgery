import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Signup from '../screens/Auth/Signup';
import Login from '../screens/Auth/Login';
import Home from '../screens/Home/Home';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
    </Tab.Navigator>
  );
}

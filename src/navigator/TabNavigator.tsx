/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Signup from '@/src/screens/Auth/Signup';
import Login from '@/src/screens/Auth/Login';
import HomeStackScreen from '@/src/navigator/stackScreens/Home/HomeStackScreen';
import {globalStyles} from '../styles';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
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
        tabBarLabelStyle: [globalStyles.fontFamilyRegular, styles.tabLabelText],

        tabBarStyle: {
          paddingTop: 8,
          paddingBottom: 8,
          height: 60,
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabLabelText: {
    fontSize: 16,
  },
});

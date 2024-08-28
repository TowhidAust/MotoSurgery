import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../../screens/Home/Home';
import Login from '../../../screens/Auth/Login';
import Signup from '../../../screens/Auth/Signup';
const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Signup" component={Signup} />
    </HomeStack.Navigator>
  );
}

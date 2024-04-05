import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../screens/Auth/Signup';
import Login from '../screens/Auth/Login';
import Home from '../screens/Home/Home';
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Auth" component={Login} options={{title: 'Auth'}} />
      <Stack.Screen name="Profile" component={Signup} />
    </Stack.Navigator>
  );
}

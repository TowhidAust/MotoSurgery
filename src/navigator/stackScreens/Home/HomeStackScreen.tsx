import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Package from '@/src/screens/Package/Package';
import Home from '@/src/screens/Home/Home';
import Login from '@/src/screens/Auth/Login';
import Signup from '@/src/screens/Auth/Signup';
import {globalStyles} from '@/src/styles';
const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitleStyle: globalStyles.fontFamilyRegular,
        }}
      />
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Signup" component={Signup} />
      <HomeStack.Screen
        name="Package"
        component={Package}
        options={{
          headerTitleStyle: globalStyles.fontFamilyRegular,
        }}
      />
    </HomeStack.Navigator>
  );
}

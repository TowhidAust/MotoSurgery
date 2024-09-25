import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@/src/screens/Home/Home';

import {globalStyles} from '@/src/styles';
import PackageDetails from '@/src/screens/PackageDetails/PackageDetails';
const HomeStack = createNativeStackNavigator();
export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: true,
          headerTitleStyle: globalStyles.fontFamilyRegular,
          title: 'Home',
        }}
      />
      <HomeStack.Screen
        name="PackageDetails"
        component={PackageDetails as any}
        options={{
          headerTitleStyle: globalStyles.fontFamilyRegular,
        }}
      />
    </HomeStack.Navigator>
  );
}

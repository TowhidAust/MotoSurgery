import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@/src/screens/Home/Home';
import {globalStyles} from '@/src/styles';
import PackageDetails from '@/src/screens/PackageDetails/PackageDetails';
import type {HomeStackParamList} from '@/src/types';
import Booking from '@/src/screens/Booking/Booking';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
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
        component={PackageDetails}
        options={{
          headerTitleStyle: globalStyles.fontFamilyRegular,
        }}
      />
      <HomeStack.Screen name="Booking" component={Booking} />
    </HomeStack.Navigator>
  );
}

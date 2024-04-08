/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import TabNavigator from './src/navigator/TabNavigator';

function App(): React.JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <StackNavigator />}
    </NavigationContainer>
  );
}

export default App;

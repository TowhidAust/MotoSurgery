/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './global.css';
import {GluestackUIProvider} from '@/components/ui/gluestack-ui-provider';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigator/TabNavigator';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider mode="light">
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigator/TabNavigator';
import {
  configureFonts,
  MD3LightTheme,
  MD3Theme,
  PaperProvider,
} from 'react-native-paper';
const fontConfig = {
  fontFamily: 'Telenor-Regular',
  headlineSmall: {
    fontSize: 25,
  },
};
const theme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
  fonts: configureFonts({config: fontConfig}),
};

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

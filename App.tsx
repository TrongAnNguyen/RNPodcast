import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/constants/theme';
import MainNavigation from './src/navigations/MainNavigation';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainNavigation />
    </ThemeProvider>
  );
};

export default App;

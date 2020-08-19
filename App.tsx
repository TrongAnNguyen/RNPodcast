import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme, {Box, Text} from './src/constants/theme';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} backgroundColor="cardPrimaryBackground">
        <Text>Hello</Text>
      </Box>
    </ThemeProvider>
  );
};

export default App;

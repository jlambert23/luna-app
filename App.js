import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { colors, ThemeProvider, Header } from 'react-native-elements';

import DogListComponent from './components/DogList';

const theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
    }),
  },
  Header: {
    leftComponent: {
      color: '#fff',
    },
    centerComponent: {
      style: {
        color: '#fff',
      },
    },
  },
}

export default function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Header 
        leftComponent={{ icon: 'menu' }}
        centerComponent={{ text: 'Luna' }}
      />
      <DogListComponent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

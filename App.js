import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Button, colors, ThemeProvider } from 'react-native-elements';

const theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
    }),
  },
  Button: {
    containerStyle: {
      marginTop: 80,
      marginBottom: 10,
    }
  }
}

export default function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Button title="Hello"/>
      <Button title="World!" titleStyle={{ color: 'pink' }} />
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

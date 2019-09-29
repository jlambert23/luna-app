import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './components/Home';
import DetailsScreen from './components/PetDetail';
import Theme from './style/theme';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <ThemeProvider theme = {Theme}>
      <AppContainer />
    </ThemeProvider>
  );
}
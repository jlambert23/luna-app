import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { menuProvider } from './components/PopupMenu';
import MainScreen from './components/Main';
import DetailsScreen from './components/Details';

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: 'Luna',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);
const MenuContainer = menuProvider(AppContainer);
export default () => <MenuContainer />;

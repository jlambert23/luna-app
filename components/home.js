import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

import ListComponent from './list';


export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Header 
          leftComponent={{ icon: 'menu' }}
          centerComponent={{ text: 'Luna' }}
          rightComponent={{ icon: 'add' }}
        />
        <ListComponent navigation={this.props.navigation}/>
      </View>
    );
  }
}

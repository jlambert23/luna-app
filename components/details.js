import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';


export default class Details extends React.Component { 
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    const { navigation } = this.props;
    const pet = navigation.getParam('pet', undefined);

    return (
      <View>
        <Text>Details screen</Text>
        <Text>Name: {pet.name}</Text>
        <Text>Last poop: {pet.last_poop.toLocaleString()}</Text>
      </View>
    );
  }
}

import React from 'react';
import Moment from 'moment';
import { View } from 'react-native';
import { Text } from 'react-native-elements';


export default class Details extends React.Component { 
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    const { navigation } = this.props;
    const pet = navigation.getParam('pet', undefined);
    const date = Moment(pet.last_poop).format('ddd MMM Do YYYY, h:m A');

    return (
      <View>
        <Text>Details screen</Text>
        <Text>Name: {pet.name}</Text>
        <Text>Last poop: {date}</Text>
      </View>
    );
  }
}

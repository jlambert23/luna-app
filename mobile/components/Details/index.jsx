import React from 'react';
import Moment from 'moment';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

const navigationOptions = {
  title: 'Details',
};

export default Details = (props) => { 
  const pet = props.navigation.getParam('pet', undefined);

  return (
    <View>
      <Text>Details screen</Text>
      <Text>Name: {pet.name}</Text>
      <Text>Last poop: {pet.lastPoop.toString()}</Text>
    </View>
  );
}
Details.navigationOptions = navigationOptions;

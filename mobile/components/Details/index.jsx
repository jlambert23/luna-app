import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';

const navigationOptions = {
  title: 'Details',
};

const Details = ({ navigation }) => {
  const pet = navigation.getParam('pet', undefined);

  return (
    <View>
      <Text>Details screen</Text>
      <Text>
        Name:
        {pet.name}
      </Text>
      <Text>
        Last poop:
        {pet.lastPoop.toString()}
      </Text>
    </View>
  );
};
Details.navigationOptions = navigationOptions;

Details.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default Details;

import React from 'react';
import { ScrollView, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

import moment from 'moment';
import PropTypes from 'prop-types';

const navigationOptions = {
  title: 'Details',
};

const Details = ({ navigation }) => {
  const pet = navigation.getParam('pet');
  const poops = [...pet.poops].reverse();

  if (poops && poops.length) {
    return (
      <ScrollView>
        {poops.map(poop => (
          <ListItem key={poop} title={moment(poop).format('h:mm A, ddd MMMM D')} bottomDivider />
        ))}
      </ScrollView>
    );
  }

  return <Text>And no poops were found on that day...</Text>;
};
Details.navigationOptions = navigationOptions;

Details.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default Details;

import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import moment from 'moment';
import PropTypes from 'prop-types';

import Styles from './styles';

const navigationOptions = {
  title: 'Details',
};

const Details = ({ navigation }) => {
  const pet = navigation.getParam('pet');
  const poops = [...pet.poops].reverse();

  return poops && poops.length ? (
    <ScrollView>
      {getDates(poops).map(({ date, times }) => [
        <ListItem
          key={date}
          containerStyle={Styles.dayContainer}
          title={date}
          titleStyle={Styles.dayTitle}
        />,
        ...times.map(({ key, time }) => (
          <ListItem
            key={key}
            containerStyle={Styles.timeContainer}
            title={time}
            titleStyle={Styles.timeTitle}
            bottomDivider
          />
        )),
      ])}
    </ScrollView>
  ) : (
    <View style={Styles.grimaceContainer}>
      <Icon name="grimace" style={Styles.grimaceIcon} />
      <Text style={Styles.grimaceHeader}>Nothing to see here.</Text>
    </View>
  );
};

const getDates = poops => {
  const dates = poops.map(poop => moment(poop));
  dates.sort((a, b) => b - a);

  const map = dates.reduce((acc, curr) => {
    const key = curr.format('MMMM D, YYYY');
    (acc[key] = acc[key] || []).push({
      key: curr.format('x'),
      time: curr.format('h:mm A'),
    });
    return acc;
  }, {});

  const retVal = Object.keys(map).map(date => ({
    date,
    times: map[date],
  }));
  retVal.sort();

  return retVal;
};

Details.navigationOptions = navigationOptions;

Details.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default Details;

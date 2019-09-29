import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import PetList from './PetList';

export default class Home extends React.Component {

  static navigationOptions = ({navigation}) => {
    return ({
      title: 'Luna',
      headerRight: (
        <Icon name='add' color='#fff' onPress={() => alert('Hello world!')} />
      ),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRightContainerStyle: {
        paddingRight: 15,
      }
    });
  };

  render() {
    return (
      <View>
        <PetList navigation={this.props.navigation}/>
      </View>
    );
  }
}

import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import PetList from './PetList';
import AddPetOverlay from './AddPetOverlay';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.petList = React.createRef();
  }
  
  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;

    return ({
      title: 'Luna',
      headerRight: (
        <Icon name='add' color='#fff' onPress={() => params.openOverlay() } />
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

  updatePets = (pet) => {
    this.petList.current.addPet(pet);
  }

  render() {
    return (
      <View>
        <AddPetOverlay navigation={this.props.navigation} updatePets={this.updatePets}></AddPetOverlay>
        <PetList navigation={this.props.navigation} ref={this.petList}/>
      </View>
    );
  }
}

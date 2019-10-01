import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements'

import { getPets } from '../../services/pets'

export default class PetList extends Component {
  constructor() {
    super();
    this.state = { pets: [] }
  }

  componentDidMount() {
    getPets()
      .then(pets => { this.setState({ pets: pets }); })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <View>
      {
       this.state.pets.map((pet) => (
        <ListItem 
          key={pet.id}
          title={pet.name}
          subtitle={pet.last_poop.toString()}
          bottomDivider
          onPress={() => this.props.navigation.navigate('Details', { pet: pet })}
        />
       ))
      }
      </View>
    )
  }
}

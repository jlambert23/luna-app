import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Luna',
    last_poop: new Date(),
  },
  {
    name: 'Koko',
    last_poop: new Date(),
  },
]

export default class DogList extends Component {
  render() {
    return (
      <View>
      {
       list.map((l, i) => (
        <ListItem 
          key={i}
          title={l.name}
          subtitle={l.last_poop.toString()}
          bottomDivider
        />
       ))
      }
      </View>
    )
  }
}

import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements'

const list = [
  {
    id: 1,
    name: 'Luna',
    last_poop: new Date(),
  },
  {
    id: 2,
    name: 'Koko',
    last_poop: new Date(),
  },
]

export default class ListComponent extends Component {
  render() {
    return (
      <View>
      {
       list.map((l) => (
        <ListItem 
          key={l.id}
          title={l.name}
          subtitle={l.last_poop.toString()}
          bottomDivider
          onPress={() => this.props.navigation.navigate('Details', { pet: l })}
        />
       ))
      }
      </View>
    )
  }
}

import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'

import Styles from './styles';


export default AddPetOverlay = (props) => {
  [petName, setPetName] = useState('');

  return (
    <View>
      <Text h4 style={Styles.header}>Add Pet</Text>
      <Input
        label='Name'
        placeholder='Luna'
        onChangeText={setPetName}
      />
      <Button title='Add Pet' buttonStyle={Styles.button} disabled={!petName} onPress={() => props.addPet(petName)}></Button>
    </View>
  )
}

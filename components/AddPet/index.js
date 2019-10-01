import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Divider, Input, Text } from 'react-native-elements'

import Styles from './styles';


export default AddPetOverlay = (props) => {
  [petName, setPetName] = useState('');

  return (
    <View style={Styles.container}>
      <Text h4 style={Styles.header}>Add Pet</Text>
      <Divider></Divider>
      <Input
        label='Name'
        placeholder='Luna'
        inputStyle={Styles.input}
        errorStyle={Styles.inputError}
        errorMessage={}
        onChangeText={setPetName}
      />
      <Button title='Add Pet' onPress={props.addPet(petName)}></Button>
    </View>
  )
}

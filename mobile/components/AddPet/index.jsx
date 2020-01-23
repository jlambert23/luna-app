import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import PropTypes from 'prop-types';

import Styles from './styles';

const AddPetOverlay = ({ addPet }) => {
  const [petName, setPetName] = useState('');

  return (
    <View>
      <Text h4 style={Styles.header}>
        Add Pet
      </Text>
      <Input label="Name" placeholder="Luna" onChangeText={setPetName} />
      <Button
        title="Add Pet"
        buttonStyle={Styles.button}
        disabled={!petName}
        onPress={() => addPet(petName)}
      />
    </View>
  );
};

AddPetOverlay.propTypes = {
  addPet: PropTypes.func.isRequired,
};

export default AddPetOverlay;

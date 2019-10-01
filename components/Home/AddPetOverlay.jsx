import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Divider, Input, Overlay, Text } from 'react-native-elements'

import { addPet } from '../../services/pets'

export default class AddPetOverlay extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.state = { isVisible: false, petName: '', error: '' };
  }

  componentDidMount() {
    this.props.navigation.setParams({ openOverlay: this.openOverlay });
  }

  openOverlay = () => {
    this.setState({ isVisible: true });
  }

  setPetName = (name) => {
    this.setState({ petName: name });
  }

  submit = () => {
    if (this.state.petName) {
      addPet(this.state.petName)
        .then(res => {
          this.props.updatePets(res);
          this.setState({ isVisible: false });
        })
        .catch(err => {
          console.error(err);
          this.setState({ error: err });
        });
    } else {
      this.setState({ error: 'Name is required.' })
    }
  } 

  render() {
    return (
      <Overlay
        isVisible={this.state.isVisible}
        windowBackgroundColor='rgba(255, 255, 255, .5)'
        width='80%'
        height='60%'
        onBackdropPress={() => this.setState({ isVisible: false })}
      >
        <View style={styles.container}>
          <Text h4 style={styles.header}>Add Pet</Text>
          <Divider></Divider>
          <Input
            label='Name'
            placeholder='Luna'
            inputStyle={styles.input}
            errorStyle={{ color: 'red' }}
            errorMessage={this.state.error}
            onChangeText={this.setPetName.bind(this)}
          />
          <Button title='Add Pet' onPress={() => this.submit() }></Button>
        </View>
      </Overlay>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  header: {
    color: '#fff',
    backgroundColor: '#f4511e',
    margin: 0
  },
  input: {
    width: 100,
    color: 'red'
  },
  button: {
    width: '100px',
  }
});

import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { ListItem, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Styles from './styles';
import AddPetComponent from '../AddPet';
import { createPet, getPets, updatePet, deletePet } from '../../services/pets'


const navigationOptions = ({navigation}) => {
  const { params = {} } = navigation.state;

  return ({
    headerRight: <Icon name='plus' style={Styles.addPetIcon} onPress={() => params.openOverlay() } />,
    headerRightContainerStyle: Styles.headerRight,
  })
}

export default Main = (props) => {
  [isOverlayVisible, setIsOverlayVisible] = useState(false);
  [petList, setPetList] = useState([]);

  useEffect(() => {
    props.navigation.setParams({ openOverlay: () => setIsOverlayVisible(true) });
  }, [])

  useEffect(() => {
    _getPets();
  }, [])

  const _getPets = async () => {
    try {
      const pets = await getPets();
      setPetList(pets);
    }
    catch (error) {
      console.error(error);
    }
  }

  const _createPet = async (petName) => {
    try {
      const pet = await createPet(petName);
      setPetList([...petList, pet]);
      setIsOverlayVisible(false);
    }
    catch(error) {
      console.error(error);
    }
  }

  const confirmUpdate = (pet) => {
    Alert.alert('💩 Woo!!', `Update ${pet.name}'s last poop?`, [
      { text: 'Nope' },
      { text: 'Yeah', onPress: () => updateLastPoop(pet._id) }
    ])
  }

  const updateLastPoop = async (petId) => {
    try {
      const pet = await updatePet({ _id: petId, lastPoop: new Date() });
      setPetList(petList.map(p => p._id === pet._id ? pet : p));
    } catch (error) {
      console.error(error);
    }
  }

  const confirmDelete = (pet) => {
    Alert.alert('Confirm Delete', `Are you sure you want to delete ${pet.name}?`, [
      { text: 'Cancel' },
      { text: 'OK', onPress: () => _deletePet(pet._id) }
    ])
  }

  const _deletePet = async (petId) => {
    try {
      await deletePet(petId);
      setPetList(petList.filter(p => p._id !== petId));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>  
      <Overlay
        isVisible={isOverlayVisible}
        overlayStyle = {Styles.overlay}
        onBackdropPress={() => setIsOverlayVisible(false)}
      >
        <AddPetComponent addPet={_createPet}></AddPetComponent>
      </Overlay>
      {
        petList.map((pet) => (
          <ListItem 
            key={pet._id}
            title={pet.name}
            subtitle={pet.lastPoop.toString()}
            rightIcon={
              <Icon
                name='ellipsis-h'
                style={Styles.moreIcon}
                onPress={() => confirmDelete(pet)}
              />
            }
            bottomDivider
            onPress={() => confirmUpdate(pet)}
            // onPress={() => props.navigation.navigate('Details', { pet: pet })}
          />
        ))
      }
    </View>
  )
}
Main.navigationOptions = navigationOptions;

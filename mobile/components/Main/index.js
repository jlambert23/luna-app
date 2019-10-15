import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ListItem, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Styles from './styles';
import AddPetComponent from '../AddPet';
import { createPet, getPets, deletePet } from '../../services/pets'


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
                onPress={() => _deletePet(pet._id)}
              />
            }
            bottomDivider
            onPress={() => props.navigation.navigate('Details', { pet: pet })}
          />
        ))
      }
    </View>
  )
}
Main.navigationOptions = navigationOptions;

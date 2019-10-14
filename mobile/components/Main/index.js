import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ListItem, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Styles from './styles';
import AddPetComponent from '../AddPet';
import { createPet, getPets } from '../../services/pets'


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
    getPetList();
  }, [])

  const getPetList = async () => {
    try {
      const pets = await getPets();
      setPetList(pets);
    }
    catch (error) {
      console.error(error);
    }
  }

  const addPetToList = async (petName) => {
    try {
      const pet = await createPet(petName);
      setPetList([...petList, pet]);
      setIsOverlayVisible(false);
    }
    catch(error) {
      console.error(error);
    }
  }

  const updatePoop = (petId) => {
    setPetList(petList.map(p => {
      if (p.id === petId) p.lastPoop = new Date();
      return p;
    }));
  }

  return (
    <View>  
      <Overlay
        isVisible={isOverlayVisible}
        overlayStyle = {Styles.overlay}
        onBackdropPress={() => setIsOverlayVisible(false)}
      >
        <AddPetComponent addPet={addPetToList}></AddPetComponent>
      </Overlay>
      {
        petList.map((pet) => (
          <ListItem 
            key={pet._id}
            title={pet.name}
            subtitle={pet.lastPoop.toString()}
            rightIcon={
              <Icon
                name='poo'
                style={Styles.addPooIcon}
                onPress={() => updatePoop(pet._id)}
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

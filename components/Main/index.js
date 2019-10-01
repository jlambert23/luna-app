import React, { useState } from 'react';
import { View } from 'react-native';
import { Icon, ListItem, Overlay } from 'react-native-elements';

import Styles from './styles';
import AddPetComponent from '../AddPet';
import { createPet, getPets } from '../../services/pets'


Main.navigationOptions = ({navigation}) => {
  const { params = {} } = navigation.state;

  return ({
    headerRight: <Icon name='add' iconStyle={Styles.addIcon} onPress={() => params.openOverlay() } />,
    headerRightContainerStyle: Styles.headerRight,
  })
}

export default Main = (props) => {
  [isOverlayVisible, setIsOverlayVisible] = useState(false);
  [petList, setPetList] = useState([]);

  useEffect(() => {
    props.navigation.setParams({ openOverlay: setIsOverlayVisible(true) });
  }, [])

  useEffect(() => {
    try {
      const pets = await getPets();
      setPetList(pets);
    }
    catch (error) {
      console.error(error);
    }
  }, [])

  const addPetToList = async (petName) => {
    try {
      const pet = await createPet(petName);
      setPetList([...petList, pet]);
    }
    catch(error) {
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
        <AddPetComponent addPet={addPetToList}></AddPetComponent>
      </Overlay>
      {
        petList.map((pet) => (
          <ListItem 
            key={pet.id}
            title={pet.name}
            subtitle={pet.last_poop.toString()}
            bottomDivider
            onPress={() => props.navigation.navigate('Details', { pet: pet })}
          />
        ))
      }
    </View>
  )
}

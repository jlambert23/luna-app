import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { ListItem, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import moment from 'moment';

import Styles from './styles';
import AddPetComponent from '../AddPet';
import PopupMenu from '../PopupMenu';
import { addNewPoop, createPet, getPets, deletePet } from '../../services/pets';

const navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <Icon name="plus" style={Styles.addPetIcon} onPress={navigation.getParam('openOverlay')} />
  ),
  headerRightContainerStyle: Styles.headerRight,
});

const Main = ({ navigation }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    if (!navigation.getParam('openOverlay')) {
      navigation.setParams({ openOverlay: () => setIsOverlayVisible(true) });
    }
  }, [navigation]);

  useEffect(() => {
    _getPets();
  }, []);

  const _getPets = async () => {
    try {
      const pets = await getPets();
      setPetList(pets);
    } catch (error) {
      console.error(error);
    }
  };

  const _createPet = async petName => {
    try {
      const pet = await createPet(petName);
      setPetList([...petList, pet]);
      setIsOverlayVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  const _deletePet = async petId => {
    try {
      await deletePet(petId);
      setPetList(petList.filter(p => p._id !== petId));
    } catch (error) {
      console.error(error);
    }
  };

  const updateLastPoop = async petId => {
    try {
      const pet = await addNewPoop(petId);
      setPetList(petList.map(p => (p._id === pet._id ? pet : p)));
    } catch (error) {
      console.error(error);
    }
  };

  const confirmDelete = pet => {
    Alert.alert('Confirm Delete', `Are you sure you want to delete ${pet.name}?`, [
      { text: 'Cancel' },
      { text: 'OK', onPress: () => _deletePet(pet._id) },
    ]);
  };

  const confirmUpdate = pet => {
    Alert.alert('💩 Woo!!', `Update ${pet.name}'s last poop?`, [
      { text: 'Nope' },
      { text: 'Yeah', onPress: () => updateLastPoop(pet._id) },
    ]);
  };

  const makeOptions = pet => [
    {
      callback: () => navigation.navigate('Details', { pet }),
      text: 'View History',
    },
    {
      callback: () => confirmDelete(pet),
      style: Styles.delete,
      text: 'Delete',
    },
  ];

  const getSubtitle = pet => {
    if (pet.poops && pet.poops.length) {
      const lastPoop = pet.poops.slice(-1)[0];
      return moment(lastPoop).format('h:mm A, ddd MMMM D');
    }
    return `Tap to record ${pet.name}'s first poop 💩!`;
  };

  return (
    <View>
      <Overlay
        isVisible={isOverlayVisible}
        overlayStyle={Styles.overlay}
        onBackdropPress={() => setIsOverlayVisible(false)}
      >
        <AddPetComponent addPet={_createPet} />
      </Overlay>
      <ScrollView>
        {petList.map(pet => (
          <ListItem
            key={pet._id}
            title={pet.name}
            subtitle={getSubtitle(pet)}
            rightIcon={<PopupMenu options={makeOptions(pet)} />}
            bottomDivider
            onPress={() => confirmUpdate(pet)}
            onLongPress={() => navigation.navigate('Details', { pet })}
            delayLongPress={1000}
          />
        ))}
      </ScrollView>
    </View>
  );
};
Main.navigationOptions = navigationOptions;

Main.propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Main;

import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MenuProvider, Menu, MenuTrigger, MenuOption, MenuOptions } from 'react-native-popup-menu';
import { PropTypes } from 'prop-types';

import Styles from './styles';

export const menuProvider = WrappedComponent => () => (
  <MenuProvider>
    <WrappedComponent />
  </MenuProvider>
);

const PopupMenu = ({ options }) => (
  <Menu onSelect={callback => (callback ? callback() : null)}>
    <MenuTrigger>
      <Icon name="ellipsis-h" style={Styles.icon} />
    </MenuTrigger>
    <MenuOptions>
      {options.map(option => (
        <MenuOption key={option.text} value={option.callback}>
          <Text style={option.style}>{option.text}</Text>
        </MenuOption>
      ))}
    </MenuOptions>
  </Menu>
);

PopupMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      callback: PropTypes.func,
      style: PropTypes.object,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default PopupMenu;

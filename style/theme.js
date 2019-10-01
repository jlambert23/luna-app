import { Platform } from 'react-native';
import { colors } from 'react-native-elements';

export default theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
    }),
  },
  Header: {
    leftComponent: {
      color: '#fff',
    },
    centerComponent: {
      style: {
        color: '#fff',
      },
    },
    rightComponent: {
      color: '#fff',
    }
  },
}
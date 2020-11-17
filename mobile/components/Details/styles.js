import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  dayContainer: {
    paddingVertical: 8,
    backgroundColor: '#F5F5F5',
  },
  dayTitle: {
    fontSize: 18,
  },
  timeContainer: {
    paddingVertical: 4,
    borderLeftWidth: 6,
    borderStartColor: '#E16E7A',
  },
  timeTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
  },
  grimaceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  grimaceHeader: {
    fontSize: 30,
    color: '#E16E7A',
    margin: 25,
  },
  grimaceIcon: {
    marginTop: 128,
    color: '#E16E7A',
    fontSize: 128,
  },
});

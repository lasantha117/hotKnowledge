import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBarContainer: {
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#242933',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
  },
  tabBarIcon: {
    fontSize: 24,
    color: '#fff',
  },
  tabBarActive: {
    borderTopWidth: 2,
    borderTopColor: '#fff',
  },
});

export default styles;

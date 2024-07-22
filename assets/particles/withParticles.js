import React from 'react';
import { View, StyleSheet } from 'react-native';
import DashboardParticlesComponent from './dashboardParticle';

const withParticles = (Component) => (props) => {
  return (
    <View style={styles.container}>
      <DashboardParticlesComponent id={`${props.route.name}-particles`} />
      <Component {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  particles: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
});

export default withParticles;

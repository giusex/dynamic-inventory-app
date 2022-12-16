import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Card = props => {
  if (width < 600) {
    return (
      <View
        style={[
          styles.card,
          styles.minDimension,
          props.active == true ? styles.activeCard : null,
        ]}>
        <View style={styles.button}>
          <View
            style={[
              styles.icon,
              styles.minIconSize,
              props.active == true
                ? { backgroundColor: 'rgba(255, 96, 62, 0.2)' }
                : { backgroundColor: 'rgba(255, 206, 79, 0.2)' },
            ]}>
            <Text
              style={
                props.active == true
                  ? { color: '#FF603E' }
                  : { color: '#FFCE4F' }
              }>
              {props.icon}
            </Text>
          </View>

          <View style={styles.containerTitle}>
            <Text
              style={[
                styles.minTitleSize,
                props.active == true
                  ? { color: '#FF603E' }
                  : { color: '#676D81' },
              ]}>
              {props.title}
            </Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={[
          styles.card,
          styles.maxDimension,
          props.active == true ? styles.activeCard : null,
        ]}>
        <View style={styles.button}>
          <View
            style={[
              styles.icon,
              styles.maxIconSize,
              props.active == true
                ? { backgroundColor: 'rgba(255, 96, 62, 0.2)' }
                : { backgroundColor: 'rgba(255, 206, 79, 0.2)' },
            ]}>
            <Text
              style={
                props.active == true
                  ? { color: '#FF603E' }
                  : { color: '#FFCE4F' }
              }>
              {props.icon}
            </Text>
          </View>

          <View style={styles.containerTitle}>
            <Text
              style={[
                styles.maxTitleSize,
                props.active == true
                  ? { color: '#FF603E' }
                  : { color: '#676D81' },
              ]}>
              {props.title}
            </Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  minDimension: {
    width: 110,
    height: 110,
  },
  maxDimension: {
    width: 180,
    height: 180,
  },

  card: {
    borderRadius: 10,
    backgroundColor: 'white',
    transform: [{ translateY: 20 }],
    margin: 8,
  },
  activeCard: {
    borderWidth: 2,
    borderColor: '#FF603E',
  },
  button: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  maxIconSize: {
    width: 73,
    height: 74,
  },
  minIconSize: {
    width: 50,
    height: 50,
  },
  icon: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerTitle: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  minTitleSize: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  maxTitleSize: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;

import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const State = props => {
  if (width < 600) {
    return (
      <>
        {props.state.toUpperCase() === 'DA FARE' ? (
          <View style={[styles.minStateSize, { backgroundColor: '#F5E6FE' }]}>
            <Text style={[styles.minStateTextSize, { color: '#642689' }]}>
              {props.state.toUpperCase()}
            </Text>
          </View>
        ) : null}
        {props.state.toUpperCase() === 'IN CORSO' ? (
          <View style={[styles.minStateSize, { backgroundColor: '#E3F8FA' }]}>
            <Text style={[styles.minStateTextSize, { color: '#26C6DA' }]}>
              {props.state.toUpperCase()}
            </Text>
          </View>
        ) : null}
        {props.state.toUpperCase() === 'COMPLETATO' ? (
          <View style={[styles.minStateSize, { backgroundColor: '#D8FFDC' }]}>
            <Text style={[styles.minStateTextSize, { color: '#26BA85' }]}>
              {props.state.toUpperCase()}
            </Text>
          </View>
        ) : null}
      </>
    );
  } else {
    return (
      <>
        {props.state.toUpperCase() === 'DA FARE' ? (
          <View style={[styles.maxStateSize, { backgroundColor: '#F5E6FE' }]}>
            <Text style={[styles.maxStateTextSize, { color: '#642689' }]}>
              {props.state.toUpperCase()}
            </Text>
          </View>
        ) : null}
        {props.state.toUpperCase() === 'IN CORSO' ? (
          <View style={[styles.maxStateSize, { backgroundColor: '#E3F8FA' }]}>
            <Text style={[styles.maxStateTextSize, { color: '#26C6DA' }]}>
              {props.state.toUpperCase()}
            </Text>
          </View>
        ) : null}
        {props.state.toUpperCase() == 'COMPLETATO' ? (
          <View style={[styles.maxStateSize, { backgroundColor: '#D8FFDC' }]}>
            <Text style={[styles.maxStateTextSize, { color: '#26BA85' }]}>
              {props.state.toUpperCase()}
            </Text>
          </View>
        ) : null}
      </>
    );
  }
};
const styles = StyleSheet.create({
  minStateSize: {
    padding: 10,
    borderRadius: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  maxStateSize: {
    padding: 10,
    borderRadius: 50,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  maxStateTextSize: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  minStateTextSize: {
    fontWeight: 'bold',
    fontSize: 11,
  },
});

export default State;

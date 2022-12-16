import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import State from './State.js';

const { width, height } = Dimensions.get('window');

const TicketButton = props => {
  if (width < 600) {
    return (
      <View style={[styles.button, styles.shadow]}>
        <View style={{ flex: 2 }}>
          <Text style={[styles.client, styles.minClientSize]}>
            {props.client}
          </Text>
          <Text style={[styles.address, styles.minAddressSize]}>
            {props.address}
          </Text>
        </View>
        <View style={[styles.row, { flex: 1 }]}>
          <State state={props.state} />
          <View style={{ marginLeft: 10 }}>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#FFCE4F" />
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={[styles.button, styles.shadow]}>
        <View style={{ flex: 3 }}>
          <Text style={[styles.client, styles.maxClientSize]}>
            {props.client}
          </Text>
          <Text style={[styles.address, styles.maxAddressSize]}>
            {props.address}
          </Text>
        </View>
        <View style={[styles.row, { flex: 1 }]}>
          <State state={props.state} />
          <View style={{ marginLeft: 30 }}>
            <MaterialIcons name="arrow-forward-ios" size={30} color="#FFCE4F" />
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  client: {
    fontWeight: 'bold',
    color: 'black',
  },
  minClientSize: {
    fontSize: 18,
  },
  maxClientSize: {
    fontSize: 22,
  },
  address: {
    marginTop: 4,
    color: '#676D81',
  },
  minAddressSize: {
    fontSize: 14,
  },
  maxAddressSize: {
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TicketButton;

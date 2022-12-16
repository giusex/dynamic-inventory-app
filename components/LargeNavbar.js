import React from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/MaterialIcons';
import State from './State.js';
import Map from './Map.js';

const { width, height } = Dimensions.get('window');

const LargeNavbar = props => {
  if (width < 600) {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={[styles.clientText, styles.minClientTextSize]}>
              {props.client}
            </Text>
            <Map
              address={props.address}
              color="#FFFFFF"
              backgroundColor="rgba(0, 0, 0, 0.05)"
              borderColor="rgba(0, 0, 0, 0.2)"
              iconColor="#FFFFFF"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={[styles.text, styles.minTextSize]}>
              {props.address}
            </Text>
            <View style={[styles.row, { justifyContent: 'flex-start' }]}>
              <FontAwesome name="phone" size={18} color="#FFFFFF" />
              <Text
                style={[styles.text, styles.minTextSize, { marginLeft: 10 }]}>
                {props.telephone}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginLeft: 20, transform: [{ translateY: -20 }] }}>
          <State state={props.state} />
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={[styles.clientText, styles.maxClientTextSize]}>
              {props.client}
            </Text>
            <Map
              address={props.address}
              color="#FFFFFF"
              backgroundColor="rgba(0, 0, 0, 0.05)"
              borderColor="rgba(0, 0, 0, 0.2)"
              iconColor="#FFFFFF"
            />
          </View>
          <View style={styles.row}>
            <Text style={[styles.text, styles.maxTextSize]}>
              {props.address}
            </Text>
            <View style={[styles.row, { marginTop: 10 }]}>
              <FontAwesome name="phone" size={18} color="#FFFFFF" />
              <Text
                style={[styles.text, styles.maxTextSize, { marginLeft: 10 }]}>
                {props.telephone}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginLeft: 20, transform: [{ translateY: -20 }] }}>
          <State state={props.state} />
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF603E',
    height: 134,
    paddingTop: 10,
    paddingLeft: 24,
    paddingRight: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  minTextSize: {
    fontSize: 14,
  },
  maxTextSize: {
    fontSize: 18,
  },
  text: {
    color: 'white',
  },
  minClientTextSize: {
    fontSize: 24,
  },
  maxClientTextSize: {
    fontSize: 28,
  },
  clientText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LargeNavbar;

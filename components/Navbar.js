import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Profile from '../images/navbar_profile.svg';

// props: title, icon, back
const Navbar = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-start', flex: 1 }}>
        {props.back == false ? (
          <View style={styles.row}>
            {props.icon}
            <Text style={{ ...styles.title, marginLeft: 10 }}>
              {props.title}
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.row}
            onPress={() => navigation.goBack()}>
            {props.icon}
            <Text style={{ ...styles.title, marginLeft: 10 }}>
              {props.title}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ alignItems: 'flex-end', flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={styles.row}>
            <Text style={styles.name}>Mario Rossi</Text>
            <Profile />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF603E',
    flexDirection: 'row',
    padding: 30,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 16,
  },
  back: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default Navbar;

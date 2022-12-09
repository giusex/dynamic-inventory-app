import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import openMap from 'react-native-open-maps';

const Map = props => {
  const goToDestination = () => {
    const end = props.address;
    const travelType = 'drive';
    props.modal
      ? openMap({
          query: `${props.latitude}, ${props.longitude}`,
        })
      : openMap({ travelType, end, provider: 'google' });
  };

  return (
    <TouchableOpacity onPress={() => goToDestination()}>
      <View
        style={[
          styles.container,
          props.modal
            ? { borderColor: '#FF603E', backgroundColor: '#FFFFFF' }
            : null,
        ]}>
        <MaterialIcons
          name="directions"
          size={20}
          {...(props.modal ? { color: '#FF603E' } : { color: '#FFFFFF' })}
        />
        <Text style={[styles.text, props.modal ? { color: '#FF603E' } : null]}>
          Indicazioni
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    marginLeft: 15,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Map;

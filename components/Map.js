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
        style={{
          ...styles.container,
          backgroundColor: props.backgroundColor,
          borderColor: props.borderColor,
        }}>
        <MaterialIcons
          name="directions"
          size={20}
          style={{ color: props.iconColor }}
        />
        <Text style={{...styles.text, color: props.color}}>Indicazioni</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Map;

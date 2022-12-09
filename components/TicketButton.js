import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import State from "./State.js";

const TicketButton = (props) => {
  return (
    <>
      <View style={[styles.button, styles.shadow]}>
        <View>
          <Text style={styles.client}>{props.client}</Text>
          <Text style={{ ...styles.address, marginTop: 4 }}>
            {props.address}
          </Text>
        </View>
        <View style={styles.row}>
          <State state={props.state} />
          <View style={{ marginLeft: 30 }}>
            <MaterialIcons name="arrow-forward-ios" size={30} color="#FFCE4F" />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  client: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  address: {
    fontSize: 18,
    color: "#676D81",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  shadow:{
  }
});

export default TicketButton;

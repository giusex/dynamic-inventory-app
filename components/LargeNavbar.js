import React from "react";
import { Text, StyleSheet, View } from "react-native";
import FontAwesome from 'react-native-vector-icons/MaterialIcons';
import State from "./State.js";
import Map from "./Map.js";

const LargeNavbar = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.clientText}>{props.client}</Text>
          <Map address={props.address}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{props.address}</Text>
          <View style={[styles.row, { marginTop: 10 }]}>
            <FontAwesome name="phone" size={18} color="#FFFFFF" />
            <Text style={[styles.text, { marginLeft: 10 }]}>
              {props.telephone}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ transform: [{ translateY: -20 }] }}>
        <State state={props.state} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF603E",
    height: 134,
    paddingTop: 10,
    paddingLeft: 24,
    paddingRight: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableOne: {},
  tableTwo: {},
  text: {
    fontSize: 18,
    color: "white",
  },
  clientText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
});

export default LargeNavbar;

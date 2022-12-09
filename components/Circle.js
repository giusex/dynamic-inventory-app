import React from "react";
import { StyleSheet, View } from "react-native";

const Circle = () => {
  return (
    <>
      <View style={styles.row}>
        <View style={{ ...styles.circle, marginLeft: 9 }}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={{ ...styles.circle, marginRight: 9 }}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    backgroundColor: "#D9D9D9",
    width: 6,
    height: 6,
    borderRadius: 100,
    margin: 2,
  },
});
export default Circle;

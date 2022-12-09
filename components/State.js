import React from "react";
import { Text, View , StyleSheet} from "react-native";

const State = (props) => {
  return (
    <>
      {props.state.toUpperCase() == "DA FARE" && (
        <View style={[styles.state, { backgroundColor: "#F5E6FE" }]}>
          <Text style={[styles.stateText, { color: "#642689" }]}>
            {props.state.toUpperCase()}
          </Text>
        </View>
      )}
      {props.state.toUpperCase() == "IN CORSO" && (
        <View style={[styles.state, { backgroundColor: "#E3F8FA" }]}>
          <Text style={[styles.stateText, { color: "#26C6DA" }]}>
            {props.state.toUpperCase()}
          </Text>
        </View>
      )}
      {props.state.toUpperCase() == "COMPLETATO" && (
        <View style={[styles.state, { backgroundColor: "#D8FFDC" }]}>
          <Text style={[styles.stateText, { color: "#26BA85" }]}>
            {props.state.toUpperCase()}
          </Text>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  state: {
    padding: 10,
    marginLeft: 20,
    borderRadius: 100,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  stateText: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default State;

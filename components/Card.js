import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Card = (props) => {
  return (
      <View
        style={[styles.card, props.active == true ? styles.activeCard : null]}
      >
        <View style={styles.button}>
          <View
            style={[
              styles.icon,
              props.active == true
                ? { backgroundColor: "rgba(255, 96, 62, 0.2)" }
                : { backgroundColor: "rgba(255, 206, 79, 0.2)" },
            ]}
          >
            <Text
              style={
                props.active == true
                  ? { color: "#FF603E" }
                  : { color: "#FFCE4F" }
              }
            >
              {props.icon}
            </Text>
          </View>

          <View style={styles.containerTitle}>
            <Text
              style={[
                styles.title,
                props.active == true
                  ? { color: "#FF603E" }
                  : { color: "#676D81" },
              ]}
            >
              {props.title}
            </Text>
          </View>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 180,
    borderRadius: 10,
    margin: 8,
    backgroundColor: "white",
    transform: [{ translateY: 20 }],
  },
  activeCard: {
    borderWidth: 2,
    borderColor: "#FF603E",
  },
  button: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icon: {
    borderRadius: 10,
    width: 73,
    height: 74,
    alignItems: "center",
    justifyContent: "center",
  },

  containerTitle: {
    alignItems: "center",
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Card;

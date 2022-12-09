import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DefaultProfile from "../images/image.svg";

const ProfileNavbar = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.image}>
          <DefaultProfile />
          <TouchableOpacity style={styles.photoChange}>
            <MaterialIcons name="photo-camera" size={18} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.textProfile}>Mario Rossi</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.textEmail}>mario.rossi@email.it</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF603E",
    height: 134,
    paddingLeft: 27,
    flexDirection: "row",
    alignItems: "center",
  },
  photoChange: {
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateX: 73 }, { translateY: -33 }],
  },
  image: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  textContainer: {
    paddingLeft: 28,
  },
  textProfile: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 28,
  },
  textEmail: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 18,
  },
});

export default ProfileNavbar;

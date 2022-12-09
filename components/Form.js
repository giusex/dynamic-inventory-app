import React from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Form = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.login}>Login</Text>
      </View>
      <View>
        <Text style={styles.title_input}>Email</Text>
      </View>
      <View>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text style={styles.title_input}>Password</Text>
      </View>
      <View>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text style={styles.forget_password}>Password dimenticata?</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={styles.button_text}>Accedi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  login: {
    width: 60,
    height: 35,
    fontSize: 20,
    color: "black",
  },
  title_input: {
    fontSize: 15,
    color: "#6C6C6C",
    width: 85,
    height: 22,
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "#6C6C6C",
    borderRadius: 6,
    marginTop: 4,
    fontSize: 18,
    width: 312,
    height: 50,
  },
  forget_password: {
    marginTop: 11,
    color: "#313131",
    width: 200,
    height: 20,
    fontSize: 13,
  },
  button: {
    backgroundColor: "#FF603E",
    borderRadius: 6,
    height: 50,
    width: 312,
    height: 50,
    marginTop: 57,
    alignItems: "center",
    justifyContent: "center",
  },
  button_text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Form;

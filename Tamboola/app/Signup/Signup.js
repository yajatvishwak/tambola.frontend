import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

function Signup({ props, navigation }) {
  const [nameText, setnameText] = useState("");

  const handlePress = () => {
    navigation.replace("Main", { id: nameText });
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}></StatusBar>

      <TextInput
        placeholder="Name"
        style={styles.name}
        onChangeText={(text) => setnameText(text)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.play}>Play!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    backgroundColor: "rgba(0,0,0,1)",
  },
  name: {
    width: 211,
    height: 46,
    color: "#fff",
    borderRadius: 10,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    textAlign: "center",
    marginTop: 347,
    alignSelf: "center",
  },
  button: {
    width: 116,
    height: 40,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    marginTop: 121,
    marginLeft: 150,
  },
  play: {
    color: "#121212",
    textAlign: "center",
    marginTop: 10,
  },
});

export default Signup;

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
  const [passText, setpassText] = useState("");

  const handlePress = () => {
    fetch("http://192.168.43.1:3000/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: nameText,
        password: passText,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        if (json == true) {
          navigation.replace("Main", { id: nameText });
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((err) => alert("Some Error " + err));
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}></StatusBar>

      <TextInput
        placeholder="user id"
        style={styles.name}
        onChangeText={(text) => setnameText(text)}
      ></TextInput>
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        style={styles.pass}
        onChangeText={(text) => setpassText(text)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.play}>play!</Text>
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
    width: 300,
    height: 46,
    color: "#fff",
    borderRadius: 10,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    textAlign: "center",
    marginTop: 347,
    alignSelf: "center",
  },
  pass: {
    width: 300,
    height: 46,
    color: "#fff",
    borderRadius: 10,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    textAlign: "center",
    marginTop: 25,
    alignSelf: "center",
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    marginTop: 100,
    alignSelf: "center",
  },
  play: {
    color: "#121212",
    textAlign: "center",
    marginTop: 10,
  },
});

export default Signup;

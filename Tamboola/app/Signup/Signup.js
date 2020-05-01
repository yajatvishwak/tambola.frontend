import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
  Modal,
  Image,
} from "react-native";
import Howto from "../Main/Howto";

function Signup({ props, navigation }) {
  const [nameText, setnameText] = useState("");
  const [passText, setpassText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    var isauth = false;

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
        if (json.isauth == true) {
          navigation.replace("Main", { id: nameText, ticketArr: json.tick });
          isauth == true;
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((err) => alert("Some Error " + err));
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}></StatusBar>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Howto />
      </Modal>
      <Image
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
          marginTop: 180,
          marginBottom: -300,
        }}
        source={require("./my-icon.png")}
      />

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
      <TouchableOpacity
        style={styles.button1}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.play1}>How to Participate?</Text>
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
  button1: {
    width: 300,
    height: 40,
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 40,
    alignSelf: "center",
  },
  play: {
    color: "#121212",
    textAlign: "center",
    marginTop: 10,
  },
  play1: {
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
});

export default Signup;

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Holes from "./Holes";
import { ScrollView, TouchableOpacity, Text } from "react-native";

const Done = (props) => {
  const [alldone, setalldone] = useState([]);
  const handlePress = () => {
    var axios = require("axios");
    axios({
      method: "get",
      url: "http://172.105.55.249:3000/done",
    })
      .then((res) => {
        //console.log(res);
        setalldone(res.data);
      })
      .catch((err) => {
        alert("There's an error:  " + err);
      });
  };
  var p = [];
  for (var i = 0; i < alldone.length; i++) {
    p.push(
      <Holes
        value={alldone[i]}
        single={alldone[i] >= 10 ? 0 : 1}
        style={styles.holes}
      ></Holes>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.refresh}>refresh</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <ScrollView contentContainerStyle={styles.scroll}>{p}</ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 100,
    marginBottom: 10,
    marginTop: 70,
    alignSelf: "center",
  },
  scroll: {
    alignSelf: "center",
    margin: 25,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  refresh: {
    color: "#121212",
    marginTop: 7,
    alignSelf: "center",
  },
  scrollArea: {
    height: 658,
    backgroundColor: "rgba(230, 230, 230,1)",
  },

  holes: {
    width: 55,
    height: 55,
    marginRight: 10,
    margin: 20,
    alignSelf: "flex-start",
  },
  holesRow: {
    height: 55,
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Done;

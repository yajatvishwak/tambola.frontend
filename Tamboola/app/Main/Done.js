import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import BHoles from "./BHoles";
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
  // for (var i = 0; i < alldone.length; i++) {
  //   p.push(
  //     <Holes
  //       value={alldone[i]}
  //       single={alldone[i] >= 10 ? 0 : 1}
  //       style={styles.holes}
  //     ></Holes>
  //   );
  // }
  for (var i = 1; i <= 89; i++) {
    p.push(
      <BHoles
        value={i}
        single={i >= 10 ? 0 : 1}
        style={alldone.indexOf(i) == -1 ? styles.holes : styles.holesDone}
      ></BHoles>
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
    marginLeft: 25,
    padding: 2,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  refresh: {
    color: "#121212",
    marginTop: 7,
    alignSelf: "center",
  },
  scrollArea: {
    height: 500,
    backgroundColor: "rgba(230, 230, 230,1)",
  },

  holes: {
    width: 40,
    height: 40,
    marginRight: 10,
    margin: 20,
    alignSelf: "flex-start",
  },
  holesDone: {
    width: 40,
    height: 40,
    marginRight: 10,
    margin: 20,
    alignSelf: "flex-start",
    backgroundColor: "#1169d4",
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

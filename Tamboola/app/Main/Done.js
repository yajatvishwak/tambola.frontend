import React from "react";
import { StyleSheet, View } from "react-native";
import BHoles from "./BHoles";
import { ScrollView, TouchableOpacity, Text } from "react-native";

const Done = (props) => {
  var done = props.alldone;
  console.log(done);
  var p = [];

  for (var i = 1; i <= 90; i++) {
    p.push(
      <BHoles
        value={i}
        single={i >= 10 ? 0 : 1}
        style={done.indexOf(i) == -1 ? styles.holes : styles.holesDone}
      ></BHoles>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.refresh}>
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
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 70,
    alignSelf: "center",
  },
  scroll: {
    alignSelf: "center",
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
    margin: 2,
    marginTop: 20,
    alignSelf: "flex-start",
  },
  holesDone: {
    width: 40,
    height: 40,
    margin: 2,
    marginTop: 20,
    alignSelf: "flex-start",
    backgroundColor: "#1169d4",
  },
});

export default Done;

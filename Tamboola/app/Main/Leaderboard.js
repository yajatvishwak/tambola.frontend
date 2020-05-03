import React, { Component, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import WinnerCard from "./components/WinnerCard";
import env from "../../variable";

function Leaderboard(props) {
  const [Results, setResults] = useState({});
  fetch(env.exp.apiUrl + "/winnersobj")
    .then((response) => response.json())
    .then((json) => {
      setResults(json);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollArea}>
        <Text style={styles.loremIpsum}> Winners</Text>
        <WinnerCard
          style={styles.materialCardWithImageAndTitle}
          value={Results.fr}
          place={"First Row"}
        ></WinnerCard>
        <WinnerCard
          style={styles.materialCardWithImageAndTitle}
          value={Results.sr}
          place={"Second Row"}
        ></WinnerCard>
        <WinnerCard
          style={styles.materialCardWithImageAndTitle}
          value={Results.tr}
          place={"Third Row"}
        ></WinnerCard>
        <WinnerCard
          style={styles.materialCardWithImageAndTitle}
          value={Results.fh}
          place={"Full House"}
        ></WinnerCard>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
  },

  materialCardWithImageAndTitle: {
    width: 359,
    height: 120,
    marginTop: 20,
    marginLeft: 1,
    alignSelf: "center",
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 50,
    alignSelf: "center",
    marginBottom: 50,
    marginTop: 120,
  },
});

export default Leaderboard;
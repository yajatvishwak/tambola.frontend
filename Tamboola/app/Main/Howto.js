import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialCardWithoutImage from "./components/MaterialCardWithoutImage";
import MaterialCardWithImageAndTitle1 from "./components/MaterialCardWithImageAndTitle1";

function Howto(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollArea}>
        <MaterialCardWithoutImage
          style={styles.materialCardWithoutImage}
        ></MaterialCardWithoutImage>
        <MaterialCardWithImageAndTitle1
          style={styles.materialCardWithImageAndTitle1}
          value={9481292936}
          info={"Eshan Parekh - Gpay"}
        ></MaterialCardWithImageAndTitle1>
        <MaterialCardWithImageAndTitle1
          style={styles.materialCardWithImageAndTitle1}
          value={"amanparekh22-1@okaxis"}
          info={"Eshan Parekh - UPI"}
        ></MaterialCardWithImageAndTitle1>
        <MaterialCardWithImageAndTitle1
          style={styles.materialCardWithImageAndTitle1}
          value={"Yajat Vishwakarma"}
          info={"appdev - instagram(@thisisyajatvishwakk)"}
        ></MaterialCardWithImageAndTitle1>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
  },

  materialCardWithoutImage: {
    width: 359,
    height: 400,
    marginTop: 90,
    marginLeft: 1,
    alignSelf: "center",
  },
  materialCardWithImageAndTitle1: {
    width: 359,
    height: 115,
    marginTop: 33,
    alignSelf: "center",
  },
  materialCardWithImageAndTitle: {
    width: 359,
    height: 166,
    marginTop: 31,
    marginLeft: 1,
    alignSelf: "center",
  },
});

export default Howto;

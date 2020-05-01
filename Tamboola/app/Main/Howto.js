import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialCardWithoutImage from "./components/MaterialCardWithoutImage";
import MaterialCardWithImageAndTitle1 from "./components/MaterialCardWithImageAndTitle1";

function Howto(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollArea}>
        <MaterialCardWithImageAndTitle1
          style={styles.materialCardWithImageAndTitle}
          value={"Yajat Vishwakarma"}
          info={"App developed by - instagram(@thisisyajatvishwakk)"}
        ></MaterialCardWithImageAndTitle1>
        <MaterialCardWithoutImage
          style={styles.materialCardWithoutImage}
        ></MaterialCardWithoutImage>
        <MaterialCardWithImageAndTitle1
          style={styles.materialCardWithImageAndTitle1}
          value={"9481292936 - amanparekh22-1@okaxis "}
          info={"Eshan Parekh - Gpay and UPI id"}
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
    marginTop: 31,
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
    height: 150,
    marginTop: 31,
    marginBottom: 15,
    alignSelf: "center",
  },
});

export default Howto;

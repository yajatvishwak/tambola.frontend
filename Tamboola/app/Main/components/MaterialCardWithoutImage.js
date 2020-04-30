import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialCardWithoutImage(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>How to Play?</Text>
        <Text style={styles.subtitleStyle}>and other instructions...</Text>
      </View>
      <View style={styles.body2}>
        <Text style={styles.bodyText}>
          This is session based Housie/Tambola game. Internet connection is
          required throughout the span of the game. {"\n"}This is crowd sourced
          game. i.e every active player will have to pay a nominal fee.{"\n"}
          After successful payment, a username and password will be issued which
          can be used to login and play the game{"\n"}Each ticket is for 30 rs.
          {"\n"}Only one Ticket can be played on one phone. i.e. One ticket per
          device.{"\n"}The prize pool is for 4 categories - Each row and full
          housie
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden",
  },
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24,
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 24,
  },
  subtitleStyle: {
    color: "#000",
    opacity: 0.5,
    fontSize: 14,

    lineHeight: 16,
  },
  body2: {
    padding: 16,
    paddingTop: 8,
  },
  bodyText: {
    color: "#424242",
    flexWrap: "wrap",
    fontSize: 14,
    lineHeight: 20,
  },
});

export default MaterialCardWithoutImage;

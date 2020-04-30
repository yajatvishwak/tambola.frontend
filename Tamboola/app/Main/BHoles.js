import React, { Component, useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function BHoles(props) {
  const [Punched, setPunched] = useState(false);

  var onpresshandler = () => {
    setPunched(!Punched);
    if (!Punched) {
      props.updateTicPush(props.value);
    } else {
      props.updateTicRem(props.value);
    }
  };
  return (
    <TouchableOpacity
      style={[Punched ? styles.punched : styles.container, props.style]}
      onPress={props.enabled ? onpresshandler : () => {}}
    >
      <Text
        style={props.single == 1 ? styles.singlenumber : styles.loremIpsum1}
      >
        {props.value}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(176,176,176,1)",
    borderRadius: 100,
    borderColor: "rgba(98,93,93,1)",
    borderWidth: 2,
    borderStyle: "dashed",
  },
  singlenumber: {
    color: "#fff",
    fontSize: 15,
    marginTop: 7,

    alignSelf: "center",
  },

  loremIpsum1: {
    color: "#fff",
    fontSize: 15,
    marginTop: 7,
    alignSelf: "center",
  },
  punched: {
    backgroundColor: "rgba(176,176,176,1)",
    borderRadius: 100,
    borderColor: "rgba(34,130,245,1)",
    borderWidth: 2,
  },
});

export default BHoles;

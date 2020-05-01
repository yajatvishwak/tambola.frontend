import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Holes from "./Holes";

var removeByAttr = function (arr, attr, value) {
  var i = arr.length;
  while (i--) {
    if (
      arr[i] &&
      arr[i].hasOwnProperty(attr) &&
      arguments.length > 2 &&
      arr[i][attr] === value
    ) {
      arr.splice(i, 1);
    }
  }
  return arr;
};
function Ticket(props) {
  var p = [];
  var p2 = [];
  var p3 = [];
  const [Ticket, setTicket] = useState([]);

  var ticketarr = props.ticket;
  var arp = ticketarr[0];
  var arp2 = ticketarr[1];
  var arp3 = ticketarr[2];

  const whichRow = (value) => {
    if (arp.indexOf(value) != -1) {
      return "FR";
    } else if (arp2.indexOf(value) != -1) {
      return "SR";
    } else if (arp3.indexOf(value) != -1) {
      return "TR";
    }
  };

  var handleTicketPush = (value) => {
    var tic = Ticket;
    var row = whichRow(value);
    tic.push({ value: value, row: row });
    props.updateTicket(tic);
  };
  var handleTicketRem = (value) => {
    var tic = Ticket;
    removeByAttr(tic, "value", value);
    props.updateTicket(tic);
  };

  var generateHole = (arr) => {
    var t = [];
    for (var i = 0; i < 5; i++) {
      var k = arr[i];
      t.push(
        <Holes
          value={k}
          punched={false}
          enabled={true}
          single={k >= 10 ? 0 : 1}
          style={styles.holes}
          updateTicPush={handleTicketPush}
          updateTicRem={handleTicketRem}
        ></Holes>
      );
    }
    return t;
  };
  p = generateHole(arp);
  p2 = generateHole(arp2);
  p3 = generateHole(arp3);

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.holesRow}>{p}</View>
      <View style={styles.holesRow}>{p2}</View>
      <View style={styles.holesRow}>{p3}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(230, 230, 230,1)",
  },
  holes: {
    width: 55,
    height: 55,
    marginRight: 10,
    alignSelf: "center",
  },

  holesRow: {
    height: 55,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Ticket;

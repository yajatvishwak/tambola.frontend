import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import Ticket from "./Ticket";
//import Pusher from "pusher-js/react-native";

import { useNavigation } from "@react-navigation/native";
import Done from "./Done";

const uniqueRandomRange = require("unique-random-range");
let rand = uniqueRandomRange(1, 89);
let ticketArr1 = [];
let ticketArr2 = [];
let ticketArr3 = [];
for (var i = 0; i < 5; i++) {
  ticketArr1.push(rand());
  ticketArr2.push(rand());
  ticketArr3.push(rand());
}

//Pusher.logToConsole = true;
//var pusher = new Pusher("fdb75fe73c74aba30121", {
//   cluster: "ap2",
//   forceTLS: true,
// });

// /var channel = pusher.subscribe("my-channel");

let ws = new WebSocket("ws://172.105.55.249:2222");
ws.onopen = function () {
  console.log("Connected to WS");
  alert("Connected to WS");
};

function Main({ props, route }) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const [Number, setNumber] = useState(0);
  const [gameOver, setgameOver] = useState(false);
  const [Tickets, setTickets] = useState([]);
  const handleTic = (data) => {
    setTickets(data);
    console.log(Tickets);
  };
  //check aif game is over
  if (gameOver) {
    fetch("http://172.105.55.249:3000/winner")
      .then((response) => response.json())
      .then((json) => {
        alert(json);
        navigation.navigate("Signup");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const ticketArr = [ticketArr1, ticketArr2, ticketArr3];
  var { id } = route.params;

  // channel.bind("my-event", function (data) {
  //   setNumber(data.message);
  // });

  // // announce winner -- WS implementation pending
  // channel.bind("win", function (data) {
  //   alert(JSON.stringify(data));
  //   if (data.gameOver) {
  //     setgameOver(true);
  //   }
  // });

  ws.onmessage = function (ev) {
    // /let _data = JSON.parse(ev.data);
    //console.log(ev);
    var json = JSON.parse(ev.data);
    if (json.channel == "number") {
      setNumber(json.number);
    } else if (json.channel == "win") {
      alert(json.message);
      if (json.gameOver) {
        setgameOver(true);
      }
    }
    //setNumber(ev.data);
    //alert(ev);
  };

  const handleCalls = (type) => {
    var axios = require("axios");
    axios({
      method: "post",
      url: "http://172.105.55.249:3000",
      data: {
        name: id,
        ticket: Tickets,
        type: type,
      },
    })
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert("There's an error:  " + err);
      });
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Done />
      </Modal>
      <View style={styles.viewRows}>
        <TouchableOpacity
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.modal}>Previous numbers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.openButton}
          onPress={() => {
            var axios = require("axios");
            axios({
              method: "get",
              url: "http://172.105.55.249:3000/winner",
            })
              .then((res) => {
                alert(res.data);
              })
              .catch((err) => {
                alert("There's an error:  " + err);
              });
          }}
        >
          <Text style={styles.modal}>View Winners</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.currentNumberIs}>Current Number is</Text>
      <Text style={styles.loremIpsum}>{Number}</Text>
      <Text style={styles.yourTicket}>Your Ticket</Text>
      <Ticket
        updateTicket={handleTic}
        ticket={ticketArr}
        style={styles.ticket}
      ></Ticket>

      <View style={styles.button3Row}>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => handleCalls("FR")}
        >
          <Text style={styles.firstRow}>First Row</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCalls("SR")}
          style={styles.button2}
        >
          <Text style={styles.secondRow}>Second Row</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button4Row}>
        <TouchableOpacity
          style={styles.button4}
          onPress={() => handleCalls("TR")}
        >
          <Text style={styles.thirdRow}>Third Row</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button5}
          onPress={() => handleCalls("FH")}
        >
          <Text style={styles.fullHouse}>Full House</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  openButton: {
    width: 150,
    height: 35,
    alignSelf: "center",
    marginTop: 90,
    marginBottom: -80,
    borderRadius: 15,

    backgroundColor: "rgba(230, 230, 230,1)",
  },
  currentNumberIs: {
    color: "#121212",
    marginTop: 117,
    alignSelf: "center",
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 50,
    alignSelf: "center",
    marginBottom: 50,
  },
  yourTicket: {
    color: "#121212",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  button: {
    width: 111,
    height: 35,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "rgba(230, 230, 230,1)",
  },
  punch: {
    color: "#121212",
    fontSize: 20,
  },
  modal: {
    color: "#121212",
    fontSize: 12,
    alignSelf: "center",
    marginTop: 7,
  },
  button3: {
    width: 162,
    height: 40,
    borderRadius: 15,
    backgroundColor: "rgba(230, 230, 230,1)",
  },
  firstRow: {
    color: "#121212",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 5,
  },
  button2: {
    width: 150,
    height: 40,
    borderRadius: 15,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginLeft: 14,
  },
  secondRow: {
    color: "#121212",
    fontSize: 20,
    marginTop: 5,
    alignSelf: "center",
  },

  button4: {
    width: 161,
    height: 40,
    borderRadius: 15,
    backgroundColor: "rgba(230, 230, 230,1)",
  },
  thirdRow: {
    color: "#121212",
    fontSize: 20,

    textAlign: "center",
    marginTop: 5,
    alignSelf: "center",
  },
  button5: {
    width: 150,
    height: 40,
    borderRadius: 15,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginLeft: 14,
  },
  fullHouse: {
    color: "#121212",
    fontSize: 20,
    marginTop: 5,
    alignSelf: "center",
  },
  button4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 13,

    alignSelf: "center",
  },
  button3Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 39,
    alignSelf: "center",
  },
  viewRows: {
    height: 40,
    flexDirection: "row",
    marginTop: 39,

    alignSelf: "center",
  },
  ticket: {
    width: 332,
    height: 228,
    alignSelf: "center",
    borderRadius: 23,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: 0,
  },
});

export default Main;

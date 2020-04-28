import React, { Component, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import Ticket from "./Ticket";
var axios = require("axios");

import { useNavigation } from "@react-navigation/native";
import Done from "./Done";

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
  //check if game is over
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

  var { id } = route.params;
  var { ticketArr } = route.params;

  ws.onmessage = function (ev) {
    var json = JSON.parse(ev.data);
    if (json.channel == "number") {
      setNumber(json.number);
    } else if (json.channel == "win") {
      alert(json.message);
      if (json.gameOver) {
        setgameOver(true);
      }
    }
  };

  const handleCalls = (type) => {
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
      <ScrollView style={{ zIndex: -99 }}>
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
      </ScrollView>
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

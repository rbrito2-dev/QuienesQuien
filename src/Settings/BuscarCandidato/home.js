import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Styles from "../../styles";
//import MapView from "react-native-maps";

class BuscarCandidatoHome extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Buscar Candidato",
    headerLeft: (
      <TouchableOpacity
        style={Styles.headerButton}
        onPress={() => navigation.openDrawer()}
      >
        <Icon name="bars" size={20} />
      </TouchableOpacity>
    )
  });
  render() {
    return <View style={Styles.container}></View>;
  }
}
const LocateTrailerStyles = StyleSheet.create({
  MapView: {
    ...StyleSheet.absoluteFillObject
  },
  View: {
    flex: 100,
    alignItems: "center"
  },
  TouchableOpacity: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    flexDirection: "row",
    width: 335,
    height: 86,
    alignItems: "center",
    marginBottom: 25
  },
  Button: {
    position: "absolute",
    backgroundColor: "#FE9E1C",
    top: 475,
    left: -167
  },
  cardContainer: {
    position: "absolute",
    top: 300,
    backgroundColor: "transparent"
  },
  overlay: {
    position: "absolute",
    backgroundColor: "transparent"
  },
  top25: {
    top: 25
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    height: 60,
    width: 343,
    textAlign: "center",
    borderRadius: 5
  }
});
export default BuscarCandidatoHome;

import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import MemoryScreen from "./Memory";
import CPUScreen from "./CPU";

const SettingsTabs = createBottomTabNavigator({
  CPU: {
    screen: CPUScreen,
    navigationOptions: {
      title: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={18} color={tintColor} />
      )
    }
  },
  BuscarCandidato: {
    screen: MemoryScreen,
    navigationOptions: {
      tabBarLabel: "Buscar Candidato",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" size={18} color={tintColor} />
      )
    }
  },
  CompararCandidatos: {
    screen: MemoryScreen,
    navigationOptions: {
      tabBarLabel: "Comparar Perfiles",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="not-equal" size={18} color={tintColor} />
      )
    }
  },
  Biblioteca: {
    screen: MemoryScreen,
    navigationOptions: {
      tabBarLabel: "Biblioteca",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="book-open" size={18} color={tintColor} />
      )
    }
  }
});

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ SettingsTabs }, { headerMode: "none" });

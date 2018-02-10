import React from "react";
import Decks from "../screens/Decks";
import AddDeck from "../screens/AddDeck";
import DeckDetails from "../screens/DeckDetails";
import AddCard from "../screens/AddCard";
import Quiz from "../screens/Quiz";

import { TabNavigator, StackNavigator } from "react-navigation";
import { Platform } from "react-native";
import { purple, white } from "../utils/colors";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Tabs = TabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        title: "Decks",
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        title: "New Deck",
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
            size={30}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : purple,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);
const Navigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      },
      headerMode: Platform.OS === "ios" ? "float" : "screen",
      title: `${navigation.state.params.title}`
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      },
      headerMode: Platform.OS === "ios" ? "float" : "screen",
      title: `${navigation.state.params.title}`
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerMode: Platform.OS === "ios" ? "float" : "screen",
      title: `${navigation.state.params.title}`
    })
  }
});
export default Navigator;

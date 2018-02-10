import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  FlatList
} from "react-native";
import { white, gray } from "../utils/colors";

const onDeckItemClick = (deck, navigator) =>
  navigator.navigate("DeckDetails", {
    title: `${deck.title}`
  });
export const PureDeckCard = ({ deck, size }) => {
  // console.log(size);
  return (
    <View style={size == 2 ? styles.deckItemBig : styles.deckItem}>
      <Text style={size == 2 ? styles.cardtitleBig : styles.cardtitle}>
        {deck.title}
      </Text>
      <Text style={styles.cardNumbers}>{deck.questions.length} Cards</Text>
    </View>
  );
};
export const DeckCard = ({ deck, navigator }) => {
  return (
    <TouchableOpacity onPress={() => onDeckItemClick(deck, navigator)}>
      <PureDeckCard deck={deck} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  deckItemBig: {
    padding: 20,
    height: "auto",
    justifyContent: "center",
    alignItems: "center"
  },
  deckItem: {
    padding: 20,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: gray
  },
  cardNumbers: {
    padding: 15,
    color: gray,
    fontWeight: "bold"
  },
  cardtitle: {
    fontSize: 20,
    paddingTop: 15,
    fontWeight: "bold"
  },
  cardtitleBig: {
    fontSize: 30,
    paddingTop: 150,
    fontWeight: "bold"
  }
});

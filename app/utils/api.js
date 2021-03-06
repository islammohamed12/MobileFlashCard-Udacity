import React from "react";
import { AsyncStorage } from "react-native";
import defaultDecks from "../data/decks";
const DECKS_STORAGE_KEY = "FlashCards:decks";
// getDecks: return all of the decks along with their titles, questions, and answers.
// getDeck: take in a single id argument and return the deck associated with that id.
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    if (results) {
      return JSON.parse(results);
    } else {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(defaultDecks));
      return defaultDecks;
    }
  });
}

export function getDeck(id) {
  return getDecks().then(decks => decks[id]);
}

export function saveDeckTitle(title) {
  return getDecks().then(decks => {
    if (!decks[title]) {
      decks[title] = {
        title: title,
        questions: []
      };
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    }
  });
}

export function addCardToDeck(title, card) {
  return getDecks().then(decks => {
    if (decks[title] && decks[title]["questions"]) {
      decks[title]["questions"].push(card);
    }
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    return decks;
  });
}

export function reset() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, "");
}

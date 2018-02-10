export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
import { getDecks, addCardToDeck, saveDeckTitle } from "../utils/api";

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export const addDeck = title => dispatch => {
  return saveDeckTitle(title).then(() => {
    // debugger;
    dispatch({
      type: ADD_DECK,
      title
    });
  });
};

export const addCard = (deckTitle, card) => dispatch => {
  return addCardToDeck(deckTitle, card).then(() => {
    // debugger;
    dispatch({
      type: ADD_CARD,
      deckTitle,
      card
    });
  });
};

export const getAllDecks = () => dispatch => {
  return getDecks().then(decks => {
    console.log(decks);
    dispatch(receiveDecks(decks));
  });
};

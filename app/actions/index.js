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
export const receiveCard = (deckTitle, card) => dispatch => {
  dispatch({
    type: ADD_CARD,
    deckTitle,
    card
  });
};

export const addDeck = title => dispatch => {
  return saveDeckTitle(title).then(() => {
    dispatch({
      type: ADD_DECK,
      title
    });
  });
};

export const addCard = (deckTitle, card) => dispatch => {
  return addCardToDeck(deckTitle, card).then(() => {
    dispatch(receiveCard(deckTitle, card));
  });
};
export const getAllDecks = () => dispatch => {
  return getDecks().then(decks => {
    dispatch(receiveDecks(decks));
  });
};

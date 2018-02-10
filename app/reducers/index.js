import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      };
    case ADD_CARD: {
      debugger;
      const out = {
        ...state
      };
      if (out[action.deckTitle]) {
        const { question, answer } = action.card;
        out[action.deckTitle].questions.push({ question, answer });
      }
      return out;
      break;
    }
    default:
      console.log(state);
      return state;
  }
}

export default decks;

import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { PureDeckCard } from "./DeckCard";
import { white } from "../utils/colors";
import { TextButton } from "../components/textbutton";
import { AppView } from "../components/appview";

const DeckDetails = props => {
  const { deck, navigation } = props;
  const handleClick = (screen, title) => {
    const { navigation, deck } = props;
    navigation.navigate(screen, {
      title,
      deck
    });
  };

  return (
    <AppView>
      <PureDeckCard deck={deck} size={2} />
      <TextButton onPress={() => handleClick("AddCard", "Add Card")}>
        Add Card
      </TextButton>
      {deck.questions.length > 0 && (
        <TextButton onPress={() => handleClick("Quiz", "Quiz")}>
          Start Quiz
        </TextButton>
      )}
    </AppView>
  );
};

const mapStateToProps = (decks, { navigation }) => ({
  deck: decks[navigation.state.params.title],
  decks
});

export default connect(mapStateToProps, null)(DeckDetails);

import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { PureDeckCard } from "./DeckCard";
import { white } from "../utils/colors";
import { TextButton } from "../components/textbutton";
import { AppView } from "../components/appview";

class DeckDetails extends Component {
  onAddCardClick = () => {
    // console.log(this);
    const { navigation, decks } = this.props;
    navigation.navigate("AddCard", {
      title: "Add Card",
      deck: decks[navigation.state.params.title]
    });
  };
  onQuizClick = () => {
    const { navigation, decks } = this.props;
    navigation.navigate("Quiz", {
      title: "Quiz",
      deck: decks[navigation.state.params.title]
    });
  };
  render() {
    // console.log("props", this.props);
    const { decks, navigation } = this.props;
    const deck = decks[navigation.state.params.title];

    // console.log("Deck", deck);
    return (
      <AppView>
        <PureDeckCard deck={deck} size={2} />
        <TextButton onPress={this.onAddCardClick}>Add Card</TextButton>
        <TextButton onPress={this.onQuizClick}>Start Quiz</TextButton>
      </AppView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
    padding: 15
  }
});
const mapStateToProps = decks => ({ decks });

export default connect(mapStateToProps, null)(DeckDetails);

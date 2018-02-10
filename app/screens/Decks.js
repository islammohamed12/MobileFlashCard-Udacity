import React, { Component } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import { getAllDecks } from "../actions";
import { DeckCard } from "./DeckCard";
import { AppView } from "../components/appview";

class Decks extends Component {
  componentDidMount() {
    this.props.getAllDecks();
  }
  keyExtractor = (item, index) => item.title;
  render() {
    const { decks } = this.props;
    const decksArray = Object.values(decks);
    return (
      <AppView>
        {decksArray.length > 0 && (
          <FlatList
            data={decksArray}
            keyExtractor={this.keyExtractor}
            renderItem={({ item }) => {
              return <DeckCard deck={item} navigator={this.props.navigation} />;
            }}
          />
        )}
      </AppView>
    );
  }
}

function mapStateToProps(decks) {
  return { decks };
}
export default connect(mapStateToProps, { getAllDecks })(Decks);

import React, { Component } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import { getAllDecks } from "../actions";
import { DeckCard } from "./DeckCard";
import { AppView } from "../components/appview";
// import { reset } from "../utils/api";

class Decks extends Component {
  // componentWillMount() {
  //   reset();
  // }
  componentDidMount() {
    this.props.getAllDecks();
  }
  keyExtractor = (item, index) => item.title;
  render() {
    const { decks } = this.props;
    console.log(decks);
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

const mapStateToProps = decks => ({ decks });

export default connect(mapStateToProps, { getAllDecks })(Decks);

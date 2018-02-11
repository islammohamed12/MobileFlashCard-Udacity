import React, { Component } from "react";
import { Text, StyleSheet, TextInput, Alert } from "react-native";
import { connect } from "react-redux";
import { TextButton } from "../components/textbutton";
import { gray, purple } from "../utils/colors";
import { addDeck } from "../actions";
import { AppView } from "../components/appview";
import { NavigationActions } from "react-navigation";

class AddDeck extends Component {
  state = {
    title: ""
  };
  onSubmit = () => {
    const deckTitle = this.state.title;
    this.deckTitle = deckTitle;
    if (deckTitle === "") {
      Alert.alert(
        "Sorry",
        "Please Enter Valid Deck Title",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      return;
    }

    const { addDeck, navigation } = this.props;
    addDeck(deckTitle).then(() => {
      console.log(deckTitle);
      console.log(this.props.navigation);
      this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 1,
          actions: [
            NavigationActions.navigate({ routeName: "Home" }),
            NavigationActions.navigate({
              routeName: "DeckDetails",
              params: { title: deckTitle }
            })
          ]
        })
      );
    });
    this.setState({ title: "" });
  };

  render() {
    return (
      <AppView>
        <Text style={styles.addQuestion}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.deckInput}
          autoFocus={true}
          underlineColorAndroid={purple}
          editable={true}
          maxLength={30}
          placeholder="Deck Title"
          placeholderTextColor={gray}
          value={this.state.title}
          onChangeText={title => this.setState({ title })}
        />
        <TextButton onPress={this.onSubmit}>Submit</TextButton>
      </AppView>
    );
  }
}

const styles = StyleSheet.create({
  addQuestion: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 50,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  deckInput: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
    borderBottomLeftRadius: 1,
    padding: 10,
    marginBottom: 20
  }
});

export default connect(null, { addDeck })(AddDeck);

import React, { Component } from "react";
import { Text, StyleSheet, TextInput, Alert } from "react-native";
import { connect } from "react-redux";
import { gray, purple } from "../utils/colors";
import { TextButton } from "../components/textbutton";
import { addCard } from "../actions";
import { AppView } from "../components/appview";

class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };
  onSubmit = () => {
    if (this.state.question === "" || this.state.answer === "") {
      Alert.alert(
        "Sorry",
        "Please Enter Valid Question and Answer",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );

      return;
    }

    const card = this.state;
    console.log(this.props);
    const { addCard, navigation } = this.props;
    addCard(navigation.state.params.deck.title, card);
    this.setState({
      question: "",
      answer: ""
    });
    navigation.goBack();
  };
  render() {
    return (
      <AppView>
        <TextInput
          style={styles.deckInput}
          autoFocus={true}
          underlineColorAndroid={purple}
          editable={true}
          maxLength={30}
          placeholder="Question"
          placeholderTextColor={gray}
          value={this.state.question}
          onChangeText={question => this.setState({ question })}
        />
        <TextInput
          style={[{ height: 100 }, styles.deckInput]}
          autoFocus={false}
          underlineColorAndroid={purple}
          editable={true}
          maxLength={300}
          placeholder="Answer"
          placeholderTextColor={gray}
          multiline={true}
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })}
        />
        <TextButton
          style={{
            opacity:
              this.state.question === "" || this.state.answer === "" ? 0.5 : 1
          }}
          onPress={this.onSubmit}
        >
          Submit
        </TextButton>
      </AppView>
    );
  }
}

const styles = StyleSheet.create({
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
    marginBottom: 10
  }
});

export default connect(null, { addCard })(AddCard);

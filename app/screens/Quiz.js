import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { white, red, green } from "../utils/colors";
import FlipCard from "../components/flipcard";
import QuestionCard from "./QuestionCard";
import ResultView from "./ResultView";
import { TextButton } from "../components/textbutton";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
class Quiz extends Component {
  state = {
    correctAnswers: 0,
    questionId: 0,
    showResult: false
  };
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }
  onCorrectClick = () => {
    const { navigation } = this.props;
    const deck = navigation.state.params.deck;
    const nextQuestionId = this.state.questionId + 1;
    this.setState(prevState => {
      return {
        questionId: nextQuestionId,
        correctAnswers: prevState.correctAnswers + 1
      };
    });

    if (nextQuestionId === deck.questions.length) {
      this.setState({
        showResult: true
      });
    }
  };
  onIncorrectClick = () => {
    const { navigation } = this.props;
    const deck = navigation.state.params.deck;
    const nextQuestionId = this.state.questionId + 1;
    this.setState({
      questionId: nextQuestionId
    });

    if (nextQuestionId === deck.questions.length) {
      this.setState({
        showResult: true
      });
    }
  };
  onRestartClick = () => {
    this.setState({
      correctAnswers: 0,
      questionId: 0,
      showResult: false
    });
  };
  onBackToDeckClick = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };
  render() {
    const { navigation } = this.props;
    const deck = navigation.state.params.deck;
    const { questionId } = this.state;
    const questionNumber = questionId + 1;
    // console.log("Deck", deck);
    return (
      <View style={styles.container}>
        {!this.state.showResult && (
          <View style={styles.container}>
            <Text>{`${questionNumber} / ${deck.questions.length}`}</Text>
            <QuestionCard
              questionId={this.state.questionId}
              question={deck.questions[this.state.questionId]}
            />
            <TextButton
              onPress={this.onCorrectClick}
              style={{ backgroundColor: green }}
            >
              Correct
            </TextButton>
            <TextButton
              onPress={this.onIncorrectClick}
              style={{ backgroundColor: red }}
            >
              Incorrect
            </TextButton>
          </View>
        )}
        {this.state.showResult && (
          <ResultView
            correctAnswers={this.state.correctAnswers}
            questionCount={deck.questions.length}
            onRestartClick={this.onRestartClick}
            onBackToDeckClick={this.onBackToDeckClick}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: 15,
    flex: 1
  }
});

export default Quiz;

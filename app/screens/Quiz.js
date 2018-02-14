import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { white, red, green } from "../utils/colors";
import FlipCard from "../components/flipcard";
import QuestionCard from "./QuestionCard";
import ResultView from "./ResultView";
import { TextButton } from "../components/textbutton";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import { AppView } from "../components/appview";

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
      <AppView>
        {!this.state.showResult && (
          <AppView>
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
          </AppView>
        )}
        {this.state.showResult && (
          <ResultView
            correctAnswers={this.state.correctAnswers}
            questionCount={deck.questions.length}
            onRestartClick={this.onRestartClick}
            onBackToDeckClick={this.onBackToDeckClick}
          />
        )}
      </AppView>
    );
  }
}

export default Quiz;

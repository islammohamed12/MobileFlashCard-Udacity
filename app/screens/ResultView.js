import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { white } from "../utils/colors";
import { TextButton } from "../components/textbutton";

function ResultView({ correctAnswers, questionCount, onRestartClick }) {
  return (
    <View
      style={[
        {
          justifyContent: "center",
          alignItems: "center"
        },
        styles.container
      ]}
    >
      <Text style={styles.resultText}>Results</Text>
      <Text style={styles.correctAnswersText}>
        Total Question : {questionCount}
      </Text>
      <Text style={styles.correctAnswersText}>
        Correct Answers : {correctAnswers}
      </Text>
      <Text style={styles.correctAnswersText}>
        Score : {correctAnswers * 100 / questionCount} %
      </Text>
      <TextButton style={styles.restartButton} onPress={onRestartClick}>
        Restart Quiz
      </TextButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: 15,
    flex: 1
  },
  resultText: {
    height: 150,
    fontSize: 25,
    fontWeight: "bold"
  },
  restartButton: {},
  correctAnswersText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10
  }
});

export default ResultView;

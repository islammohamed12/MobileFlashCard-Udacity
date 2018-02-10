import React, { Component } from "react";
import FlipCard from "../components/flipcard";
function QuestionCard(props) {
  const { question } = props;
  return (
    <FlipCard
      frontText={question.question}
      frontButtonText="Answer"
      backText={question.answer}
      backButtonText="Question"
      key={props.questionId} // to force refersh the component!
    />
  );
}
export default QuestionCard;

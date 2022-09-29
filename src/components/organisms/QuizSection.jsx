import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Text from "../atoms/Text";
import Examples from "../molecules/Examples";
import Button from "../atoms/Button";

function QuizSection({ quizData, handleAnswerClick, handleNextClick }) {
  return (
    <QuizSectionStyled>
      <Text className="medium" value={`Q. ${quizData.question}`} />
      <Examples
        examples={quizData.answers}
        onClick={handleAnswerClick}
        margin="40px 0 0 0"
      />
      <Button
        type="button"
        className="medium"
        children="다음 문제"
        onClick={handleNextClick}
        width="50%"
        margin="40px 0 0 0"
        padding="10px 10px"
        hasBorder={true}
        borderWeight="2px"
        borderColor="green"
        fontColor="green"
      />
    </QuizSectionStyled>
  );
}

export default QuizSection;

const QuizSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

QuizSection.propTypes = {
  quizData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        id: Number,
        content: String,
      }),
    ).isRequired,
  }).isRequired,
  handleAnswerClick: PropTypes.func,
  handleNextClick: PropTypes.func,
};

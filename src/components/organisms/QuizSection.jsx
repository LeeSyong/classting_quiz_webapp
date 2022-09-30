import React from "react";
import { ClipLoader } from "react-spinners";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Examples from "../molecules/Examples";

import palette from "../../styles/palette";

function QuizSection({
  quizData,
  handleAnswerClick,
  handleNextClick,
  selectedAnswer,
  correctAnswer,
}) {
  return (
    <QuizSectionStyled>
      {!quizData && <ClipLoader size="150px" color={palette.green} />}
      {quizData && (
        <>
          <Text
            className="medium"
            value={`Q. ${quizData.question}`}
            padding="5px"
          />
          <Examples
            examples={quizData.answers}
            selectedAnswer={selectedAnswer}
            correctAnswer={correctAnswer}
            onClick={handleAnswerClick}
            margin="40px 0 0 0"
          />
          {selectedAnswer && (
            <Button
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
          )}
        </>
      )}
    </QuizSectionStyled>
  );
}

export default React.memo(QuizSection);

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
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  handleAnswerClick: PropTypes.func,
  handleNextClick: PropTypes.func,
  selectedAnswer: PropTypes.string,
  correctAnswer: PropTypes.string,
};

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../atoms/Button";
import Table from "../atoms/Table";

import palette from "../../styles/palette";

import { TABLE_HEAD } from "../../constants/menu";

function QuizResultList({ quizResults, onClick, ...props }) {
  return (
    <QuizResultListStyled {...props}>
      {quizResults.map(
        ({ question, correct_answer, selected_answer }, index) => (
          <Table
            key={index}
            tableHead={TABLE_HEAD}
            tableData={[
              question,
              correct_answer,
              selected_answer,
              <Button
                key={index}
                children="작성"
                onClick={(event) => onClick(event, index + 1)}
                backgroundColor="green"
                fontColor="white"
              />,
            ]}
            margin="20px auto"
            borderRadius="0"
            boxShadow={`0 0 0 2px ${palette.green}`}
          />
        ),
      )}
    </QuizResultListStyled>
  );
}

export default QuizResultList;

const QuizResultListStyled = styled.ul``;

QuizResultList.propTypes = {
  quizResults: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      correct_answer: PropTypes.string,
      selected_answer: PropTypes.string,
    }),
  ),
  onClick: PropTypes.func,
};

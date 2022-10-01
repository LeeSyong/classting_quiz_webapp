import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import QuizTableList from "../molecules/QuizTableList";

function NotesSection({ quizResults, onClick, ...props }) {
  return (
    <NotesSectionStyled {...props}>
      <QuizTableList quizResults={quizResults} onClick={onClick} />
    </NotesSectionStyled>
  );
}

export default NotesSection;

const NotesSectionStyled = styled.div`
  width: 80%;
  margin: 0 auto;
`;

NotesSection.propTypes = {
  quizResults: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      correct_answer: PropTypes.string,
      selected_answer: PropTypes.string,
    }),
  ),
  onClick: PropTypes.func,
};

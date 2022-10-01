import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Textarea from "../atoms/Textarea";

function NoteSection({ quizResult, value, onChange, onClick, ...props }) {
  return (
    <NoteSectionStyled {...props}>
      <QuizResultWrapper>
        <Text className="large" value={`퀴즈 | ${quizResult.question}`} />
        <Text className="large" value={`정답 | ${quizResult.correct_answer}`} />
        <Text
          className="large"
          value={`선택 답안 | ${quizResult.selected_answer}`}
        />
      </QuizResultWrapper>
      <Textarea
        value={value}
        placeholder="노트를 작성해주세요."
        onChange={onChange}
        height="100%"
      />
      <Button
        children="저장하기"
        onClick={onClick}
        width="50%"
        margin="5px auto"
        padding="10px 10px"
        hasBorder={true}
        borderWeight="2px"
        borderColor="green"
        fontColor="green"
      />
    </NoteSectionStyled>
  );
}

export default React.memo(NoteSection);

const NoteSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
`;

const QuizResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px auto;
  gap: 20px;
`;

NoteSection.propTypes = {
  quizResult: PropTypes.shape({
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    selected_answer: PropTypes.string,
  }).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

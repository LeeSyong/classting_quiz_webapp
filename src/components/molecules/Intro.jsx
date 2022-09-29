import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../atoms/Button";
import Text from "../atoms/Text";

import { INTRO } from "../../constants/text";

function Intro({ onClick, ...props }) {
  return (
    <IntroStyled {...props}>
      <IntroTextWrapper>
        {INTRO.map((text, index) => (
          <Text
            key={index}
            className="medium"
            value={text}
            textAlign="center"
          />
        ))}
      </IntroTextWrapper>
      <Link to="/quiz/1">
        <Button
          className="medium"
          children="퀴즈 풀기"
          onClick={onClick}
          padding="10px 20px"
          backgroundColor="green"
          fontColor="white"
        />
      </Link>
    </IntroStyled>
  );
}

export default Intro;

const IntroStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 80px;
  border-radius: 10px;
  gap: 40px;
`;

const IntroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

Intro.propTypes = {
  onClick: PropTypes.func,
};

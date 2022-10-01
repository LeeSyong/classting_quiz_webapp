import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Button from "../atoms/Button";
import Text from "../atoms/Text";

import palette from "../../styles/palette";

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
  ${({
    width = "100%",
    maxWidth = "100%",
    height = "100%",
    margin = "0 auto",
    padding = "80px",
    hasBorder = false,
    borderRadius = "10px",
    borderWeight = "2px",
    borderColor = "black",
  }) => css`
    width: ${width}
    max-width: ${maxWidth};
    height: ${height};
    margin: ${margin};
    padding: ${padding};
    border-radius: ${borderRadius};
    border: ${
      hasBorder ? `${borderWeight} solid ${palette[borderColor]}` : "none"
    };
    gap: 40px;
  `}
`;

const IntroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

Intro.propTypes = {
  onClick: PropTypes.func,
};

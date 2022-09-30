import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Button from "../atoms/Button";

import palette from "../../styles/palette";

function Examples({
  examples,
  selectedAnswer,
  correctAnswer,
  onClick,
  ...props
}) {
  return (
    <ExamplesStyled {...props}>
      {examples.map((example) => (
        <Button
          key={example}
          dangerouslySetInnerHTML={{ __html: example }}
          type="button"
          className="medium"
          onClick={onClick}
          padding="10px 10px"
          backgroundColor="green"
          fontColor="white"
          {...(example === selectedAnswer && {
            backgroundColor: "red",
          })}
          {...(selectedAnswer &&
            example === correctAnswer && {
              backgroundColor: "blue",
            })}
          disabled={selectedAnswer}
        />
      ))}
    </ExamplesStyled>
  );
}

export default Examples;

const ExamplesStyled = styled.div`
  display: flex;
  flex-direction: column;
  ${({
    width = "100%",
    height = "100%",
    margin = "0",
    padding = "0",
    backgroundColor = "transparent",
    borderRadius = "10px",
    hasBorder = false,
    borderWeight = "1px",
    borderColor = "black",
    fontColor = "inherit",
  }) => css`
    width: ${width};
    height: ${height};
    margin: ${margin};
    padding: ${padding};
    background-color: ${backgroundColor === "transparent"
      ? "transparent"
      : palette[backgroundColor]};
    border-radius: ${borderRadius};
    border: ${hasBorder
      ? `${borderWeight} solid ${palette[borderColor]}`
      : "none"};
    color: ${fontColor === "inherit" ? "inherit" : palette[fontColor]};
  `}
`;

Examples.propTypes = {
  examples: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedAnswer: PropTypes.string,
  correctAnswer: PropTypes.string,
  onClick: PropTypes.func,
};

import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import palette from "../../styles/palette";

function Text({ className, value, ...props }) {
  return (
    <TextStyled
      dangerouslySetInnerHTML={{ __html: value }}
      className={className}
      {...props}
    />
  );
}

export default Text;

const TextStyled = styled.span`
  display: inline-block;
  ${({
    width = "100%",
    padding = null,
    backgroundColor = "inherit",
    borderRadius = "4px",
    hasBorder = false,
    borderColor = "black",
    textAlign = "start",
    fontColor = "inherit",
    fontSize = "1rem",
  }) => css`
    width: ${width};
    padding: ${padding};
    background-color: ${backgroundColor === "inherit"
      ? "inherit"
      : palette[backgroundColor]};
    border-radius: ${borderRadius};
    border: ${hasBorder ? `1px solid ${palette[borderColor]}` : "none"};
    text-align: ${textAlign};
    color: ${fontColor === "inherit" ? "inherit" : palette[fontColor]};
    font-size: ${fontSize};
  `}
  &.large {
    font-size: 1.3rem;
    line-height: 2;
    font-weight: bold;
    letter-spacing: 0.05rem;
  }
  &.medium {
    font-size: 1.1rem;
    line-height: 1.5;
    letter-spacing: 0.03rem;
  }
  &.small {
    font-size: 1rem;
    line-height: 1;
    letter-spacing: 0.03rem;
  }
`;

Text.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
};

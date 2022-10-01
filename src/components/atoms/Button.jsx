import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import palette from "../../styles/palette";

const Button = ({ type, className, children, onClick, ...props }) => {
  return (
    <ButtonStyled
      type={type}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

export default React.memo(Button);

const ButtonStyled = styled.button`
  display: inline-block;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({
    width = "auto",
    height = "auto",
    margin = "5px",
    padding = "5px 10px",
    backgroundColor = "transparent",
    borderRadius = "20px",
    hasBorder = false,
    borderWeight = "1px",
    borderColor = "black",
    fontColor = "black",
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
    color: ${palette[fontColor]};
  `}
  &.large {
    font-size: 1.3rem;
  }
  &.medium {
    font-size: 1.1rem;
  }
  &.small {
    font-size: 1rem;
  }
`;

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  className: "medium",
};

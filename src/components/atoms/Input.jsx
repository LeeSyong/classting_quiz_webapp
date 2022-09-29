import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import palette from "../../styles/palette";

const Input = ({ name, value, placeholder, ...props }) => {
  return (
    <InputStyled
      name={name}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;

const InputStyled = styled.input`
  ${({
    width = "auto",
    height = "auto",
    margin = "10px",
    padding = "12px 10px",
    backgroundColor = "transparent",
    borderRadius = "4px",
    hasBorder = true,
    borderColor = "black",
    fontColor = "black",
    placeholderColor = "gray",
    fontSize = "14px",
  }) => css`
    width: ${width};
    height: ${height};
    margin: ${margin};
    padding: ${padding};
    background-color: ${palette[backgroundColor]};
    border-radius: ${borderRadius};
    border: ${hasBorder ? `1px solid ${palette[borderColor]}` : "none"};
    color: ${palette[fontColor]};
    &::placeholder {
      color: ${palette[placeholderColor]};
    }
    font-size: ${fontSize};
  `}
`;

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

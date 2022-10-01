import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import palette from "../../styles/palette";

const Textarea = ({ name, value, placeholder, onChange, ...props }) => {
  return (
    <TextareaStyled
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  );
};

export default Textarea;

const TextareaStyled = styled.textarea`
  ${({
    width = "100%",
    height = "100%",
    margin = "0",
    padding = "12px 10px",
    backgroundColor = "transparent",
    borderRadius = "10px",
    hasBorder = true,
    borderColor = "black",
    fontColor = "black",
    placeholderColor = "gray",
    fontSize = "1rem",
    resize = "none",
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
    resize: ${resize};
  `};
`;

Textarea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

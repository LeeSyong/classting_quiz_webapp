import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

function Image({ width, height, src, alt, ...props }) {
  return (
    <ImageWrapper width={width} height={height}>
      <ImageStyled src={src} alt={alt} {...props} />
    </ImageWrapper>
  );
}

export default Image;

const ImageWrapper = styled.div`
  ${({ width = "auto", height = "auto" }) => css`
    width: ${width};
    height: ${height};
  `}
`;

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit || "contain"};
  background-color: inherit;
`;

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

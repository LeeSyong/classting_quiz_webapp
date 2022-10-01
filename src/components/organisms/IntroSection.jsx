import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Intro from "../molecules/Intro";

function IntroSection({ onClick }) {
  return (
    <IntroSectionStyled>
      <Intro onClick={onClick} />
    </IntroSectionStyled>
  );
}

export default IntroSection;

const IntroSectionStyled = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

IntroSection.propTypes = {
  onClick: PropTypes.func,
};

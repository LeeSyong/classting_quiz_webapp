import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Header from "../organisms/Header";

function BaseTemplate({ children }) {
  return (
    <BaseTemplateStyled>
      <Header padding="0 40px" height="100px" />
      <Main>{children}</Main>
    </BaseTemplateStyled>
  );
}

export default BaseTemplate;

const BaseTemplateStyled = styled.div`
  margin: 15px;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 160px);
  min-height: 500px;
  margin-top: 30px;
  padding: 10px 20px;
  border-radius: 10px;
  -moz-box-shadow: 0px 0px 10px 5px rgba(128, 128, 128, 0.3);
  -webkit-box-shadow: 0px 0px 10px 5px rgba(128, 128, 128, 0.3);
  box-shadow: 0px 0px 10px 5px rgba(128, 128, 128, 0.3);
  overflow: auto;
`;

BaseTemplate.propTypes = {
  children: PropTypes.node,
};

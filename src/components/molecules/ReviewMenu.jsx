import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../atoms/Button";

import { REVIEW_MENU } from "../../constants/text";

function ReviewMenu({ handleRetryButtonClick, handleNoteButtonClick }) {
  return (
    <ReviewMenuStyled>
      {REVIEW_MENU.map((text, index) => (
        <Button
          key={index}
          children={text}
          onClick={index === 0 ? handleRetryButtonClick : handleNoteButtonClick}
          width="50%"
          padding="10px 10px"
          hasBorder={true}
          borderWeight="2px"
          borderColor="green"
          fontColor="green"
        />
      ))}
    </ReviewMenuStyled>
  );
}

export default ReviewMenu;

const ReviewMenuStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

ReviewMenu.propTypes = {
  handleRetryButtonClick: PropTypes.func,
  handleNoteButtonClick: PropTypes.func,
};

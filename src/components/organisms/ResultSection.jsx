import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";

import ReviewMenu from "../molecules/ReviewMenu";
import Text from "../atoms/Text";

import palette from "../../styles/palette";

import { REVIEW_TEXT } from "../../constants/text";

Chart.register([ArcElement, Tooltip]);

function ResultSection({
  chartData,
  handleRetryButtonClick,
  handleNoteButtonClick,
}) {
  return (
    <ResultsStyled>
      {chartData.length !== 0 && (
        <ResultText>
          {REVIEW_TEXT.map((value, index) => (
            <Text
              key={index}
              className="large"
              value={`${value}: ${chartData[index]}개`}
              textAlign="center"
            />
          ))}
        </ResultText>
      )}
      <ResultChart>
        <Pie
          data={{
            labels: ["정답", "오답"],
            datasets: [
              {
                label: "정오답 비율 차트",
                data: chartData,
                backgroundColor: [palette.blue, palette.red],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </ResultChart>
      <ReviewMenu
        handleRetryButtonClick={handleRetryButtonClick}
        handleNoteButtonClick={handleNoteButtonClick}
      />
    </ResultsStyled>
  );
}

export default ResultSection;

const ResultsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const ResultText = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const ResultChart = styled.div`
  margin: 40px auto;
`;

ResultSection.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.number),
  handleRetryButtonClick: PropTypes.func,
  handleNoteButtonClick: PropTypes.func,
};

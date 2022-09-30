import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";

import ReviewMenu from "../molecules/ReviewMenu";
import Table from "../atoms/Table";

import palette from "../../styles/palette";

import { RESULT_TABLE_HEAD } from "../../constants/text";

Chart.register([ArcElement, Tooltip]);

function ResultSection({
  chartData,
  elapsedTime,
  handleRetryButtonClick,
  handleNoteButtonClick,
}) {
  return (
    <ResultsStyled>
      {chartData.length !== 0 && (
        <Table
          tableHead={RESULT_TABLE_HEAD}
          tableData={[elapsedTime, chartData[0], chartData[1]]}
          boxShadow={`0 0 0 2px ${palette.green}`}
          fontColor={palette.green}
          fontSize="1.1rem"
        />
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

const ResultChart = styled.div`
  margin: 40px auto;
`;

ResultSection.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.number),
  elapsedTime: PropTypes.string,
  handleRetryButtonClick: PropTypes.func,
  handleNoteButtonClick: PropTypes.func,
};

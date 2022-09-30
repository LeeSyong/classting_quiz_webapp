import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useElapsedTime from "../hook/useElapsedTime";

import BaseTemplate from "../components/templates/BaseTemplate";
import ResultSection from "../components/organisms/ResultSection";

import { ERROR } from "../constants/text";

function Result() {
  const navigate = useNavigate();
  const { status, data, error } = useSelector((state) => state.quizzes);
  const [chartData, setchartData] = useState([]);
  const elapsedTime = useElapsedTime();

  useEffect(() => {
    if (status === "idle" && data.allIds.length) {
      let correctCount = 0;
      let incorrectCount = 0;

      data.allIds.forEach((id) => {
        if (data[id].isCorrect) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      });

      setchartData([correctCount, incorrectCount]);
    }

    if (status === "idle" && error) {
      alert(ERROR);

      navigate("/");
    }
  }, [status, data, error, navigate]);

  return (
    <BaseTemplate
      children={
        <ResultSection
          chartData={chartData}
          elapsedTime={elapsedTime}
          handleRetryButtonClick={() => navigate("/quiz/1")}
          handleNoteButtonClick={() => navigate("/notes")}
        />
      }
    />
  );
}

export default Result;

import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetSelectedAnswer } from "../store/quizSlice";
import useElapsedTime from "../hook/useElapsedTime";

import BaseTemplate from "../components/templates/BaseTemplate";
import ResultSection from "../components/organisms/ResultSection";

import { ERROR } from "../constants/text";

function Result() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, data, error } = useSelector((state) => state.quizzes);
  const [chartData, setchartData] = useState([]);
  const elapsedTime = useElapsedTime();

  const handleRetryButtonClick = useCallback(() => {
    navigate("/quiz/1");

    dispatch(resetSelectedAnswer());
  }, [navigate, dispatch]);

  const handleNoteButtonClick = useCallback(
    () => navigate("/notes"),
    [navigate],
  );

  useEffect(() => {
    if (status === "idle" && data.allIds.length) {
      let correctCount = 0;
      let incorrectCount = 0;

      data.allIds.forEach((id) => {
        if (data.byId[id].isCorrect) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      });

      setchartData([correctCount, incorrectCount]);
    }

    if (status === "idle" && error) {
      alert(ERROR.CANNOT_GET_RESULT);

      navigate("/");
    }
  }, [status, data, error, navigate]);

  return (
    <BaseTemplate
      children={
        <ResultSection
          chartData={chartData}
          elapsedTime={elapsedTime}
          handleRetryButtonClick={handleRetryButtonClick}
          handleNoteButtonClick={handleNoteButtonClick}
        />
      }
    />
  );
}

export default Result;

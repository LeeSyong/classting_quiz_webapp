import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchQuiz } from "../store/quizSlice";

import IntroSection from "../components/organisms/IntroSection";
import BaseTemplate from "../components/templates/BaseTemplate";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStartClick = () => {
    dispatch(fetchQuiz());

    navigate("/quiz/1");
  };

  return (
    <BaseTemplate children={<IntroSection onClick={handleStartClick} />} />
  );
}

export default Main;

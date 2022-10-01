import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { decode } from "html-entities";

import BaseTemplate from "../components/templates/BaseTemplate";
import NoteSection from "../components/organisms/NotesSection";

import { ERROR, INFO } from "../constants/text";

function Notes() {
  const navigate = useNavigate();
  const { status, data, error } = useSelector((state) => state.quizzes);
  const [quizResults, setQuizResults] = useState([]);

  const handleWriteButtonClick = useCallback(
    (_, id) => navigate(`/notes/${id}`),
    [navigate],
  );

  useEffect(() => {
    if (status === "idle" && data.allIds.length) {
      const quizResults = data.allIds.map((id) => {
        const quizResult = data.byId[id];

        return {
          ...quizResult,
          question: decode(quizResult.question),
          correct_answer: decode(quizResult.correct_answer),
          selected_answer: decode(quizResult.selected_answer),
        };
      });

      setQuizResults(quizResults);

      return;
    }

    if (status === "idle" && !data.allIds.length) {
      alert(INFO.SOLVE_THE_QUIZZES);
    }

    if (status === "idle" && error) {
      alert(ERROR.CANNOT_GET_NOTE);
    }

    navigate("/");
  }, [status, data, error, navigate]);

  return (
    <BaseTemplate
      children={
        <NoteSection
          quizResults={quizResults}
          onClick={handleWriteButtonClick}
        />
      }
    />
  );
}

export default Notes;

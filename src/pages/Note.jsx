import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../store/quizSlice";

import BaseTemplate from "../components/templates/BaseTemplate";
import NoteSection from "../components/organisms/NoteSection";

import { INFO } from "../constants/text";

function Note() {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.quizzes);
  const { question, correct_answer, selected_answer, note } =
    data.byId[noteId - 1];
  const [quizResult, setQuizResult] = useState({});
  const [value, setValue] = useState(note);

  const handleSaveButtonClick = useCallback(() => {
    if (!value) {
      alert(INFO.CONFIRM_TO_SAVE);
    }

    dispatch(updateNote({ id: noteId - 1, note: value }));

    navigate(-1);
  }, [noteId, value, dispatch, navigate]);

  const handleTextareaChange = useCallback(
    (event) => setValue(event.target.value),
    [],
  );

  useEffect(() => {
    setQuizResult({ question, correct_answer, selected_answer });
  }, [question, correct_answer, selected_answer, navigate]);

  return (
    <BaseTemplate
      children={
        <NoteSection
          quizResult={quizResult}
          value={value}
          onChange={handleTextareaChange}
          onClick={handleSaveButtonClick}
        />
      }
    />
  );
}

export default Note;

import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { update_isCorrect } from "../store/quizSlice";

import BaseTemplate from "../components/templates/BaseTemplate";
import QuizSection from "../components/organisms/QuizSection";

import { ERROR } from "../constants/text";

function Quiz() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, data, error } = useSelector((state) => state.quizzes);
  const [quizData, setQuizData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleAnswerClick = useCallback(
    (event) => {
      const selectedAnswer = event.target.textContent;
      const correctAnswer = data[quizId - 1].correct_answer;

      setSelectedAnswer(selectedAnswer);

      if (selectedAnswer === correctAnswer) {
        dispatch(update_isCorrect({ id: quizId - 1 }));
      }
    },
    [data, quizId, dispatch],
  );

  const handleNextClick = useCallback(() => {
    if (parseInt(quizId) === 5) {
      navigate("/quiz/results");
    } else {
      navigate(`/quiz/${parseInt(quizId) + 1}`);
    }
  }, [quizId, navigate]);

  useEffect(() => {
    if (status === "idle" && data[quizId - 1]) {
      if (data[quizId - 1].isCorrect) {
        return;
      }

      setSelectedAnswer("");

      const currentQuiz = data[quizId - 1];
      const quizData = {
        question: currentQuiz.question,
        answers: [
          ...currentQuiz.incorrect_answers,
          currentQuiz.correct_answer,
        ].sort(() => Math.random() - 0.5),
      };

      setQuizData(quizData);
      setCorrectAnswer(data[quizId - 1].correct_answer);
    }

    if (status === "idle" && error) {
      alert(ERROR);

      navigate("/");
    }
  }, [status, data, quizId, error, navigate]);

  return (
    <BaseTemplate
      children={
        <QuizSection
          quizData={quizData}
          handleAnswerClick={handleAnswerClick}
          handleNextClick={handleNextClick}
          selectedAnswer={selectedAnswer}
          correctAnswer={correctAnswer}
        />
      }
    />
  );
}

export default Quiz;

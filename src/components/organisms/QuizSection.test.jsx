import { render, screen, cleanup } from "../../test-utils";
import userEvent from "@testing-library/user-event";

import QuizSection from "./QuizSection";

import palette from "../../styles/palette";

const quizData = { question: "질문", answers: ["1", "2", "3", "4"] };
const handleAnswerClick = jest.fn();
const handleNextClick = jest.fn();

afterEach(cleanup);

describe("QuizSection 테스트", () => {
  test("QuizSection은 4개의 보기와 함께 렌더링 되어야 한다.", () => {
    render(
      <QuizSection
        quizData={quizData}
        handleAnswerClick={handleAnswerClick}
        handleNextClick={handleNextClick}
        selectedAnswer="1"
        correctAnswer="2"
      />,
    );

    const buttons = screen.getAllByRole("button");
    const examples = buttons.filter(
      (example) => getComputedStyle(example).color === palette.white,
    );

    expect(examples.length).toBe(4);
  });

  test("QuizSection에서 보기를 클릭하면 'handleAnswerClick 함수'가 한 번 실행되어야 한다.", async () => {
    const user = userEvent.setup();

    render(
      <QuizSection
        quizData={quizData}
        handleAnswerClick={handleAnswerClick}
        handleNextClick={handleNextClick}
        selectedAnswer=""
        correctAnswer="2"
      />,
    );

    const button = screen.getByRole("button", { name: "1" });

    await user.click(button);

    expect(handleAnswerClick).toBeCalledTimes(1);
  });
});

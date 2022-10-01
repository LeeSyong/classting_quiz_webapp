import { render, screen, cleanup } from "../../test-utils";

import NoteSection from "./NoteSection";

afterEach(cleanup);
beforeEach(() => {
  const handleClick = jest.fn();
  const quizResult = {
    question: "질문",
    correct_answer: "정답",
    selected_answer: "선택 답안",
  };

  render(<NoteSection quizResult={quizResult} onClick={handleClick} />);
});

describe("NoteSection 테스트", () => {
  test("NoteSection은 퀴즈 데이터와 함께 렌더링 되어야 한다.", () => {
    const text = screen.getByText("정답 | 정답");

    expect(text).toBeInTheDocument();
  });

  test("NoteSection은 버튼과 함께 렌더링 되어야 한다.", () => {
    const button = screen.getByRole("button", { name: "저장하기" });

    expect(button).toBeInTheDocument();
  });
});

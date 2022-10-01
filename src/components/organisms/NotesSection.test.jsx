import { render, screen, cleanup } from "../../test-utils";
import userEvent from "@testing-library/user-event";

import NotesSection from "./NotesSection";

const handleWrite = jest.fn();
const quizResults = [
  {
    question: "질문 1",
    correct_answer: "정답 1",
    selected_answer: "선택 답안 1",
  },
  {
    question: "질문2 ",
    correct_answer: "정답 2",
    selected_answer: "선택 답안 2",
  },
];

afterEach(cleanup);

describe("NotesSection 테스트", () => {
  test("NotesSection은 5개의 '작성' 버튼과 함께 렌더링 되어야 한다.", () => {
    render(<NotesSection quizResults={quizResults} onClick={handleWrite} />);

    const buttons = screen.getAllByRole("button", { name: "작성" });

    expect(buttons.length).toBe(2);
  });

  test("NotesSection에서 '작성' 버튼을 클릭하면 'handleWrite 함수'가 한 번 실행되어야 한다.", async () => {
    const user = userEvent.setup();

    render(<NotesSection quizResults={quizResults} onClick={handleWrite} />);

    const buttons = screen.getAllByRole("button", { name: "작성" });

    await user.click(buttons[0]);

    expect(handleWrite).toBeCalledTimes(1);
  });
});

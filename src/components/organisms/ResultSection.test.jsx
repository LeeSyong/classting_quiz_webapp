import { render, screen, cleanup } from "../../test-utils";
import userEvent from "@testing-library/user-event";

import ResultSection from "./ResultSection";

const chartData = [1, 2];
const handleRetryButtonClick = jest.fn();
const handleNoteButtonClick = jest.fn();

afterEach(cleanup);

describe("ResultSection 테스트", () => {
  test("ResultSection은 2개의 Review Menu와 함께 렌더링 되어야 한다.", async () => {
    render(
      <ResultSection
        chartData={chartData}
        elapsedTime="00분 05초"
        handleRetryButtonClick={handleRetryButtonClick}
        handleNoteButtonClick={handleNoteButtonClick}
      />,
    );

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(2);
  });

  test("ResultSection에서 '다시 풀기' 버튼을 클릭하면 'handleRetryButtonClick 함수'가 한 번 실행된다.", async () => {
    const user = userEvent.setup();

    render(
      <ResultSection
        chartData={chartData}
        elapsedTime="00분 05초"
        handleRetryButtonClick={handleRetryButtonClick}
        handleNoteButtonClick={handleNoteButtonClick}
      />,
    );

    const nextButton = screen.getByRole("button", { name: "다시 풀기" });

    await user.click(nextButton);

    expect(handleRetryButtonClick).toBeCalledTimes(1);
    expect(handleNoteButtonClick).toBeCalledTimes(0);
  });
});

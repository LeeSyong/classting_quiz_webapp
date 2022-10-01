import { render, screen, cleanup } from "../../test-utils";

import IntroSection from "./IntroSection";

afterEach(cleanup);
beforeEach(() => {
  render(<IntroSection />);
});

describe("IntroSection 테스트", () => {
  test("IntroSection은 소개글과 함께 렌더링 되어야 한다.", () => {
    const introduction = screen.getByText("총 5문제가 준비되어 있습니다.");

    expect(introduction).toBeInTheDocument();
  });

  test("IntroSection은 버튼과 함께 렌더링 되어야 한다.", () => {
    const button = screen.getByRole("button", {
      name: "퀴즈 풀기",
    });

    expect(button).toBeInTheDocument();
  });
});

import { render, screen, cleanup } from "../../test-utils";

import Header from "./Header";

afterEach(cleanup);
beforeEach(() => {
  render(<Header />);
});

describe("Header 테스트", () => {
  test("헤더는 이미지와 함께 렌더링 되어야 한다.", () => {
    const logo = screen.getByAltText("logo.png");

    expect(logo).toBeInTheDocument();
  });

  test("헤더는 메뉴와 함께 렌더링 되어야 한다.", () => {
    const menuItem = screen.getByText("퀴즈");

    expect(menuItem).toBeInTheDocument();
  });
});

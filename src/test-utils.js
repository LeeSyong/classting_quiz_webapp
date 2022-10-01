import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store";

const allWrappers = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>;
    </BrowserRouter>
  );
};

const customRender = (component, options) =>
  render(component, { wrapper: allWrappers, ...options });

export * from "@testing-library/react";

export { customRender as render };

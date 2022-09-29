import { withRouter } from "storybook-addon-react-router-v6";

import GlobalStyle from "../src/styles/GlobalStyle";

export const decorators = [
  withRouter,
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

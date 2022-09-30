import { navigate } from "@storybook/addon-links";

import ResultSection from "./ResultSection";

export default {
  title: "organisms/ResultSection",
  component: ResultSection,
};

const Template = (args) => <ResultSection {...args} />;

export const TestResultSection = Template.bind({});
TestResultSection.args = {
  chartData: [3, 2],
  elapsedTime: "0분 8초",
  handleRetryButtonClick: () => navigate("/quiz/1"),
  handleNoteButtonClick: () => navigate("/notes"),
};

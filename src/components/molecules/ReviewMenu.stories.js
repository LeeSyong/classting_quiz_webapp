import { navigate } from "@storybook/addon-links";

import ReviewMenu from "./ReviewMenu";

export default {
  title: "molecules/ReviewMenu",
  component: ReviewMenu,
};

const Template = (args) => <ReviewMenu {...args} />;

export const TestReviewMenu = Template.bind({});
TestReviewMenu.args = {
  handleRetryButtonClick: navigate("/quiz/1"),
  handleNoteButtonClick: navigate("/notes"),
};

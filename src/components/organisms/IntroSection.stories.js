import { navigate } from "@storybook/addon-links";

import IntroSection from "./IntroSection";

export default {
  title: "organisms/IntroSection",
  component: IntroSection,
};

const Template = (args) => <IntroSection {...args} />;

export const TestIntroSection = Template.bind({});
TestIntroSection.args = {
  onClick: () => navigate("/quiz/1"),
};

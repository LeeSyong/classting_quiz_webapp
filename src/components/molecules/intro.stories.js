import { navigate } from "@storybook/addon-links";

import Intro from "./Intro";

export default {
  title: "molecules/Intro",
  component: Intro,
};

const Template = (args) => <Intro {...args} />;

export const TestIntro = Template.bind({});
TestIntro.args = {
  onClick: () => navigate("/"),
};

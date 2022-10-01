import Examples from "./Examples";

export default {
  title: "molecules/Examples",
  component: Examples,
};

const Template = (args) => <Examples {...args} />;

export const TestExamples = Template.bind({});
TestExamples.args = {
  examples: ["보기 1", "보기 2", "보기 3", "보기 4"],
};

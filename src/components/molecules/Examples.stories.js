import Examples from "./Examples";

export default {
  title: "molecules/Examples",
  component: Examples,
};

const Template = (args) => <Examples {...args} />;

export const TestExamples = Template.bind({});
TestExamples.args = {
  examples: [
    {
      id: 0,
      content: "보기 1",
    },
    {
      id: 1,
      content: "보기 2",
    },
    {
      id: 2,
      content: "보기 3",
    },
    {
      id: 3,
      content: "보기 4",
    },
  ]
};

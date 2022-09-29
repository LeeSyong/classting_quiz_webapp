import Text from "./Text";

export default {
  title: "atoms/Text",
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Info = Template.bind({});
Info.args = {
  className: "large",
  value: "총 5문제가 준비되어 있습니다.",
};

export const Question = Template.bind({});
Question.args = {
  className: "medium",
  value: "Q: 이것은 무엇일까요?",
};

export const Result = Template.bind({});
Result.args = {
  className: "small",
  value: "결과",
};

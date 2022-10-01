import Textarea from "./Textarea";

export default {
  title: "atoms/Textarea",
  component: Textarea,
};

const Template = (args) => <Textarea {...args} />;

export const TestTextarea = Template.bind({});
TestTextarea.args = {
  name: "note",
  value: "",
  placeholder: "노트를 작성해주세요.",
};

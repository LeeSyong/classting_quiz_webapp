import Input from "./Input";

export default {
  title: "atoms/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Search = Template.bind({});
Search.args = {
  name: "keyword",
  value: "keyword",
  placeholder: "검색어를 입력해주세요.",
};

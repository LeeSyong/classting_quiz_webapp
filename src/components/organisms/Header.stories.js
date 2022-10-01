import Header from "./Header";

export default {
  title: "organisms/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const TestHeader = Template.bind({});
TestHeader.args = {
  height: "100px",
  padding: "0 40px",
  shadowColor: "lightgray",
};

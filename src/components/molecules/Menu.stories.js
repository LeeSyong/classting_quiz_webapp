import Menu from "./Menu";

export default {
  title: "molecules/Menu",
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const TestMenu = Template.bind({});
TestMenu.args = {
  menuList: [
    {
      name: "퀴즈",
      url: "/",
    },
    {
      name: "오답 노트",
      url: "/notes",
    },
  ],
  fontColor: "green",
};

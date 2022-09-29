import Button from "./Button";

export default {
  title: "atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  type: "button",
  className: "large",
  children: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  type: "button",
  className: "medium",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  type: "button",
  className: "small",
  children: "Button",
};

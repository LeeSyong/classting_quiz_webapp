import Image from "./Image";

import logo from "../../assets/logo.png";

export default {
  title: "atoms/Image",
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Logo = Template.bind({});
Logo.args = {
  width: "200px",
  src: logo,
  alt: "Logo.png",
};

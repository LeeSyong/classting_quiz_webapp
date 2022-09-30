import BaseTemplate from "./BaseTemplate";
import IntroSection from "../organisms/IntroSection";
import QuizSection from "../organisms/QuizSection";

export default {
  title: "templates/BaseTemplate",
  component: BaseTemplate,
};

const Template = (args) => <BaseTemplate {...args} />;

export const IntroTempalte = Template.bind({});
IntroTempalte.args = {
  children: <IntroSection />,
};

export const QuizTemplate = Template.bind({});
QuizTemplate.args = {
  children: <QuizSection examples={["보기 1", "보기 2", "보기 3", "보기 4"]} />,
};

import QuizSection from "./QuizSection";

export default {
  title: "organisms/QuizSection",
  component: QuizSection,
};

const Template = (args) => <QuizSection {...args} />;

export const TestQuizSection = Template.bind({});
TestQuizSection.args = {
  quizData: {
    question: "정답을 선택해주세요.",
    answers: [
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
    ],
  },
};

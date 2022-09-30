import QuizSection from "./QuizSection";

export default {
  title: "organisms/QuizSection",
  component: QuizSection,
};

const Template = (args) => <QuizSection {...args} />;

export const TestQuizSection = Template.bind({});
TestQuizSection.args = {
  quizData: {
    question: "이것은 무엇입니까?",
    answers: ["보기 1", "보기 2", "보기 3", "보기 4"],
  },
  selectedAnswer: "보기 2",
  correctAnswer: "보기 3",
};

import QuizTableList from "./QuizTableList";

export default {
  title: "molecules/QuizTab;eList",
  component: QuizTableList,
};

const Template = (args) => <QuizTableList {...args} />;

export const TestQuizTableList = Template.bind({});
TestQuizTableList.args = {
  quizResults: [
    {
      question: "첫 번째 질문입니다. 답안을 선택해주세요.",
      correct_answer: "정답 1",
      selected_answer: "실제로 선택한 답안 1",
    },
    {
      question: "두 번째 질문입니다. 답안을 선택해주세요.",
      correct_answer: "정답 2",
      selected_answer: "실제로 선택한 답안 2",
    },
    {
      question: "첫 번째 질문입니다. 답안을 선택해주세요.",
      correct_answer: "정답 3",
      selected_answer: "실제로 선택한 답안 3",
    },
    {
      question: "첫 번째 질문입니다. 답안을 선택해주세요.",
      correct_answer: "정답 4",
      selected_answer: "실제로 선택한 답안 4",
    },
  ],
};

const INTRO = [
  "총 5문제가 준비되어 있습니다.",
  "문제 풀이 시작과 동시에 타이머가 작동합니다.",
  "문제 풀이 완료 후 정오답 기록을 확인하실 수 있습니다.",
  "각 문제에 대한 오답 노트를 작성하실 수 있습니다.",
];

const ERROR = {
  CANNOT_GET_QUIZ: "퀴즈를 가져올 수 없습니다. 다시 시도해주세요.",
  CANNOT_GET_RESULT:
    "결과를 가져오는 데 에러가 발생했습니다. 다시 시도해주세요.",
  CANNOT_GET_NOTE: "오답 노트에 접근할 수 없습니다. 다시 시도해주세요.",
  CANNOT_WRITE_NOTE: "에러로 인해 오답 노트를 작성할 수 없습니다.",
};

const INFO = {
  SOLVE_THE_QUIZZES: "먼저 '퀴즈 풀기' 버튼을 눌러 퀴즈를 풀어주세요.",
  CONFIRM_TO_SAVE: "빈 값을 저장하시겠습니까? 이전 내용이 사라집니다.",
};

const REVIEW_MENU = ["다시 풀기", "오답 노트"];

const RESULT_TABLE_HEAD = ["풀이 시간", "정답 개수", "오답 개수"];

export { INTRO, ERROR, INFO, REVIEW_MENU, RESULT_TABLE_HEAD };

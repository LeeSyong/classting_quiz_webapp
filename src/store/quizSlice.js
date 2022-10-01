import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  data: {
    byId: {},
    allIds: [],
  },
  error: null,
};

export const fetchQuiz = createAsyncThunk(
  "quiz/fetchQuiz",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple",
      );

      if (!response.ok) {
        return rejectWithValue(response.status);
      }

      return response.json();
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  },
);

const quizSlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {
    checkIfIsCorrect: (state, action) => {
      const { id, selected_answer } = action.payload;

      state.data.byId[id] = {
        ...state.data.byId[id],
        isCorrect: selected_answer === state.data.byId[id].correct_answer,
        selected_answer: selected_answer,
      };
    },
    resetSelectedAnswer: (state, action) => {
      state.data.allIds.forEach((id) => {
        state.data.byId[id].isCorrect = false;
        state.data.byId[id].selected_answer = "";
      });
    },
    updateNote: (state, action) => {
      const { id, note } = action.payload;

      state.data.byId[id].note = note;
    },
  },
  extraReducers: {
    [fetchQuiz.pending.type]: (state, action) => ({
      status: "loading",
      data: {},
      error: null,
    }),
    [fetchQuiz.fulfilled.type]: (state, action) => {
      const { results } = action.payload;

      const quizzes = results.map((result, index) => ({
        id: index,
        question: result.question,
        correct_answer: result.correct_answer,
        incorrect_answers: result.incorrect_answers,
        isCorrect: false,
        selected_answer: "",
        note: "",
      }));

      state.status = "idle";
      state.data = {
        byId: {},
        allIds: [],
      };

      quizzes.forEach((quiz) => {
        state.data.byId[quiz.id] = quiz;
        state.data.allIds.push(quiz.id);
      });
    },
    [fetchQuiz.rejected.type]: (state, action) => ({
      status: "idle",
      data: {},
      error: action.payload,
    }),
  },
});

export const { checkIfIsCorrect, resetSelectedAnswer, updateNote } =
  quizSlice.actions;

export default quizSlice;

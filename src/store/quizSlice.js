import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {
    status: "idle",
    data: {
      byDd: {},
      allIds: [],
    },
    error: null,
  },
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
    update_isCorrect: (state, action) => {
      const { id } = action.payload;

      state.quizzes.data[id].isCorrect = true;
    },
  },
  extraReducers: {
    [fetchQuiz.pending.type]: (state) => {
      state.quizzes = {
        status: "loading",
        data: {},
        error: null,
      };
    },
    [fetchQuiz.fulfilled.type]: (state, action) => {
      const { results } = action.payload;

      const quizzes = results.map((result, index) => ({
        id: index,
        question: result.question,
        correct_answer: result.correct_answer,
        incorrect_answers: result.incorrect_answers,
        isCorrect: false,
        note: "",
      }));

      state.quizzes = {
        ...state.quizzes,
        status: "idle",
        data: {
          byId: {},
          allIds: [],
        },
        error: null,
      };

      quizzes.forEach((quiz) => {
        state.quizzes.data[quiz.id] = quiz;
        state.quizzes.data.allIds.push(quiz.id);
      });
    },
    [fetchQuiz.rejected.type]: (state, action) => {
      state.quizzes = {
        status: "idle",
        data: {},
        error: action.payload,
      };
    },
  },
});

export const { update_isCorrect } = quizSlice.actions;

export default quizSlice;

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

import quizSlice from "./quizSlice";

export default configureStore({
  reducer: {
    quizzes: quizSlice.reducer,
  },
  middleware: [logger, thunk],
});

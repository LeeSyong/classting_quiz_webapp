import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Quiz from "./pages/Quiz";
import Notes from "./pages/Notes";
import Result from "./pages/Result";

import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/quiz/result" element={<Result />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;

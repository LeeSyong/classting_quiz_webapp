import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Notes from "./pages/Notes";
import Note from "./pages/Note";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";

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
        <Route path="/notes/:noteId" element={<Note />} />
      </Routes>
    </>
  );
}

export default App;

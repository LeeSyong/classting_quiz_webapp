import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Quiz from "./pages/Quiz";

import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;

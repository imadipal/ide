import React from 'react';
import "./App.css";
import Foot from "./layouts/Foot";
import { HomePage } from "./layouts/HomePage";
import Nav from "./layouts/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuestionPage } from "./layouts/Question";
import { Problem } from "./utils/problem";
import { reverseLinkedList } from './utils/reverse-linked-list';

type WorkspaceProps = {
  problem: Problem;
};

// eslint-disable-next-line no-empty-pattern
const App: React.FC<WorkspaceProps> = ({ }) => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Nav />
        <div className="flex-grow-1">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route index element={<HomePage />} />
              <Route path="/problem" element={<QuestionPage problem={reverseLinkedList} />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Foot />
      </div>
    </>
  );
}

export default App;

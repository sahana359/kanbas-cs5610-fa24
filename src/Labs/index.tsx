import Lab1 from "./Lab1";
import { Routes, Route } from "react-router-dom";
import TOC from "./TOC";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Sahana Rajashekara</h1>
      <h2>Section 01</h2>
      <a href="https://github.com/sahana359/kanbas-cs5610-fa24" id="wd-github" target="_blank" rel="noreferrer">
        GitHub Repository
      </a>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<h2>Lab2</h2>} />
        <Route path="Lab3" element={<h2>Lab3</h2>} />
      </Routes>
    </div>
  );
}

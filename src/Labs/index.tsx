import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import { Routes, Route } from "react-router-dom";
import TOC from "./TOC";
import Lab4 from "./Lab4";
import store from "./Lab4/store";
import { Provider } from "react-redux";

export default function Labs() {
  return (
    <Provider store={store}>
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
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4/*" element={<Lab4/>} />
      </Routes>
    </div>
    </Provider>
  );
}

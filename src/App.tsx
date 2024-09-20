import React from 'react';
import Labs from "./Labs";
import Kanbas from './Kanbas';
import {HashRouter, Routes, Route, Navigate} from "react-router-dom"
function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <Routes>
          <Route path="/" element={<Navigate to="Kanbas"/>}/>
            <Route path = "/Kanbas/*" element = {<Kanbas />} />
            <Route path = "/Labs/*" element = {<Labs />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

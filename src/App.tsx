import React from 'react';
import Labs from "./Labs";
import Kanbas from './Kanbas';
import {HashRouter, Routes, Route, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import store from "./Kanbas/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
          <Route path="/" element={<Navigate to="Kanbas"/>}/>
            <Route path = "/Kanbas/*" element = {<Kanbas />} />
            <Route path = "/Labs/*" element = {<Labs />} />
          </Routes>
        </div>
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;

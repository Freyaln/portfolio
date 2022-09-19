import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Homepage from "./Components/Organisms/Homepage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              {/*<Route path="Project/:Id" element={<Homepage />} />*/}
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
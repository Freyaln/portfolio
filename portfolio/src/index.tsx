import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ProjectDetail from './Components/Organisms/ProjectDetail/ProjectDetail';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail/:projectName" element={<ProjectDetail />} />
        {/*<Route path="Project/:Id" element={<Homepage />} />*/}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

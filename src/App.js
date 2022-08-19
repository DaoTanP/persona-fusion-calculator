import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap';
import 'material-symbols'
import './css/bootstrap-custom.css'
import React from 'react';
import { Route, Routes, HashRouter, Outlet } from 'react-router-dom';
import P3pRecipeGenerator from './pages/persona3portable/P3pRecipeGenerator';
import NoPage from './pages/NoPage';
import HomePage from './pages/HomePage';
import P3pFusion from './pages/persona3portable/P3pFusion';
import PageLayout from './pages/PageLayout';

function App() {


  return (

    <HashRouter>
      <Routes>
        {/* render shared part (component) of the website (header, footer,....) */}
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/persona-3-portable/recipe-generator" element={<P3pRecipeGenerator />} >
            <Route path="/persona-3-portable/recipe-generator/:personaName" element={<P3pRecipeGenerator />} />
          </Route>
          <Route path="/persona-3-portable/fusion" element={<P3pFusion />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

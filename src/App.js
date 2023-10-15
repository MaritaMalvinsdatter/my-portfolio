// App.js:

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout.jsx';
import Home from '../src/pages/Home.jsx';
import Projects from '../src/pages/Projects.jsx';
import About from '../src/pages/About.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </React.StrictMode>
  );
}

export default App;

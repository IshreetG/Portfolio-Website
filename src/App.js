import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Home from './Pages/Home';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Projects' element={<Projects />} />
    </Routes>
  </BrowserRouter>
);
}
export default App;

//ReactDOM.render(<App />, document.getElementById('root'));
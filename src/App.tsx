import React, { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [tab, setCurrentTab] = useState('Dashboard')

  return (
    <div className="app">

      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className='display'>
        <Header tab={tab} mode={darkMode} />
        <Content tab={tab} mode={darkMode} />
      </div>

    </div>
  );
}

export default App;

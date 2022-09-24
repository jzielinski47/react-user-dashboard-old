import React, { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [tab, setCurrentTab] = useState('Dashboard')

  return (
    <div className="app">

      <Sidebar />
      <div className='display'>
        <Header tab={tab} />
        <Content />
      </div>

    </div>
  );
}

export default App;

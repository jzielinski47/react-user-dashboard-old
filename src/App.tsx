import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

let mode: string = 'light';

function App() {
  return (
    <div className="app">

      <Sidebar />
      <div className='display'>
        <Header />
        <Content />
      </div>

    </div>
  );
}

export default App;

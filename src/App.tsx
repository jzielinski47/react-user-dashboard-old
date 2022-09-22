import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">

      {/* App body */}

      {/* sidebar */}
      <Sidebar />

      {/* general-panel */}
      <div className='general-panel'>
        {/* header */}
        <Header />
        <Content />
        {/* main content display */}


      </div>






      {/* panel */}

    </div>
  );
}

export default App;

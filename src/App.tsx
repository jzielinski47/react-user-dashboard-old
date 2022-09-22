import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">

      {/* App body */}

      {/* sidebar */}
      <Sidebar />

      {/* main display */}
      <div className='main-display'>
        {/* header */}
        <Header />

        {/* panel display */}


      </div>






      {/* panel */}

    </div>
  );
}

export default App;

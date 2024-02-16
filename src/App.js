import React from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>

      {/* App Body */}
        {/*  Side bar*/}
    <div className="app_body">
        {/* Feed */}
        {/* widgets */}
      <Sidebar/>
      
    </div>

    </div>
  );
}

export default App;

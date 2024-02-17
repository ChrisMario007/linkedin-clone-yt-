import React from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';




function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app_body">
        {/*  Side bar*/}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* widgets */}
        <Widget/>
      </div>

    </div>
  );
}

export default App;

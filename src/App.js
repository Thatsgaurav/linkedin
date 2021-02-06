import React from 'react';
import './App.css';
import Header from './Header';
import Feed from './Feed';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__body">
        <Sidebar />
      {/* Sidebar */}
      <Feed />
      {/* Widgets */}
      </div>
    </div>
  );
}

export default App;

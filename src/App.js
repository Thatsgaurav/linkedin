import React from 'react';
import { useSelector } from "react-redux"
import './App.css';
import Header from './Header';
import Feed from './Feed';
import Sidebar from './Sidebar';
import { selectUser } from './features/userSlice';
import Login from './Login';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="App">
      <Header />

      {!user ? <Login /> :(
      <div className="app__body">
        <Sidebar />
      {/* Sidebar */}
      <Feed />
      {/* Widgets */}
      </div>
      )}

    </div>
  );
}

export default App;

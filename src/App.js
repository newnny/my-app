import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from './container/MenuBar/MenuBar';
import Main from './container/Main';
import AppRouter from './container/AppRouter/AppRouter';
function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#f7f5f2", margin: 30 }}>
        <AppRouter />
        <MenuBar />
        <Main />
      </div>
    </Router>
  );
}

export default App;

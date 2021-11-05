import React from 'react';
import { Typography } from '@mui/material';
import MenuBar from './container/MenuBar/MenuBar';
import Main from './container/Main';

function App() {
  return (
    <div style={{ backgroundColor: "#f7f5f2", margin: 30 }}>
      <MenuBar />
      <Main />
    </div>
  );
}

export default App;

import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';
import Main from './container/Main';

function App() {
  return (
    <div style={{ backgroundColor: "#f7f5f2", margin: 30 }}>
      <div style={{ display: "flex", justifyContent: "center", margin: "30px 0px" }}>
        <Typography> Contact / And / More</Typography>
      </div>
      <Main />
    </div>
  );
}

export default App;

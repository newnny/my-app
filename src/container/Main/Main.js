import React, { Fragment } from "react"
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';
const Main = () => {
  return (
    <div style={{ backgroundColor: "#f7f5f2" }}>
      <Grid container>
        <Grid item sm={6}>
          <Typography variant="h1">
            Hello!
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography>
            This is my personal blog mainly use for my portfolios and collecting thoughts and things that I want to store.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Main
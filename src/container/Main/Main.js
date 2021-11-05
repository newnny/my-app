import React from "react"
import { Typography, Grid } from '@mui/material';
import { mainCSS } from "./MainCss";

const Main = () => {
  const classes = mainCSS()
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item sm={6}>
          <Typography variant="h1">
            -> Welcome.
          </Typography>
        </Grid>
        <Grid item sm={6} className={classes.explainGrid}>
          <Typography>
            This is my personal blog mainly use for my portfolios and collecting thoughts and things that I want to store.
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item sm={6}>
          <Typography variant="h1">
          -> Portfolio.
          </Typography>
        </Grid>
        <Grid item sm={6} className={classes.explainGrid}>
          <Typography>
            portfolios
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item sm={6}>
          <Typography variant="h1">
          -> More.
          </Typography>
        </Grid>
        <Grid item sm={6} className={classes.explainGrid}>
          <Typography>
            more
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Main
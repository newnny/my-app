import React from "react"
import { useNavigate } from 'react-router-dom';

import { Typography, Grid } from '@mui/material';
import { mainCSS } from "./MainCss";

const Main = () => {
  let navigate = useNavigate();
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
            This is my personal blog mainly use for my portfolios and collecting thoughts and things that I want to store or to share.
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
            I am working as a frontend developer in medical software company. I wish to expand more and explore more my skills.
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
            And more my stuffs.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Main
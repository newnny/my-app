import React from "react"
import { menuBarCss } from "./MenuBarCss"
import { Typography, Box, Link } from "@mui/material"

const MenuBar = () => {
  const classes = menuBarCss()
  return (
    <div className={classes.root}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          typography: 'body1',
          '& > :not(style) + :not(style)': {
            ml: 2,
          },
        }}
      >
        <Link
          underline="none" color="inherit" //onClick={}
        >
          Portpolio
        </Link>
        <Link
          underline="none" color="inherit" //onClick={}
        >
          Contact
        </Link>
        <Link
          underline="none" color="inherit" //onClick={}
        >
          More
        </Link>
      </Box>
    </div>
  )
}

export default MenuBar
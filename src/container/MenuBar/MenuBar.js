import React from "react"
import { useNavigate } from 'react-router-dom';
import { menuBarCss } from "./MenuBarCss"
import { Box, Link } from "@mui/material"

const MenuBar = () => {

  let navigate = useNavigate();
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
          underline="none" color="inherit" onClick={e=> {e.preventDefault(); navigate("/portfolio")}}
        >
          Portfolio
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
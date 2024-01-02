import React, { useState } from 'react'
import { lightTheme, darkTheme } from './theme.js';
// import { MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from '@mui/material';
const ThemeComponent = ({children}) => {
    const [theme,setTheme]=useState(lightTheme)

  return (
    <ThemeProvider theme={{theme,setTheme}}> {children} </ThemeProvider>
  )
}

export default ThemeComponent
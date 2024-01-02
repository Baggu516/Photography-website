// themes.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#121212',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
        default: '#121212', // Background color for dark theme
      },
    type: 'dark',
  },
});

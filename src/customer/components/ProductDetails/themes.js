import { createTheme } from '@mui/material/styles';

const themes = createTheme({
  palette: {
    primary: {
      main: '#241aec', // Your primary color
    },
    secondary: {
      main: '#59ff00', // Your secondary color
    },
    success: {
      main: '#f7eb03', // Define a custom "success" color
    },
    warning: {
      main: '#f56906', // Define a custom "warning" color
    },
    error: {
      main: '#FF5252', // Define a custom "error" color
    },
  },
});

export default themes;



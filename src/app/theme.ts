// app/theme.ts
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark', // Enables dark mode
    primary: {
      main: '#90caf9' // Light blue for primary actions
    },
    secondary: {
      main: '#f48fb1' // Pink for secondary actions
    },
    background: {
      default: '#121212', // Dark grey for the app background
      paper: '#1e1e1e' // Slightly lighter grey for cards
    },
    text: {
      primary: '#e0e0e0', // Light grey for primary text
      secondary: '#bdbdbd' // Medium grey for secondary text
    }
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6
    },
    button: {
      textTransform: 'none',
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 12 // Rounded corners for consistency
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
          color: '#e0e0e0' // Ensures buttons are visible on the dark background
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          backgroundColor: '#1e1e1e', // Matches the dark theme paper background
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)' // Softer shadows
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#333333' // Dark grey AppBar
        }
      }
    }
  }
})

export default theme

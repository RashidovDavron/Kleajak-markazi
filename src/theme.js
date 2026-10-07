import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0071e3',
      dark: '#0058b8',
      light: '#3399e8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1d1d1f',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1d1d1f',
      secondary: '#86868b',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
    grey: {
      50: '#f5f5f7',
      100: '#e8e8ed',
      200: '#d2d2d7',
      300: '#b0b0b8',
      400: '#86868b',
      500: '#6e6e73',
      600: '#48484a',
      700: '#1d1d1f',
      800: '#171717',
      900: '#000000',
    },
  },

  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"SF Pro Display"',
      '"SF Pro Text"',
      '"Helvetica Neue"',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
    },
    h2: {
      fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
    },
    h3: {
      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
    },
    h4: {
      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      letterSpacing: '-0.01em',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '-0.01em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '-0.01em',
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 980,
          padding: '12px 26px',
          fontSize: '1.0625rem',
          fontWeight: 500,
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          textTransform: 'none',
          '&:hover': {
            boxShadow: 'none',
            transform: 'scale(1.02)',
          },
        },
        sizeLarge: {
          padding: '16px 34px',
          fontSize: '1.125rem',
        },
        sizeSmall: {
          padding: '8px 18px',
          fontSize: '0.9375rem',
        },
        contained: {
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0, 113, 227, 0.3)',
          },
        },
        text: {
          '&:hover': {
            background: 'transparent',
            textDecoration: 'underline',
            transform: 'none',
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(0, 0, 0, 0.04)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.72)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          color: '#1d1d1f',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            fontSize: '1.0625rem',
            backgroundColor: '#fff',
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.15)',
            },
            '&:hover fieldset': {
              borderColor: '#86868b',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0071e3',
              borderWidth: 2,
            },
          },
          '& .MuiInputLabel-root': {
            fontSize: '1rem',
            color: '#86868b',
            '&.Mui-focused': {
              color: '#0071e3',
            },
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 980,
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
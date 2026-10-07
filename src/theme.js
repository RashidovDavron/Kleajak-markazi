import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,      // Telefon
      sm: 480,    // Katta telefon
      md: 768,    // Planshet
      lg: 1024,   // Kichik laptop
      xl: 1280,   // Desktop
    },
  },

  palette: {
    mode: 'light',
    primary: {
      main: '#0071e3',
      dark: '#0058b8',
      light: '#3399e8',
      contrastText: '#ffffff',
    },
    secondary: { main: '#1d1d1f' },
    background: { default: '#ffffff', paper: '#ffffff' },
    text: { primary: '#1d1d1f', secondary: '#86868b' },
    divider: 'rgba(0, 0, 0, 0.08)',
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
      fontSize: 'clamp(2rem, 6vw, 5rem)',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
    },
    h2: {
      fontSize: 'clamp(1.625rem, 4.5vw, 3.5rem)',
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.15,
    },
    h3: {
      fontSize: 'clamp(1.375rem, 3vw, 2.5rem)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: 'clamp(0.9375rem, 1.6vw, 1.125rem)',
      lineHeight: 1.6,
      letterSpacing: '-0.01em',
    },
    body2: {
      fontSize: 'clamp(0.875rem, 1.4vw, 1rem)',
      lineHeight: 1.5,
      letterSpacing: '-0.01em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '-0.01em',
    },
  },

  shape: { borderRadius: 14 },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          '@media (min-width: 600px)': {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 980,
          padding: '10px 22px',
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
          fontWeight: 500,
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          textTransform: 'none',
          minHeight: 42,
          '@media (max-width: 600px)': {
            padding: '8px 18px',
            minHeight: 40,
          },
          '&:hover': {
            boxShadow: 'none',
            transform: 'scale(1.02)',
          },
        },
        sizeLarge: {
          padding: '14px 28px',
          fontSize: 'clamp(0.9375rem, 1.6vw, 1.0625rem)',
          minHeight: 50,
          '@media (max-width: 600px)': {
            padding: '12px 22px',
            minHeight: 46,
          },
        },
        sizeSmall: {
          padding: '6px 14px',
          fontSize: 'clamp(0.8125rem, 1.4vw, 0.9375rem)',
          minHeight: 36,
        },
        contained: {
          '&:hover': {
            boxShadow: '0 6px 20px rgba(0, 113, 227, 0.3)',
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
          borderRadius: 20,
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(0, 0, 0, 0.04)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '@media (max-width: 600px)': {
            borderRadius: 16,
          },
          '@media (hover: hover)': {
            '&:hover': {
              transform: 'translateY(-6px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
            },
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          color: '#1d1d1f',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '56px !important',
          '@media (min-width: 768px)': {
            minHeight: '64px !important',
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            fontSize: '16px', // iOS zoom oldini olish
            backgroundColor: '#fff',
            minHeight: 48,
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
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 980,
          fontWeight: 500,
          fontSize: 'clamp(0.7rem, 1.2vw, 0.8125rem)',
        },
      },
    },

    MuiGrid: {
      styleOverrides: {
        root: {
          // Grid mobilda tezroq ishlashi uchun
        },
      },
    },
  },
});

export default theme;
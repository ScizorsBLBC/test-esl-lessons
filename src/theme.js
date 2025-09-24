import { createTheme } from '@mui/material/styles';

// Helper function to convert hex to rgba
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// --- Base Component Overrides ---
const baseOverrides = (theme) => {
  // Define the liquid glass style once for consistency
  const liquidGlassStyle = {
    backgroundColor: hexToRgba(theme.palette.background.paper, 0.1), // Lowered opacity
    backdropFilter: 'blur(12px) saturate(180%)',
    border: `1px solid ${hexToRgba(theme.palette.text.primary, 0.1)}`, // Lowered opacity
    boxShadow: theme.shadows[4],
  };

  return {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@keyframes grain': {
            '0%, 100%': { transform: 'translate(0, 0)' }, '10%': { transform: 'translate(-1%, -2%)' }, '20%': { transform: 'translate(1%, 2%)' }, '30%': { transform: 'translate(-2%, 1%)' }, '40%': { transform: 'translate(2%, -1%)' }, '50%': { transform: 'translate(-1%, 2%)' }, '60%': { transform: 'translate(1%, -2%)' }, '70%': { transform: 'translate(-2%, -1%)' }, '80%': { transform: 'translate(2%, 1%)' }, '90%': { transform: 'translate(-1%, 2%)' },
          },
          body: {
            minHeight: '100vh',
            backgroundColor: theme.palette.background.default,
            backgroundAttachment: 'fixed',
            backgroundImage: `radial-gradient(at 0% 0%, ${hexToRgba(theme.palette.primary.main, 0.2)} 0px, transparent 50%),
                            radial-gradient(at 98% 1%, ${hexToRgba(theme.palette.secondary.main, 0.25)} 0px, transparent 50%)`,
            '&::after': {
              content: '""', position: 'fixed', inset: 0, pointerEvents: 'none',
              backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)" opacity="0.035"/%3E%3C/svg%3E')`,
              animation: 'grain 8s steps(10) infinite', zIndex: -1,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: liquidGlassStyle,
        },
      },
      MuiCard: {
        styleOverrides: {
          root: liquidGlassStyle,
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: liquidGlassStyle,
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            ...liquidGlassStyle,
            backgroundColor: hexToRgba(theme.palette.background.paper, 0), // Tooltips need to be more readable
            color: theme.palette.text.primary,
            fontSize: '0.875rem',
          },
          arrow: {
            '&:before': {
              ...liquidGlassStyle,
              backgroundColor: hexToRgba(theme.palette.background.paper, 0),
              content: '""',
            }
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            ...liquidGlassStyle,
            transition: 'transform 0.2s ease-in-out, background-color 0.3s ease, border-color 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              filter: 'brightness(1.2)'
            },
          },
          outlined: {
            backgroundColor: hexToRgba(theme.palette.primary.main, 0.1),
            borderColor: hexToRgba(theme.palette.primary.main, 0.25),
            '&:hover': {
              backgroundColor: hexToRgba(theme.palette.primary.main, 0.2),
              borderColor: hexToRgba(theme.palette.primary.main, 0.4),
            },
          },
          contained: {
            backgroundColor: hexToRgba(theme.palette.primary.main, 0.3), // Lowered opacity
            borderColor: hexToRgba(theme.palette.primary.dark, 0.5), // Lowered opacity
            color: theme.palette.getContrastText(theme.palette.primary.main),
            '&:hover': {
              backgroundColor: hexToRgba(theme.palette.primary.dark, 0.5),
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              filter: 'brightness(1.2)'
            },
            '&.Mui-selected': {
              color: theme.palette.secondary.main
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: theme.palette.secondary.main
          },
          scrollButtons: {
            color: theme.palette.secondary.main
          },
        },
      },
    },
  };
};

// --- Theme Definitions ---
let darkTheme = createTheme({ palette: { mode: 'dark', primary: { main: '#E91E63' }, secondary: { main: '#00BCD4' }, background: { default: '#2C1B3E', paper: '#3E2A50' }, text: { primary: '#F5F1F8', secondary: '#FF80AB' } } });
darkTheme = createTheme(darkTheme, baseOverrides(darkTheme));

let vaporwaveTheme = createTheme({ palette: { mode: 'dark', primary: { main: '#F200FF' }, secondary: { main: '#00FFFF' }, background: { default: '#2E004B', paper: '#4F1A7E' }, text: { primary: '#DFFF00', secondary: '#FF8A00' } } });
vaporwaveTheme = createTheme(vaporwaveTheme, baseOverrides(vaporwaveTheme));

let lightTheme = createTheme({ palette: { mode: 'light', primary: { main: '#9C27B0' }, secondary: { main: '#E91E63' }, background: { default: '#F8F7FA', paper: '#FFFFFF' }, text: { primary: '#2C1B3E', secondary: '#8E24AA' } } });
lightTheme = createTheme(lightTheme, baseOverrides(lightTheme));

let monochromeDarkTheme = createTheme({ palette: { mode: 'dark', primary: { main: '#FFFFFF' }, secondary: { main: '#BDBDBD' }, background: { default: '#121212', paper: '#1E1E1E' }, text: { primary: '#FFFFFF', secondary: '#E0E0E0' } } });
monochromeDarkTheme = createTheme(monochromeDarkTheme, baseOverrides(monochromeDarkTheme));

let monochromeLightTheme = createTheme({ palette: { mode: 'light', primary: { main: '#000000' }, secondary: { main: '#757575' }, background: { default: '#F5F5F5', paper: '#FFFFFF' }, text: { primary: '#000000', secondary: '#424242' } } });
monochromeLightTheme = createTheme(monochromeLightTheme, baseOverrides(monochromeLightTheme));

export { darkTheme, vaporwaveTheme, lightTheme, monochromeDarkTheme, monochromeLightTheme };
import { createTheme } from '@mui/material/styles';

// Helper function to convert hex to rgba
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// --- Base Component Overrides ---
const baseOverrides = (theme) => ({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@keyframes grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-1%, -2%)' },
          '20%': { transform: 'translate(1%, 2%)' },
          '30%': { transform: 'translate(-2%, 1%)' },
          '40%': { transform: 'translate(2%, -1%)' },
          '50%': { transform: 'translate(-1%, 2%)' },
          '60%': { transform: 'translate(1%, -2%)' },
          '70%': { transform: 'translate(-2%, -1%)' },
          '80%': { transform: 'translate(2%, 1%)' },
          '90%': { transform: 'translate(-1%, 2%)' },
        },
        body: {
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
          backgroundAttachment: 'fixed',
          backgroundImage: `radial-gradient(at 0% 0%, ${hexToRgba(theme.palette.primary.main, 0.2)} 0px, transparent 50%),
                          radial-gradient(at 98% 1%, ${hexToRgba(theme.palette.secondary.main, 0.25)} 0px, transparent 50%)`,
          '&::after': {
            content: '""',
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)" opacity="0.035"/%3E%3C/svg%3E')`,
            animation: 'grain 8s steps(10) infinite',
            zIndex: -1,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: hexToRgba(theme.palette.background.paper, 0.7),
          backdropFilter: 'blur(12px)',
          border: `1px solid ${hexToRgba(theme.palette.text.primary, 0.1)}`,
          boxShadow: theme.shadows[3],
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    // The definitive "Liquid Glass" style for all Material-UI tooltips
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          // UPDATED: Increased opacity to make the background less readable.
          backgroundColor: hexToRgba(theme.palette.background.paper, 0.75),
          border: `1px solid ${hexToRgba(theme.palette.text.primary, 0.2)}`,
          color: theme.palette.text.primary,
          fontSize: '0.875rem',
          // REMOVED backdropFilter to prevent rendering issues.
        },
        arrow: {
          // UPDATED: Matched the new background opacity.
          color: hexToRgba(theme.palette.background.paper, 0.85),
          '&:before': {
             border: `1px solid ${hexToRgba(theme.palette.text.primary, 0.2)}`,
          }
        }
      }
    }
  },
});


// --- Theme Definitions ---

// 1. A refined dark theme inspired by your artwork.
let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#E91E63' }, // Vibrant Pink
    secondary: { main: '#00BCD4' }, // Cyan Accent
    background: { default: '#2C1B3E', paper: '#3E2A50' },
    text: { primary: '#F5F1F8', secondary: '#FF80AB' },
  },
});
darkTheme = createTheme(darkTheme, baseOverrides(darkTheme));

// 2. An expressive, artistic theme that directly mirrors your art.
let artTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#FF4081' }, // Hot Pink
    secondary: { main: '#64FFDA' }, // Teal Accent
    background: { default: '#4A148C', paper: '#6A1B9A' },
    text: { primary: '#FFFFFF', secondary: '#CE93D8' },
  },
});
artTheme = createTheme(artTheme, baseOverrides(artTheme));

// 3. A clean, professional light theme with subtle hints of color.
let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#9C27B0' }, // Muted Purple
    secondary: { main: '#E91E63' }, // Muted Pink
    background: { default: '#F8F7FA', paper: '#FFFFFF' },
    text: { primary: '#2C1B3E', secondary: '#8E24AA' },
  },
});
lightTheme = createTheme(lightTheme, baseOverrides(lightTheme));

// 4. An elegant, high-contrast dark monochrome theme ("Goth Mode").
let monochromeDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#FFFFFF' }, // White for primary actions
    secondary: { main: '#BDBDBD' }, // Grey for secondary actions
    background: { default: '#121212', paper: '#1E1E1E' },
    text: { primary: '#FFFFFF', secondary: '#E0E0E0' },
  },
});
monochromeDarkTheme = createTheme(monochromeDarkTheme, baseOverrides(monochromeDarkTheme));

// 5. A chic, Bauhaus-inspired light monochrome theme.
let monochromeLightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#000000' }, // Black for primary actions
      secondary: { main: '#757575' }, // Dark grey for secondary actions
      background: { default: '#F5F5F5', paper: '#FFFFFF' },
      text: { primary: '#000000', secondary: '#424242' },
    },
});
monochromeLightTheme = createTheme(monochromeLightTheme, baseOverrides(monochromeLightTheme));


export { darkTheme, artTheme, lightTheme, monochromeDarkTheme, monochromeLightTheme };
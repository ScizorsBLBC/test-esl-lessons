// Add useEffect to the React import and useNavigate to the react-router-dom import
import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import {
  CssBaseline, IconButton, Tooltip as MuiTooltip, Box,
  Card, CardContent, Typography
} from '@mui/material';

// Import Icons and Themes
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TonalityIcon from '@mui/icons-material/Tonality';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import { darkTheme, artTheme, lightTheme, monochromeDarkTheme, monochromeLightTheme } from './theme.js';

// Import Lesson Components
import GlobalBusinessCultures from './lessons/GlobalBusinessCultures';

// This MainLayout component contains all the shared theme logic and UI
function MainLayout() {
  const [themeName, setThemeName] = useState('dark');
  const navigate = useNavigate(); // Add the navigate hook

  // This new useEffect hook handles the redirect logic
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirect');
    if (redirectPath) {
      sessionStorage.removeItem('redirect'); // Clean up after use
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  const theme = useMemo(() => {
    switch (themeName) {
      case 'art': return artTheme;
      case 'light': return lightTheme;
      case 'monochromeDark': return monochromeDarkTheme;
      case 'monochromeLight': return monochromeLightTheme;
      case 'dark': default: return darkTheme;
    }
  }, [themeName]);

  const toggleTheme = () => {
    const themes = ['dark', 'art', 'light', 'monochromeDark', 'monochromeLight'];
    const currentIndex = themes.indexOf(themeName);
    const nextIndex = (currentIndex + 1) % themes.length;
    setThemeName(themes[nextIndex]);
  };

  const getNextThemeIcon = () => {
    switch (themeName) {
      case 'dark': return { icon: <AutoAwesomeIcon />, title: "Switch to Art Theme" };
      case 'art': return { icon: <Brightness7Icon />, title: "Switch to Light Theme" };
      case 'light': return { icon: <TonalityIcon />, title: "Switch to Monochrome Dark Theme" };
      case 'monochromeDark': return { icon: <InvertColorsIcon />, title: "Switch to Monochrome Light Theme" };
      case 'monochromeLight': return { icon: <Brightness4Icon />, title: "Switch to Dark Theme" };
      default: return { icon: null, title: ''};
    }
  };
  
  const { icon, title } = getNextThemeIcon();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MuiTooltip title={title} arrow>
        <IconButton
          onClick={toggleTheme}
          color="inherit"
          sx={{ 
              position: 'fixed', top: 16, right: 16, zIndex: 1300,
              transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
              '&:hover': { transform: 'scale(1.15)', filter: 'brightness(1.2)' }
          }}
        >
          {icon}
        </IconButton>
      </MuiTooltip>
      
      <Outlet />
    </ThemeProvider>
  );
}

// The root component for the portal homepage
function SiteRoot() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      px: 2
    }}>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
          <Typography variant="h3" component="h1" gutterBottom>
            ESL Lesson Portal
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary">
            Please use the direct link provided by Ryan C. to access your lesson.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}


// The main App component now sets up the routes within the MainLayout
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<SiteRoot />} />
          <Route path="/global-business-cultures" element={<GlobalBusinessCultures />} />
          {/* Add future lesson routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
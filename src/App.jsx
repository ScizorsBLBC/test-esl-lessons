import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import {
  CssBaseline, IconButton, Tooltip as MuiTooltip, Box,
  Card, CardContent, Typography, Menu, MenuItem, ListItemIcon, ListItemText
} from '@mui/material';

// Import all icons and themes
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TonalityIcon from '@mui/icons-material/Tonality';
import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff';
import PaletteIcon from '@mui/icons-material/Palette';

import { darkTheme, vaporwaveTheme, lightTheme, monochromeDarkTheme, monochromeLightTheme } from './theme.js';

// Import the lesson component here to make it accessible to all parts of the file
import GlobalBusinessCultures from './lessons/GlobalBusinessCultures';

// --- A more organized way to manage themes ---
const themes = [
  {
    key: 'light',
    label: 'Light',
    icon: <Brightness7Icon fontSize="small" sx={{ color: lightTheme.palette.primary.main }} />,
    theme: lightTheme,
    preview: ['#E91E63', '#9C27B0', '#F8F7FA'] // Hotter pink, vibrant purple, and light background
  },
  {
    key: 'monochromeLight',
    label: 'Monochrome Light',
    icon: <InvertColorsOffIcon fontSize="small" sx={{ color: monochromeLightTheme.palette.primary.main }} />,
    theme: monochromeLightTheme,
    preview: ['#C5C5C5', '#757575', '#000000'] // A more dynamic grayscale range
  },
  {
    key: 'dark',
    label: 'Dark',
    icon: <Brightness4Icon fontSize="small" sx={{ color: darkTheme.palette.primary.main }} />,
    theme: darkTheme,
    preview: ['#E91E63', '#00BCD4', '#2C1B3E'] // A strong gradient between its primary and secondary colors
  },
  {
    key: 'monochromeDark',
    label: 'Monochrome Dark',
    icon: <TonalityIcon fontSize="small" sx={{ color: monochromeDarkTheme.palette.primary.main }} />,
    theme: monochromeDarkTheme,
    preview: ['#5E5E5E', '#1E1E1E', '#121212'] // More depth with a strong dark grey to black transition
  },
  {
    key: 'vaporwave',
    label: 'VaporWave',
    icon: <AutoAwesomeIcon fontSize="small" sx={{ color: vaporwaveTheme.palette.secondary.main }} />,
    theme: vaporwaveTheme,
    preview: ['#2E004B', '#F200FF', '#FF8A00'] // This one is already perfect!
  },
];

function MainLayout() {
  const [themeName, setThemeName] = useState('light');
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  const handleThemeChange = (newThemeName) => {
    setThemeName(newThemeName);
    handleCloseMenu();
  };

  const theme = useMemo(() => {
    return themes.find(t => t.key === themeName)?.theme || lightTheme;
  }, [themeName]);

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirect');
    if (redirectPath) {
      sessionStorage.removeItem('redirect');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MuiTooltip title="Change Theme" arrow>
        <IconButton
          onClick={handleOpenMenu}
          color="inherit"
          sx={{
              position: 'fixed', top: 16, right: 16, zIndex: 1300,
              transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
              '&:hover': { transform: 'scale(1.15)', filter: 'brightness(1.2)' }
          }}
        >
          <PaletteIcon />
        </IconButton>
      </MuiTooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{ 'aria-labelledby': 'theme-button' }}
      >
        {themes.map((themeOption) => (
          <MenuItem
            key={themeOption.key}
            onClick={() => handleThemeChange(themeOption.key)}
            // Apply the translucent gradient background to the entire menu item
            sx={{
              background: `linear-gradient(90deg, ${themeOption.preview[0]}40, ${themeOption.preview[1]}10, ${themeOption.preview[2]}00)`,
              '&:hover': {
                background: `linear-gradient(90deg, ${themeOption.preview[0]}80, ${themeOption.preview[1]}20, ${themeOption.preview[2]}00)`,
              }
            }}
          >
            {/* The icon is now on the left, as requested */}
            <ListItemIcon sx={{ '& .MuiSvgIcon-root': { color: themeOption.icon.props.sx.color } }}>
              {themeOption.icon}
            </ListItemIcon>
            {/* The text uses the theme's primary text color for readability */}
            <ListItemText
              sx={{ color: themeOption.theme.palette.text.primary }}
            >
              {themeOption.label}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>

      <Outlet />
    </ThemeProvider>
  );
}

// ... (The rest of the App.jsx file remains the same)
function SiteRoot() {
  useEffect(() => {
    document.title = 'ESL Lesson Portal';
  }, []);

  return (
    <Box sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      height: '100vh', textAlign: 'center', px: 2
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<SiteRoot />} />
          <Route path="/global-business-cultures" element={<GlobalBusinessCultures />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
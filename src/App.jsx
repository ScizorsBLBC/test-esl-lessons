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

// Import lesson components
import GlobalBusinessCultures from './lessons/GlobalBusinessCultures';
import EnglishVerbTenses from './lessons/EnglishVerbTenses';
import EnglishPrepositions from './lessons/EnglishPrepositions'; 
import PhrasalVerbs from './lessons/PhrasalVerbs'; // <-- NEW IMPORT
// Import the global scroll indicator component
import GlobalScrollIndicator from './components/GlobalScrollIndicator';

// --- A more organized way to manage themes ---
const themes = [
  {
    key: 'light',
    label: 'Light',
    icon: <Brightness7Icon fontSize="small" sx={{ color: lightTheme.palette.primary.main }} />,
    theme: lightTheme,
    preview: ['#E91E63', '#9C27B0', '#F8F7FA']
  },
  {
    key: 'monochromeLight',
    label: 'Monochrome Light',
    icon: <InvertColorsOffIcon fontSize="small" sx={{ color: monochromeLightTheme.palette.background.default }} />,
    theme: monochromeLightTheme,
    preview: ['#C5C5C5', '#757575', '#000000']
  },
  {
    key: 'dark',
    label: 'Dark',
    icon: <Brightness4Icon fontSize="small" sx={{ color: darkTheme.palette.primary.main }} />,
    theme: darkTheme,
    preview: ['#E91E63', '#00BCD4', '#2C1B3E']
  },
  {
    key: 'monochromeDark',
    label: 'Monochrome Dark',
    icon: <TonalityIcon fontSize="small" sx={{ color: monochromeDarkTheme.palette.background.paper }} />,
    theme: monochromeDarkTheme,
    preview: ['#5E5E5E', '#1E1E1E', '#121212']
  },
  {
    key: 'vaporwave',
    label: 'VaporWave',
    icon: <AutoAwesomeIcon fontSize="small" sx={{ color: vaporwaveTheme.palette.secondary.main }} />,
    theme: vaporwaveTheme,
    preview: ['#2E004B', '#F200FF', '#FF8A00']
  },
];

function MainLayout() {
  // --- MODIFICATION 1: INITIALIZE STATE FROM LOCAL STORAGE ---
  const [themeName, setThemeName] = useState(() => {
    const savedTheme = localStorage.getItem('themePreference');
    return savedTheme || 'light';
  });
  // -----------------------------------------------------------

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

  // --- MODIFICATION 2: PERSIST STATE TO LOCAL STORAGE ON CHANGE ---
  useEffect(() => {
    localStorage.setItem('themePreference', themeName);
  }, [themeName]);
  // ------------------------------------------------------------------

  // Existing redirect logic (important to keep)
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
            sx={{
              background: `linear-gradient(${
                themeOption.key === 'light' || themeOption.key === 'monochromeLight' ? '270deg' : '90deg'
              }, ${themeOption.preview[0]}40, ${themeOption.preview[1]}10, ${themeOption.preview[2]}00)`,
              '&:hover': {
                background: `linear-gradient(${
                  themeOption.key === 'light' || themeOption.key === 'monochromeLight' ? '270deg' : '90deg'
                }, ${themeOption.preview[0]}80, ${themeOption.preview[1]}20, ${themeOption.preview[2]}00)`,
              },
            }}
          >
            <ListItemIcon sx={{ '& .MuiSvgIcon-root': { color: themeOption.icon.props.sx.color } }}>
              {themeOption.icon}
            </ListItemIcon>
            <ListItemText sx={{ color: themeOption.theme.palette.text.primary }}>
              {themeOption.label}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>

      <Outlet />
       <GlobalScrollIndicator />
    </ThemeProvider>
  );
}

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
            Please use the direct link provided by your instructor to access your lesson.
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
          <Route path="/english-verb-tenses" element={<EnglishVerbTenses />} />
          <Route path="/english-prepositions" element={<EnglishPrepositions />} />
          <Route path="/phrasal-verbs" element={<PhrasalVerbs />} /> {/* <-- NEW ROUTE */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
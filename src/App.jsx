import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import {
    CssBaseline, Box, IconButton, Typography, Tabs, Tab,
    Card, CardContent, Grid, Button, Stack, Paper, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TonalityIcon from '@mui/icons-material/Tonality'; // For monochrome
import InvertColorsIcon from '@mui/icons-material/InvertColors'; // For light monochrome
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { keyframes } from '@emotion/react';


// Chart.js imports
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
} from 'chart.js';
import { Bar, getElementAtEvent } from 'react-chartjs-2';

import { darkTheme, artTheme, lightTheme, monochromeDarkTheme, monochromeLightTheme } from './theme';
import { culturalData } from './culturalData';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Bounce animation for the scroll indicator
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// A new, smarter global scroll indicator component
const GlobalScrollIndicator = () => {
    const [showDownArrow, setShowDownArrow] = useState(false);
    const [showUpArrow, setShowUpArrow] = useState(false);

    useEffect(() => {
        const checkScrollability = () => {
            setTimeout(() => {
                const isScrollable = document.documentElement.scrollHeight > document.documentElement.clientHeight;
                const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 20;
                const isAtTop = window.scrollY < 20;

                setShowDownArrow(isScrollable && !isAtBottom);
                setShowUpArrow(isScrollable && !isAtTop);
            }, 150);
        };

        const handleScroll = () => {
            const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 20;
            const isAtTop = window.scrollY < 20;
            const isScrollable = document.documentElement.scrollHeight > document.documentElement.clientHeight;

            setShowDownArrow(isScrollable && !isAtBottom);
            setShowUpArrow(isScrollable && !isAtTop);
        };

        const observer = new MutationObserver(checkScrollability);
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', checkScrollability);

        checkScrollability();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkScrollability);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {showDownArrow && (
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 24,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: 'secondary.main',
                        animation: `${bounce} 2s infinite`,
                        zIndex: 1400,
                        pointerEvents: 'none',
                    }}
                >
                    <KeyboardArrowDownIcon fontSize="large" />
                </Box>
            )}
            {showUpArrow && (
                 <Box
                    sx={{
                        position: 'fixed',
                        top: 80, // Positioned below the header
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: 'secondary.main',
                        animation: `${bounce} 2s infinite reverse`, // Reverse animation for up arrow
                        zIndex: 1400,
                        pointerEvents: 'none',
                    }}
                >
                    <KeyboardArrowUpIcon fontSize="large" />
                </Box>
            )}
        </>
    );
};


// Main Application Component
export default function App() {
  const [themeName, setThemeName] = useState('dark');

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
      case 'dark': return <AutoAwesomeIcon />; // -> Art
      case 'art': return <Brightness7Icon />; // -> Light
      case 'light': return <TonalityIcon />; // -> Monochrome Dark
      case 'monochromeDark': return <InvertColorsIcon />; // -> Monochrome Light
      case 'monochromeLight': return <Brightness4Icon />; // -> Dark
      default: return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1300 }}
      >
        {getNextThemeIcon()}
      </IconButton>

      {/* Replaced Container with Box for true full-width capability */}
      <Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6 } }}>
        <Header />
        <MainContent />
      </Box>
      <GlobalScrollIndicator />
    </ThemeProvider>
  );
}

// Header Component
const Header = () => (
  <Box sx={{ textAlign: 'center', mb: 4 }}>
    <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
      Global Business Cultures
    </Typography>
    <Typography variant="h6" sx={{ color: 'text.primary' }}>
      Explore cultural dimensions, review key terms, and complete assignments.
    </Typography>
  </Box>
);

// Main Content Area with Navigation
const MainContent = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const sections = [
        "Communication", "Power & Hierarchy", "Time & Scheduling", "Social Etiquette",
        "Cultural DNA", "Key Vocabulary", "Homework"
    ];

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    aria-label="cultural sections tabs"
                    // Elegant styling for the scroll buttons and indicator
                    sx={{
                        '& .MuiTabs-indicator': {
                            backgroundColor: 'secondary.main',
                        },
                        '& .MuiTab-root.Mui-selected': {
                            color: 'secondary.main',
                        },
                        '& .MuiTabScrollButton-root': {
                            color: 'secondary.main',
                        },
                    }}
                >
                    {sections.map(label => <Tab label={label} key={label} />)}
                </Tabs>
            </Box>
            
            {activeTab === 0 && <ChartSection sectionKey="communication" title="The Spectrum of Communication" description="This section explores the spectrum from direct, low-context communication to indirect, high-context styles..." axisLabels={{ min: 'Low-Context', max: 'High-Context' }} />}
            {activeTab === 1 && <ChartSection sectionKey="power" title="Power, Deference, and Decisions" description="Discover how power is structured and perceived, from flat, egalitarian models to steep, hierarchical ones..." axisLabels={{ min: 'Egalitarian', max: 'Hierarchical' }} />}
            {activeTab === 2 && <ChartSection sectionKey="time" title="The Culture of Time" description="Learn about the different rhythms of global business, from linear and sequential (monochronic) to fluid and simultaneous (polychronic) approaches to time." axisLabels={{ min: 'Monochronic', max: 'Polychronic' }} tables={[culturalData.workLifeBalance]} />}
            {activeTab === 3 && <SelectorSection sectionKey="etiquette" title="The Art of the Relationship" description="Master the practical social skills for business settings across the globe." detailRenderer={etiquetteDetailRenderer} />}
            {activeTab === 4 && <SelectorSection sectionKey="dna" title="The Nation's Soul" description="Connect business practices to a country's deeper cultural DNA." detailRenderer={dnaDetailRenderer} tables={[culturalData.corePhilosophies, culturalData.artAndCulture]} />}
            {activeTab === 5 && <SelectorSection sectionKey="vocabulary" title="Key Vocabulary" description="Review the specialized terms and concepts for each topic." detailRenderer={vocabularyDetailRenderer} />}
            {activeTab === 6 && <SelectorSection sectionKey="homework" title="Homework Assignments" description="Complete the assignments for each topic to solidify your understanding." detailRenderer={homeworkDetailRenderer} />}
        </Box>
    );
};

// Component for sections with charts
const ChartSection = ({ sectionKey, title, description, axisLabels, tables }) => {
    const sectionData = useMemo(() => [...culturalData[sectionKey]].sort((a, b) => a.score - b.score), [sectionKey]);
    const [selectedDetails, setSelectedDetails] = useState(null);
    const theme = useTheme();
    const chartRef = useRef();

    useEffect(() => {
        // When the component loads or the data changes, pre-select the details
        // for the last item in the sorted list (which has the highest score).
        if (sectionData.length > 0) {
            setSelectedDetails(sectionData[sectionData.length - 1]);
        }
    }, [sectionData]);


    const chartOptions = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true, bodyFont: {size: 14}, titleFont: {size: 16} }
        },
        scales: {
            x: {
                beginAtZero: true, max: 10,
                ticks: { color: theme.palette.text.primary },
                grid: { color: theme.palette.divider },
                title: { display: true, text: 'Spectrum', color: theme.palette.text.secondary, font: {size: 16, weight: 'bold'} }
            },
            y: {
                ticks: { color: theme.palette.text.primary },
                grid: { display: false }
            }
        },
    };

    const chartData = {
        labels: sectionData.map(item => item.name),
        datasets: [{
            label: 'Score',
            data: sectionData.map(item => item.score),
            backgroundColor: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.dark,
            borderWidth: 1,
        }],
    };
    
    const handleChartClick = (event) => {
        const element = getElementAtEvent(chartRef.current, event);
        if (element.length > 0) {
            const dataIndex = element[0].index;
            setSelectedDetails(sectionData[dataIndex]);
        }
    };

    return (
        <Box>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom>{title}</Typography>
                <Typography>{description}</Typography>
            </Box>

            <Box sx={{ display: { xs: 'block', md: 'flex' }, gap: 4, alignItems: 'stretch' }}>
                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Paper sx={{ height: { xs: '60vh', md: '70vh' }, p: 2 }}>
                        <Bar ref={chartRef} options={chartOptions} data={chartData} onClick={handleChartClick}/>
                    </Paper>
                </Box>
                <Box sx={{ width: { xs: '100%', md: 350 }, mt: { xs: 4, md: 0 }, flexShrink: 0 }}>
                     <DetailCard content={selectedDetails ? selectedDetails.details : '<p>Select a country from the chart to view details.</p>'} />
                </Box>
            </Box>

            {tables && tables.map((tableData, index) => (
                <Box sx={{ mt: 4 }} key={index}>
                    <CustomTable tableData={tableData} />
                </Box>
            ))}
        </Box>
    );
};

// Component for sections with button selectors
const SelectorSection = ({ sectionKey, title, description, detailRenderer, tables }) => {
    const sectionData = culturalData[sectionKey];
    const dataKey = sectionKey === 'vocabulary' ? 'topic' : 'name';
    const sortedData = useMemo(() => [...sectionData].sort((a, b) => (a[dataKey] || a.title).localeCompare(b[dataKey] || b.title)), [sectionData, dataKey]);

    const [selectedItem, setSelectedItem] = useState(sortedData[0]);

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" component="h2" gutterBottom>{title}</Typography>
                    <Typography>{description}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
                    {sortedData.map(item => (
                        <Button
                            key={item.title || item.topic || item.name}
                            variant={selectedItem === item ? 'contained' : 'outlined'}
                            onClick={() => setSelectedItem(item)}
                        >
                            {sectionKey === 'dna' ? item.name : (item.title || item.topic || item.name)}
                        </Button>
                    ))}
                </Stack>
            </Grid>
            <Grid item xs={12}>
                 <DetailCard content={detailRenderer(selectedItem)} />
            </Grid>
            {tables && tables.map((tableData, index) => (
                <Grid item xs={12} key={index}>
                    <CustomTable tableData={tableData} />
                </Grid>
            ))}
        </Grid>
    );
};


// Reusable Detail Card (now simplified, without scroll logic)
const DetailCard = ({ content }) => {
    return (
        <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Card sx={{ flex: 1, overflowY: 'auto' }}>
                <CardContent>
                    <Typography variant="body1" component="div" dangerouslySetInnerHTML={{ __html: content }} 
                        sx={{
                            // Theme-aware styling for the homework email blocks
                            '.homework-email': {
                                backgroundColor: (theme) => theme.palette.action.hover,
                                borderLeft: (theme) => `4px solid ${theme.palette.secondary.main}`,
                                padding: '1rem',
                                marginTop: '1rem',
                                color: (theme) => theme.palette.text.primary,
                            },
                        }}
                    />
                </CardContent>
            </Card>
        </Paper>
    );
};

// Reusable Table Component
const CustomTable = ({ tableData }) => (
    <Paper sx={{overflow: 'hidden'}}>
    <TableContainer>
        <Box sx={{ p: 2, textAlign: 'center' }}>
             <Typography variant="h5" component="h3" color="text.secondary">{tableData.title}</Typography>
        </Box>
        <Table stickyHeader aria-label={tableData.title}>
            <TableHead>
                <TableRow>
                    {tableData.headers.map(header => <TableCell key={header}><strong>{header}</strong></TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.rows.map((row, index) => (
                    <TableRow key={index}>
                        {row.map((cell, cellIndex) => <TableCell key={cellIndex} dangerouslySetInnerHTML={{ __html: cell }} />)}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    </Paper>
);

// --- Detail Renderer Functions ---
const etiquetteDetailRenderer = (item) => `
    <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">${item.name}</h3>
    <div style="display: grid; gap: 1em;">
        <div><strong>Greeting:</strong><p style="margin-top: 0.5em;">${item.greeting}</p></div>
        <div><strong>Business Dining:</strong><p style="margin-top: 0.5em;">${item.dining}</p></div>
        <div><strong>Gift-Giving:</strong><p style="margin-top: 0.5em;">${item.gifting}</p></div>
    </div>`;

const dnaDetailRenderer = (item) => `<h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 0.5em;">${item.title} (${item.name})</h3><p>${item.details}</p>`;

const vocabularyDetailRenderer = (item) => `
    <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Vocabulary for ${item.topic}</h3>
    <ul style="list-style-position: inside; padding-left: 0; margin: 0; display: grid; gap: 1em;">
        ${item.terms.map(t => `<li><strong>${t.term}:</strong><p style="margin: 0.25em 0 0 0;">${t.definition}</p></li>`).join('')}
    </ul>`;
    
const homeworkDetailRenderer = (item) => `<h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">${item.title} (Topic: ${item.topic})</h3><div>${item.details}</div>`;


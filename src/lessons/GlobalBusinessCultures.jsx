import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box, Typography, Tabs, Tab, Card, CardContent, Grid, Button,
    Stack, Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Tooltip as MuiTooltip
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { keyframes } from '@emotion/react';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
} from 'chart.js';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import { culturalData } from '../culturalData.js';

// --- Helper Functions and Components ---

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const GlobalScrollIndicator = () => {
    const [showDownArrow, setShowDownArrow] = useState(false);
    const [showUpArrow, setShowUpArrow] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
            setShowUpArrow(window.scrollY > 30);
            setShowDownArrow(isScrollable && window.innerHeight + window.scrollY < document.documentElement.scrollHeight - 30);
        };
        const observer = new MutationObserver(checkScroll);
        observer.observe(document.body, { childList: true, subtree: true, attributes: true });
        window.addEventListener('scroll', checkScroll, { passive: true });
        window.addEventListener('resize', checkScroll);
        checkScroll();
        return () => {
            window.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {showDownArrow && (
                <Box sx={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', color: 'secondary.main', animation: `${bounce} 2s infinite`, zIndex: 1400, pointerEvents: 'none' }}>
                    <KeyboardArrowDownIcon fontSize="large" />
                </Box>
            )}
            {showUpArrow && (
                 <Box sx={{ position: 'fixed', top: 80, left: '50%', transform: 'translateX(-50%)', color: 'secondary.main', animation: `${bounce} 2s infinite reverse`, zIndex: 1400, pointerEvents: 'none' }}>
                    <KeyboardArrowUpIcon fontSize="large" />
                </Box>
            )}
        </>
    );
};

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

const MainContent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (event, newValue) => setActiveTab(newValue);
    const sections = ["Communication", "Power & Hierarchy", "Time & Scheduling", "Social Etiquette", "Cultural DNA", "Key Vocabulary", "Homework"];

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile
                    aria-label="cultural sections tabs"
                    sx={{
                        '& .MuiTabs-indicator': { backgroundColor: 'secondary.main' },
                        '& .MuiTab-root': {
                             transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
                             '&:hover': { transform: 'scale(1.05)', filter: 'brightness(1.2)' }
                        },
                        '& .MuiTab-root.Mui-selected': { color: 'secondary.main' },
                        '& .MuiTabScrollButton-root': { color: 'secondary.main' },
                    }}
                >
                    {sections.map(label => (
                        <MuiTooltip title={`View ${label} Section`} key={label} arrow>
                            <Tab label={label} />
                        </MuiTooltip>
                    ))}
                </Tabs>
            </Box>
            
            {activeTab === 0 && <ChartSection sectionKey="communication" title="The Spectrum of Communication" description="This section explores the spectrum from direct, low-context communication to indirect, high-context styles..."/>}
            {activeTab === 1 && <ChartSection sectionKey="power" title="Power, Deference, and Decisions" description="Discover how power is structured and perceived, from flat, egalitarian models to steep, hierarchical ones..."/>}
            {activeTab === 2 && <ChartSection sectionKey="time" title="The Culture of Time" description="Learn about the different rhythms of global business, from linear and sequential (monochronic) to fluid and simultaneous (polychronic) approaches to time." tables={[culturalData.workLifeBalance]} />}
            {activeTab === 3 && <SelectorSection sectionKey="etiquette" title="The Art of the Relationship" description="Master the practical social skills for business settings across the globe." detailRenderer={etiquetteDetailRenderer} />}
            {activeTab === 4 && <SelectorSection sectionKey="dna" title="The Nation's Soul" description="Connect business practices to a country's deeper cultural DNA." detailRenderer={dnaDetailRenderer} tables={[culturalData.corePhilosophies, culturalData.artAndCulture]} />}
            {activeTab === 5 && <SelectorSection sectionKey="vocabulary" title="Key Vocabulary" description="Review the specialized terms and concepts for each topic." detailRenderer={vocabularyDetailRenderer} />}
            {activeTab === 6 && <SelectorSection sectionKey="homework" title="Homework Assignments" description="Complete the assignments for each topic to solidify your understanding." detailRenderer={homeworkDetailRenderer} />}
        </Box>
    );
};

const ChartSection = ({ sectionKey, title, description, tables }) => {
    const sectionData = useMemo(() => [...culturalData[sectionKey]].sort((a, b) => a.score - b.score), [sectionKey]);
    const [selectedDetails, setSelectedDetails] = useState(null);
    const theme = useTheme();
    const chartRef = useRef();

    useEffect(() => {
        if (sectionData.length > 0) setSelectedDetails(sectionData[sectionData.length - 1]);
    }, [sectionData]);

    const chartOptions = {
        indexAxis: 'y', maintainAspectRatio: false, responsive: true,
        onHover: (event, chartElement) => event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default',
        plugins: {
            legend: { display: false },
            tooltip: { 
                enabled: true, bodyFont: {size: 14}, titleFont: {size: 16},
                backgroundColor: hexToRgba(theme.palette.background.paper, 0.75),
                borderColor: hexToRgba(theme.palette.text.primary, 0.2),
                borderWidth: 1, titleColor: theme.palette.text.primary, bodyColor: theme.palette.text.primary, padding: 12,
                callbacks: { label: () => ' Click for details' }
            }
        },
        scales: {
            x: {
                beginAtZero: true, max: 10, ticks: { color: theme.palette.text.primary }, grid: { color: theme.palette.divider },
                title: { display: true, text: 'Spectrum', color: theme.palette.text.secondary, font: {size: 16, weight: 'bold'} }
            },
            y: { ticks: { color: theme.palette.text.primary }, grid: { display: false } }
        },
    };

    const chartData = {
        labels: sectionData.map(item => item.name),
        datasets: [{
            label: 'Score', data: sectionData.map(item => item.score),
            backgroundColor: theme.palette.secondary.main, borderColor: theme.palette.secondary.dark, borderWidth: 1,
            hoverBackgroundColor: theme.palette.secondary.light, hoverBorderColor: theme.palette.secondary.dark,
        }],
    };
    
    const handleChartClick = (event) => {
        const element = getElementAtEvent(chartRef.current, event);
        if (element.length > 0) setSelectedDetails(sectionData[element[0].index]);
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
                     <DetailCard content={selectedDetails ? selectedDetails.details : 'Select a country to view details.'} />
                </Box>
            </Box>
            {tables && tables.map((tableData, index) => (
                <Box sx={{ mt: 4 }} key={index}> <CustomTable tableData={tableData} /> </Box>
            ))}
        </Box>
    );
};

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
                         <MuiTooltip title={`View details for ${item.title || item.topic || item.name}`} key={item.title || item.topic || item.name} arrow>
                            <Button
                                variant={selectedItem === item ? 'contained' : 'outlined'}
                                onClick={() => setSelectedItem(item)}
                                sx={{
                                    transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
                                    '&:hover': { transform: 'scale(1.05)', filter: 'brightness(1.1)' }
                                }}
                            >
                                {sectionKey === 'dna' ? item.name : (item.title || item.topic || item.name)}
                            </Button>
                        </MuiTooltip>
                    ))}
                </Stack>
            </Grid>
            <Grid item xs={12}>
                 <DetailCard content={detailRenderer(selectedItem)} />
            </Grid>
            {tables && tables.map((tableData, index) => (
                <Grid item xs={12} key={index}> <CustomTable tableData={tableData} /> </Grid>
            ))}
        </Grid>
    );
};

const DetailCard = ({ content }) => (
    <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Card sx={{ flex: 1, overflowY: 'auto' }}>
            <CardContent>
                <Typography variant="body1" component="div" dangerouslySetInnerHTML={{ __html: content }} 
                    sx={{
                        '.homework-email': {
                            backgroundColor: (theme) => theme.palette.action.hover,
                            borderLeft: (theme) => `4px solid ${theme.palette.secondary.main}`,
                            padding: '1rem', marginTop: '1rem', color: (theme) => theme.palette.text.primary,
                        },
                    }}
                />
            </CardContent>
        </Card>
    </Paper>
);

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

// --- Main Exported Component ---

export default function GlobalBusinessCultures() {
  return (
    <>
      <Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6 } }}>
        <Header />
        <MainContent />
      </Box>
      <GlobalScrollIndicator />
    </>
  );
}
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box, Typography, Tabs, Tab, Card, CardContent, Grid, Button,
    Stack, Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Tooltip as MuiTooltip
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { keyframes } from '@emotion/react';
import { verbTenseData } from '../verbTenseData.js';

// --- Helper Functions and Components (Reused from GlobalBusinessCultures) ---

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
      English Verb Tenses
    </Typography>
    <Typography variant="h6" sx={{ color: 'text.primary' }}>
      Mastering how we talk about time: past, present, and future.
    </Typography>
  </Box>
);

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

const TenseSelector = ({ sectionKey, title, description, detailRenderer, tableData }) => {
    const sectionData = verbTenseData[sectionKey];
    const [selectedItem, setSelectedItem] = useState(sectionData[0]);

    useEffect(() => {
        setSelectedItem(sectionData[0]);
    }, [sectionData]);

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
                    {sectionData.map(item => (
                         <MuiTooltip title={`View details for ${item.name}`} key={item.name} arrow>
                            <Button
                                variant={selectedItem === item ? 'contained' : 'outlined'}
                                onClick={() => setSelectedItem(item)}
                                sx={{
                                    transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
                                    '&:hover': { transform: 'scale(1.05)', filter: 'brightness(1.1)' }
                                }}
                            >
                                {item.name}
                            </Button>
                        </MuiTooltip>
                    ))}
                </Stack>
            </Grid>
            <Grid item xs={12}>
                 <DetailCard content={detailRenderer(selectedItem)} />
            </Grid>
            {tableData && (
                <Grid item xs={12}> <CustomTable tableData={tableData} /> </Grid>
            )}
        </Grid>
    );
};

const vocabularyDetailRenderer = (item) => `
    <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Vocabulary for ${item.topic}</h3>
    <ul style="list-style-position: inside; padding-left: 0; margin: 0; display: grid; gap: 1em;">
        ${item.terms.map(t => `<li><strong>${t.term}:</strong><p style="margin: 0.25em 0 0 0;">${t.definition}</p></li>`).join('')}
    </ul>`;
    
const homeworkDetailRenderer = (item) => `<h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">${item.title} (Topic: ${item.topic})</h3><div>${item.details}</div>`;


const MainContent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (event, newValue) => setActiveTab(newValue);
    const sections = ["Present Time", "Past Time", "Future Time", "Key Vocabulary", "Homework"];

    const genericDetailRenderer = (item) => item.details;

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile
                    aria-label="verb tense sections tabs"
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
            
            {activeTab === 0 && <TenseSelector sectionKey="presentTime" title="Describing Present Time" description="These tenses cover now, general truths, and actions with a strong connection to the present." detailRenderer={genericDetailRenderer} tableData={verbTenseData.presentSummaryTable} />}
            {activeTab === 1 && <TenseSelector sectionKey="pastTime" title="Describing Past Time" description="Use these tenses for actions and situations that were completed or ongoing before now." detailRenderer={genericDetailRenderer} tableData={verbTenseData.pastSummaryTable} />}
            {activeTab === 2 && <TenseSelector sectionKey="futureTime" title="Describing Future Time" description="These structures are for actions and situations that will happen after the present moment." detailRenderer={genericDetailRenderer} tableData={verbTenseData.futureSummaryTable} />}
            {activeTab === 3 && <TenseSelector sectionKey="vocabulary" title="Key Vocabulary" description="Review the specialized grammatical terms and concepts for verb tenses." detailRenderer={vocabularyDetailRenderer} />}
            {activeTab === 4 && <TenseSelector sectionKey="homework" title="Homework Assignments" description="Complete the assignments for each topic to solidify your understanding." detailRenderer={homeworkDetailRenderer} />}
        </Box>
    );
};


// --- Main Exported Component ---

export default function EnglishVerbTenses() {
  // Set the document title when the component mounts
  useEffect(() => {
    document.title = 'English Verb Tenses | ESL Lessons';
  }, []);

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


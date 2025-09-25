import React, { useState, useEffect } from 'react';
import {
    Box, Typography, Grid, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper
} from '@mui/material';
// FIX: Changed import path
import { culturalData } from '../../data/culturalData.js';
// FIX: Changed import paths for components
import ContentSelector from '../../components/ContentSelector';
import LessonTabs from '../../components/LessonTabs';
import ChartSection from '../../components/ChartSection';

// --- Helper Components (Header, CustomTable) remain the same ---
const Header = () => (
  <Box sx={{ textAlign: 'center', mb: 4 }}>
    <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
      Global Business Cultures
    </Typography>
    <Typography variant="h6" sx={{ color: 'text.primary' }}>
      Navigating the complexities of international business communication.
    </Typography>
  </Box>
);

const CustomTable = ({ tableData }) => (
    <Paper sx={{overflow: 'hidden'}}>
    <TableContainer>
        <Box sx={{ p: 2, textAlign: 'center' }}>
             <Typography variant="h5" component="h3" color="text.secondary">{tableData.title}</Typography>
        </Box>
        <Table stickyHeader aria-label={tableData.title}>
            <TableHead><TableRow>{tableData.headers.map(h => <TableCell key={h}><strong>{h}</strong></TableCell>)}</TableRow></TableHead>
            <TableBody>
                {tableData.rows.map((row, i) => <TableRow key={i}>{row.map((cell, j) => <TableCell key={j} dangerouslySetInnerHTML={{ __html: cell }} />)}</TableRow>)}
            </TableBody>
        </Table>
    </TableContainer>
    </Paper>
);


// --- Main Lesson Content ---
const MainContent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (event, newValue) => setActiveTab(newValue);
    const sections = ["Communication", "Power & Hierarchy", "Time & Scheduling", "Social Etiquette", "Cultural DNA", "Key Vocabulary", "Homework"];

    const renderTable = (tableData) => <CustomTable tableData={tableData} />;

    // --- MODIFICATION: Implemented the detail renderers ---
    const etiquetteDetailRenderer = (item) => `
        <h3 style="font-size: 1.5em; font-weight: bold;">${item.name}</h3>
        <p><strong>Greeting:</strong> ${item.greeting}</p>
        <p><strong>Dining:</strong> ${item.dining}</p>
        <p><strong>Gifting:</strong> ${item.gifting}</p>
    `;

    const dnaDetailRenderer = (item) => `
        <h3 style="font-size: 1.5em; font-weight: bold;">${item.title}</h3>
        <p>${item.details}</p>
    `;

    const vocabularyDetailRenderer = (item) => `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Vocabulary for ${item.topic}</h3>
        <ul style="list-style-position: inside; padding-left: 0; margin: 0; display: grid; gap: 1em;">
            ${item.terms.map(t => `<li><strong>${t.term}:</strong><p style="margin: 0.25em 0 0 0;">${t.definition}</p></li>`).join('')}
        </ul>
    `;

    const homeworkDetailRenderer = (item) => `
        <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">${item.title} (Topic: ${item.topic})</h3>
        <div>${item.details}</div>
    `;

    return (
        <Box sx={{ width: '100%' }}>
            <LessonTabs
                activeTab={activeTab}
                handleTabChange={handleTabChange}
                sections={sections}
            />
            
            {activeTab === 0 && <ChartSection data={culturalData.communication} title="The Spectrum of Communication" description="This section explores the spectrum from direct, low-context communication to indirect, high-context styles."/>}
            {activeTab === 1 && <ChartSection data={culturalData.power} title="Power, Deference, and Decisions" description="Discover how power is structured and perceived, from flat, egalitarian models to steep, hierarchical ones."/>}
            {activeTab === 2 && <ChartSection data={culturalData.time} title="The Culture of Time" description="Learn about the different rhythms of global business, from linear and sequential (monochronic) to fluid and simultaneous (polychronic) approaches to time." tables={[renderTable(culturalData.workLifeBalance)]} />}
            
            {activeTab === 3 && <ContentSelector sectionData={culturalData.etiquette} title="The Art of the Relationship" description="Master the practical social skills for business settings across the globe." detailRenderer={etiquetteDetailRenderer} />}
            {activeTab === 4 && <ContentSelector sectionData={culturalData.dna} title="The Nation's Soul" description="Connect business practices to a country's deeper cultural DNA." detailRenderer={dnaDetailRenderer} tables={[renderTable(culturalData.corePhilosophies), renderTable(culturalData.artAndCulture)]} />}
            {activeTab === 5 && <ContentSelector sectionData={culturalData.vocabulary} title="Key Vocabulary" description="Review the specialized terms and concepts for each topic." detailRenderer={vocabularyDetailRenderer} />}
            {activeTab === 6 && <ContentSelector sectionData={culturalData.homework} title="Homework Assignments" description="Complete the assignments for each topic to solidify your understanding." detailRenderer={homeworkDetailRenderer} />}
        </Box>
    );
};

// --- Main Exported Component (remains the same) ---
export default function GlobalBusinessCultures() {
  useEffect(() => {
    document.title = 'Global Business Cultures | ESL Lessons';
  }, []);

  return (
    <Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6 } }}>
      <Header />
      <MainContent />
    </Box>
  );
}
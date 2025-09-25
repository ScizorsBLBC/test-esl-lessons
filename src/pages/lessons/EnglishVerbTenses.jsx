// src/pages/lessons/EnglishVerbTenses.jsx

import React, { useState, useEffect } from 'react';
import {
    Box, Typography, Grid, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper
} from '@mui/material';
import { verbTenseData } from '../../data/verbTenseData.js';
import ContentSelector from '../../components/ContentSelector';
import LessonTabs from '../../components/LessonTabs';

// FIX: Added a local Header component to match the structure of other lesson pages.
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
    const sections = ["Present Time", "Past Time", "Future Time", "Key Vocabulary", "Homework"];
    
    const renderTable = (tableData) => (
        <Grid item xs={12} key={tableData.title}> <CustomTable tableData={tableData} /> </Grid>
    );

    const genericDetailRenderer = (item) => item.details;

    const vocabularyDetailRenderer = (item) => `<h3>Vocabulary for ${item.topic}</h3><ul>${item.terms.map(t => `<li><strong>${t.term}:</strong> ${t.definition}</li>`).join('')}</ul>`;

    const homeworkDetailRenderer = (item) => `<h3>${item.title}</h3><div>${item.details}</div>`;

// TODO: fix the middle section that is not centered correctly on mobile
    return (
        <Box sx={{ width: '100%' }}>
            <LessonTabs
                activeTab={activeTab}
                handleTabChange={handleTabChange}
                sections={sections}
            />

            {activeTab === 0 && <ContentSelector sectionData={verbTenseData.presentTime} title="Describing Present Time" description="These tenses cover actions happening now, general truths, and situations with a strong link to the present." detailRenderer={genericDetailRenderer} tables=
            {[renderTable(verbTenseData.presentSummaryTable)]} preserveOrder />}

            {activeTab === 1 && <ContentSelector sectionData={verbTenseData.pastTime} title="Describing Past Time" description="Use these tenses for actions and situations that were completed or ongoing before now." detailRenderer={genericDetailRenderer} tables={[renderTable(verbTenseData.pastSummaryTable)]} preserveOrder />}

            {activeTab === 2 && <ContentSelector sectionData={verbTenseData.futureTime} title="Describing Future Time" description="These structures are for actions and situations that will happen after the present moment." detailRenderer={genericDetailRenderer} tables={[renderTable(verbTenseData.futureSummaryTable)]} preserveOrder />}

            {activeTab === 3 && <ContentSelector sectionData={verbTenseData.vocabulary} title="Key Vocabulary" description="Review the specialized grammatical terms and concepts for verb tenses." detailRenderer={vocabularyDetailRenderer} />}

            {activeTab === 4 && <ContentSelector sectionData={verbTenseData.homework} title="Homework Assignments" description="Complete the assignments for each topic to solidify your understanding." detailRenderer={homeworkDetailRenderer} />}
        </Box>
    );
};

// --- Main Exported Component ---
export default function EnglishVerbTenses() {
  useEffect(() => {
    document.title = 'English Verb Tenses | ESL Lessons';
  }, []);

  return (
    <Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6 } }}>
      <Header />
      <MainContent />
    </Box>
  );
}
import React, { useState, useEffect } from 'react';
import {
    Box, Typography, Grid, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper
} from '@mui/material';
// FIX: Changed import path
import { verbTenseData } from '../../data/verbTenseData.js';
// FIX: Changed import paths for components
import ContentSelector from '../../components/ContentSelector';
import LessonTabs from '../../components/LessonTabs';

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


// --- RENDERER FUNCTIONS ---
const vocabularyDetailRenderer = (item) => `
    <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Vocabulary for ${item.topic}</h3>
    <ul style="list-style-position: inside; padding-left: 0; margin: 0; display: grid; gap: 1em;">
        ${item.terms.map(t => `<li><strong>${t.term}:</strong><p style="margin: 0.25em 0 0 0;">${t.definition}</p></li>`).join('')}
    </ul>`;

const homeworkDetailRenderer = (item) => `<h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">${item.title} (Topic: ${item.topic})</h3><div>${item.details}</div>`;

const genericDetailRenderer = (item) => item.details;

// --- Main Lesson Content ---
const MainContent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (event, newValue) => setActiveTab(newValue);
    const sections = ["Present Time", "Past Time", "Future Time", "Key Vocabulary", "Homework"];

    // A function to create the table JSX, which we will pass as a prop
    const renderTable = (tableData) => (
        <Grid item xs={12} key={tableData.title}> <CustomTable tableData={tableData} /> </Grid>
    );

    return (
        <Box sx={{ width: '100%' }}>
            {/* The old Tabs component is replaced with our new, reusable one. */}
            <LessonTabs
                activeTab={activeTab}
                handleTabChange={handleTabChange}
                sections={sections}
            />

            {activeTab === 0 && <ContentSelector sectionData={verbTenseData.presentTime} title="Describing Present Time" description="These tenses cover actions happening now, general truths, and situations with a strong link to the present." detailRenderer={genericDetailRenderer} tables={[renderTable(verbTenseData.presentSummaryTable)]} preserveOrder />}
            {activeTab === 1 && <ContentSelector sectionData={verbTenseData.pastTime} title="Describing Past Time" description="Use these tenses for actions and situations that were completed or ongoing before now." detailRenderer={genericDetailRenderer} tables={[renderTable(verbTenseData.pastSummaryTable)]} preserveOrder />}
            {activeTab === 2 && <ContentSelector sectionData={verbTenseData.futureTime} title="Describing Future Time" description="These structures are for actions and situations that will happen after the present moment." detailRenderer={genericDetailRenderer} tables={[renderTable(verbTenseData.futureSummaryTable)]} preserveOrder />}
            {activeTab === 3 && <ContentSelector sectionData={verbTenseData.vocabulary} title="Key Vocabulary" description="Review the specialized grammatical terms and concepts for verb tenses." detailRenderer={vocabularyDetailRenderer} />}
            {activeTab === 4 && <ContentSelector sectionData={verbTenseData.homework} title="Homework Assignments" description="Complete the assignments for each topic to solidify your understanding." detailRenderer={homeworkDetailRenderer} />}
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
    </>
  );
}


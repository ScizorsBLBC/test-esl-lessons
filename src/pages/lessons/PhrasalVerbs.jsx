// src/pages/lessons/PhrasalVerbs.jsx

import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { phrasalVerbData } from '../../data/phrasalVerbData.js';
import ContentSelector from '../../components/ContentSelector';
import LessonTabs from '../../components/LessonTabs';
import DetailCard from '../../components/DetailCard';

// --- Detail Renderers ---

const introDetailRenderer = (item) => `
    <div style="text-align: center;">
      <h3 style="font-size: 1.5em; font-weight: bold;">${item.name}</h3>
      <p>${item.detail}</p>
    </div>
`;

const workplaceDetailRenderer = (item) => `
    <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; text-align: center;">
      <div>
        <h4 style="margin-bottom: 0.5em;">Meaning:</h4>
        <p style="margin-top: 0;">${item.definition}</p>
      </div>
      <div style="background-color: rgba(0,0,0,0.1); padding: 1rem; border-radius: 8px;">
        <h4 style="margin-bottom: 0.5em;">Example:</h4>
        <p style="margin-top: 0;"><em>"${item.example}"</em></p>
      </div>
    </div>
`;

const genericDetailRenderer = (item) => item.details;

// --- Main Page Component ---

export default function PhrasalVerbs() {
  useEffect(() => {
    document.title = 'Phrasal Verbs | ESL Lessons';
  }, []);

  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => setActiveTab(newValue);
  // FIX: Added 'Full Vocabulary' back to the tabs
  const sections = ["Introduction", "Workplace Verbs", "Full Vocabulary", "Practice & Assess"];

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold', textAlign: 'center' }}>
        Phrasal Verbs
      </Typography>

      <LessonTabs
        activeTab={activeTab}
        handleTabChange={handleTabChange}
        sections={sections}
      />

      {activeTab === 0 && (
        <Grid container spacing={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
          <Grid item xs={12} sx={{ width: '100%', maxWidth: '1100px', textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom>{phrasalVerbData.introduction.title}</Typography>
            <Typography component="div" dangerouslySetInnerHTML={{ __html: phrasalVerbData.introduction.details }} />
          </Grid>
          <Grid item xs={12} sx={{ width: '100%', maxWidth: '1100px' }}>
             <ContentSelector
                sectionData={phrasalVerbData.introduction.summaryVerbs}
                title="Key Examples"
                detailRenderer={introDetailRenderer}
             />
          </Grid>
        </Grid>
      )}

      {activeTab === 1 && (
        <ContentSelector
            sectionData={phrasalVerbData.workplaceVerbs}
            title="Common Workplace Phrasal Verbs"
            description="Select a verb to see its meaning and an example in our 'flashcard' view."
            detailRenderer={workplaceDetailRenderer}
        />
      )}

      {/* FIX: Restored the Full Vocabulary tab content */}
      {activeTab === 2 && (
        <ContentSelector
            sectionData={phrasalVerbData.fullVocabulary}
            title="Student Reference Guide: 100 Common Phrasal Verbs"
            description="This is a reference for your homework and future study."
            detailRenderer={genericDetailRenderer}
        />
      )}
      
      {activeTab === 3 && (
        <ContentSelector
            sectionData={phrasalVerbData.assessment}
            title="Practice & Assessment"
            description="Use the exercises below to check your understanding."
            detailRenderer={genericDetailRenderer}
            preserveOrder={true}
        />
      )}
    </Box>
  );
}
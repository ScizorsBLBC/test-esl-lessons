import React, { useState, useEffect } from 'react';
import {
    Box, Typography, Grid
} from '@mui/material';
import { phrasalVerbData } from '../phrasalVerbData.js'; // Import the new data
import ContentSelector from '../components/ContentSelector';
import LessonTabs from '../components/LessonTabs';

// --- Helper Functions ---

// Renders the individual Phrasal Verb details for the Workplace Verbs list
const workplaceDetailRenderer = (item) => `
    <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 0.5em;">${item.name}</h3>
    <p style="margin-bottom: 0.5em;"><strong>Meaning:</strong> ${item.definition}</p>
    <p><strong>Example:</strong> <em>"${item.example}"</em></p>
`;

// Renders the content for Intro/Vocab/Assessment blocks
const genericDetailRenderer = (item) => item.details;

// Renders content that doesn't need buttons (like the Intro block)
const renderFullBlockSection = (data) => (
    <Grid container spacing={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid item xs={12} sx={{ width: '100%', maxWidth: '1100px', flexGrow: 1, minHeight: 400 }}>
            <ContentSelector 
                sectionData={[data]} // Pass the single item as an array to force it to render the content immediately
                title={data.title}
                description={data.description || ""}
                detailRenderer={genericDetailRenderer}
                preserveOrder
            />
        </Grid>
    </Grid>
);


// --- Main Lesson Content ---
const MainContent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (event, newValue) => setActiveTab(newValue);
    
    const sections = ["Introduction", "Workplace Verbs", "Full Vocabulary", "Practice & Assess"];

    return (
        <Box sx={{ width: '100%' }}>
            <LessonTabs
                activeTab={activeTab}
                handleTabChange={handleTabChange}
                sections={sections}
            />

            {/* Tab 0: Introduction */}
            {activeTab === 0 && renderFullBlockSection(phrasalVerbData.introduction)}

            {/* Tab 1: Workplace Verbs (Strategy) */}
            {activeTab === 1 && <ContentSelector 
                sectionData={phrasalVerbData.strategy.workplaceVerbs} 
                title={phrasalVerbData.strategy.title} 
                description={phrasalVerbData.strategy.description} 
                detailRenderer={workplaceDetailRenderer} 
                // Set to false to alphabetize the verbs
                preserveOrder={false}
            />}

            {/* Tab 2: Full Vocabulary List (100 Verbs by Topic) */}
            {activeTab === 2 && <ContentSelector 
                sectionData={phrasalVerbData.fullVocabulary} 
                title="Student Reference Guide: 100 Common Phrasal Verbs" 
                description="This section contains the full vocabulary list organized by topic for your reference and homework completion." 
                detailRenderer={genericDetailRenderer} 
                // Preserve the thematic order (Communication, Socializing, etc.)
                preserveOrder
            />}
            
            {/* Tab 3: Practice & Assessment */}
            {activeTab === 3 && <ContentSelector 
                sectionData={phrasalVerbData.assessment} 
                title="Practice & Assessment" 
                description="Use the sections below to practice using phrasal verbs in context, complete a gap-fill assessment, and review homework instructions." 
                detailRenderer={genericDetailRenderer} 
                preserveOrder
            />}
        </Box>
    );
};

// --- Main Exported Component ---
export default function PhrasalVerbs() {
  useEffect(() => {
    document.title = 'Phrasal Verbs | ESL Lessons';
  }, []);

  return (
    <Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6 } }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold', textAlign: 'center' }}>
        Phrasal Verbs
      </Typography>
      <MainContent />
    </Box>
  );
}